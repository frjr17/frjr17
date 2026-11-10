// CV content for the profile cards, mirrored from frjr17.com (AdrienWebsite: src/lib/content.en.ts).
export const SITE = "https://frjr17.com";

export const intro =
  "I design, build, modernize, and deploy production software — across the application stack and the infrastructure beneath it. Seven years of shipping systems in telecom, insurance, banking, energy, logistics, legal, and public-sector environments.";

export const now = {
  org: "CGI",
  role: "Consultant — Full-Stack & DevOps Engineering",
  text: "Delivery pipelines for 30+ production services on AWS EKS with Jenkins and Argo CD, for US telecom and insurance clients.",
};

export const work = [
  { slug: "enterprise-cicd-modernization", title: "Enterprise CI/CD modernization", client: "US regional insurer · 30+ production projects", stack: ["AWS EKS", "Jenkins", "Argo CD", "Terraform", "Helm"] },
  { slug: "container-hardening", title: "Container hardening: 300+ vulnerabilities to zero", client: "US telecom · same behaviour on rebuilt images", stack: ["Docker", "Kubernetes", "CI gates", "Node.js", "Java"] },
  { slug: "legacy-financial-web-platform", title: "Legacy financial desktop software to the web", client: "Financial institution · 2022 — 2024", stack: ["React", "Node.js", "PostgreSQL", "REST API", "Docker"] },
  { slug: "invoice-processing-automation", title: "Invoice processing: two days to fifteen minutes", client: "Enterprise services client · 2023 — 2024", stack: ["Power Automate", "RPA", "AI document processing"] },
];

export const experience = [
  { years: "2024 — present", role: "Consultant — Full-Stack & DevOps Engineering", org: "CGI" },
  { years: "2022 — 2026", role: "Contractor / Systems Analyst", org: "Solusoft" },
  { years: "2024", role: "Full-Stack Developer", org: "Parkour Devs" },
  { years: "2022", role: "Full-Stack Developer", org: "PDS" },
  { years: "2019 — 2022", role: "Full-Stack Developer", org: "Legality Panamá" },
];

export const education = [
  { years: "Nov 2026", role: "B.Sc. Systems Engineering (expected)", org: "Universidad Interamericana de Panamá" },
];

export const badges = [
  { id: "aws-cloud-practitioner", name: "Cloud Practitioner", org: "AWS Certified", years: "2026", url: "https://www.credly.com/badges/a14c05dc-b37e-45d3-845b-07fbcaedf7fd/public_url" },
  { id: "aws-ai-practitioner", name: "AI Practitioner", org: "AWS Certified", years: "2026", url: "https://www.credly.com/badges/5f886c31-e20b-43e0-89ee-f5395968eb98/public_url" },
];

export const socials = [
  { id: "website", label: "frjr17.com", url: "https://frjr17.com" },
  { id: "github", label: "github", url: "https://github.com/frjr17" },
  { id: "linkedin", label: "linkedin", url: "https://linkedin.com/in/frjr17" },
  { id: "email", label: "email", url: "mailto:hello@frjr17.com" },
];
