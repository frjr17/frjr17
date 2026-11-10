export type Profile = {
  name: string;
  login: string;
  contributionsYear: number;
  commits: number;
  pullRequests: number;
  stars: number;
  publicRepos: number;
  weeks: number[]; // contributions per week, oldest → newest
  languages: { name: string; share: number }[]; // share 0..1, top 6 + "other"
};

const QUERY = `query($login:String!){
  user(login:$login){
    name login
    repositories(ownerAffiliations:OWNER, isFork:false, first:100, privacy:PUBLIC){
      totalCount
      nodes{ stargazerCount languages(first:10, orderBy:{field:SIZE,direction:DESC}){ edges{ size node{ name } } } }
    }
    contributionsCollection{
      totalCommitContributions totalPullRequestContributions restrictedContributionsCount
      contributionCalendar{ totalContributions weeks{ contributionDays{ contributionCount } } }
    }
  }
}`;

export async function fetchProfile(login: string, token: string): Promise<Profile> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status}: ${await res.text()}`);
  const { data, errors } = await res.json();
  if (errors) throw new Error(JSON.stringify(errors));
  const u = data.user;
  const cc = u.contributionsCollection;

  const bytes = new Map<string, number>();
  let stars = 0;
  for (const r of u.repositories.nodes) {
    stars += r.stargazerCount;
    for (const e of r.languages.edges) bytes.set(e.node.name, (bytes.get(e.node.name) ?? 0) + e.size);
  }
  const total = [...bytes.values()].reduce((a, b) => a + b, 0) || 1;
  const sorted = [...bytes.entries()].sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 6).map(([name, b]) => ({ name, share: b / total }));
  const rest = sorted.slice(6).reduce((a, [, b]) => a + b, 0) / total;
  if (rest > 0.005) top.push({ name: "Other", share: rest });

  return {
    name: u.name ?? u.login,
    login: u.login,
    contributionsYear: cc.contributionCalendar.totalContributions,
    commits: cc.totalCommitContributions + cc.restrictedContributionsCount,
    pullRequests: cc.totalPullRequestContributions,
    stars,
    publicRepos: u.repositories.totalCount,
    weeks: cc.contributionCalendar.weeks.map((w: any) =>
      w.contributionDays.reduce((a: number, d: any) => a + d.contributionCount, 0)),
    languages: top,
  };
}

export const MOCK: Profile = {
  name: "Hernán Valencia", login: "frjr17",
  contributionsYear: 1284, commits: 962, pullRequests: 143, stars: 58, publicRepos: 41,
  weeks: Array.from({ length: 53 }, (_, i) => Math.round(12 + 18 * Math.abs(Math.sin(i / 4)) + (i % 7) * 2)),
  languages: [
    { name: "TypeScript", share: 0.41 }, { name: "Go", share: 0.18 }, { name: "Groovy", share: 0.12 },
    { name: "JavaScript", share: 0.1 }, { name: "Dockerfile", share: 0.07 }, { name: "Shell", share: 0.06 },
    { name: "Other", share: 0.06 },
  ],
};
