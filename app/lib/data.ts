export const headerNavs = [
  {
    text: "Intro",
    href: "#intro",
  },

  {
    text: "About",
    href: "#about",
  },
  {
    text: "Works",
    href: "#works",
  },
  {
    text: "Contact",
    href: "#footer",
  },
];

export const experience: { company: string; position: string }[] = [
  {
    company: "Solusoft",
    position: "Practitioner",
  },
];

export const awards: {
  title: string;
  href: string;
  institution: string;
  year: number;
}[] = [
  {
    title: "Responsive Web Design",
    href: "https://www.freecodecamp.org/certification/frjr17/responsive-web-design",
    institution: "freeCodeCamp",
    year: 2023,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    href: "https://www.freecodecamp.org/certification/frjr17/javascript-algorithms-and-data-structures",
    institution: "freeCodeCamp",
    year: 2023,
  },
  {
    title: "Frontend Development Libraries",
    href: "https://www.freecodecamp.org/certification/frjr17/front-end-development-libraries",
    institution: "freeCodeCamp",
    year: 2023,
  },
];

export const skills: {
  name: string;
  description?: string;
}[] = [
  {
    name: "Front-End Development",
    description:
      "Creating engaging user interfaces and experiences using HTML, CSS, and JavaScript to interact with users directly.",
  },
  {
    name: "Back-End Development",
    description:
      " Building server-side logic, databases, and APIs using languages like Python, Node.js, or Java to manage data and handle application functionality.",
  },
  {
    name: "Graphic Design",
    description:
      "Skilled in crafting visually appealing and impactful digital and print designs.",
  },
  {
    name: "UI/UX",
    description:
      "Adept at creating intuitive and aesthetically pleasing user interfaces that enhance the overall user experience.",
  },
  {
    name: "DevOps",
    description:
      "Experienced in automating and optimizing the software development lifecycle for efficient and reliable deployment.",
  },
];

export const socialNetworks: { name: string; href: string; path: string }[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/frjr17",
    path: "/svg/linkedin.svg",
  },
  {
    name: "Github",
    href: "https://github.com/frjr17",
    path: "/svg/github.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/_frjr17",
    path: "/svg/twitter.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_frjr17",
    path: "/svg/instagram.svg",
  },
  {
    name: "Tiktok",
    href: "https://tiktok.com/_frjr17",
    path: "/svg/tiktok.svg",
  },
  {
    name: "Dev Community",
    href: "https://dev.to/frjr17",
    path: "/svg/devto.svg",
  },
  {
    name: "Hashnode",
    href: "https://hashnode.com/@frjr17",
    path: "/svg/hashnode.svg",
  },
  {
    name: "Medium",
    href: "https://medium.com/@frjr17",
    path: "/svg/medium.svg",
  },
];

type SkillNames =
  | "Front-End Development"
  | "Back-End Development"
  | "Graphic Design"
  | "UI/UX"
  | "DevOps";

export const projects: {
  name: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
  skills: SkillNames[];
}[] = [
  {
    name: "Netflix Clone",
    description: "My Own version of Netflix using Next.js && Firebase",
    imgUrl: "/images/folio/netflix-clone.png",
    skills: ["Front-End Development", "Back-End Development"],
    projectUrl: "https://github.com/frjr17/netflixClone",
  },
  {
    name: "Drum Machine",
    description: "A 9-pad drum machine using JavaScript",
    imgUrl: "/images/folio/drum-machine.png",
    skills: ["Front-End Development"],
    projectUrl: "https://github.com/frjr17/drumMachine",
  },
  {
    name: "Markdown Previewer",
    description: "A previewer for markdown code",
    imgUrl: "/images/folio/markdown-previewer.png",
    skills: ["Front-End Development"],
    projectUrl: "https://github.com/frjr17/markdownPreviewer",
  },
  {
    name: "Pomodoro Clock",
    description: "A clock for Pomodoro Technique",
    imgUrl: "/images/folio/pomodoro-clock.png",
    skills: ["Front-End Development"],
    projectUrl: "https://github.com/frjr17/pomodoroClock",
  },
];
