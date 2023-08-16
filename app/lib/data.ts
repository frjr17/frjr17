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

export const numbers: {
  name: string;
  number: number | string;
  description?: string;
}[] = [
  {
    name: "Happy Customers",
    number: 15,
    description:
      "The most rewarding part of my journey is seeing the smiles on my satisfied customers' faces. I've built a community of happy customers who trust in my brand. Each happy customer reinforces my commitment to innovation and excellence, motivating me to always strive for the best.",
  },
  {
    name: "Projects Completed",
    number: 5,
    description:
      "I take great pride in successfully bringing a wide range of projects to fruition. From small-scale endeavors to complex ventures, I've completed numerous projects across various industries. Each project represents a challenge conquered and a step forward in my ongoing pursuit of excellence.",
  },
  {
    name: "Lines of Code",
    number: "15k",
    description:
      "Behind every digital creation of mine lies a foundation of thoughtfully crafted code. I'm dedicated to creating efficient, reliable, and inventive solutions, as reflected in the countless lines of code I've written. My coding efforts are driven by a passion for crafting products that make a positive impact in the digital realm.",
  },
  {
    name: "Cups of Coffee",
    number: "85",
    description:
      "As I delve into brainstorming, coding marathons, and discussions, cups of coffee stand as my steadfast companions. Each cup symbolizes the energy and dedication I pour into my work. They fuel my creativity and serve as a reminder of the passion that propels me to continually surpass my limits.",
  },
];
