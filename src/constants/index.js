import {
  django,
  cp,
  web,
  sql,
  c,
  ch,
  cpp,
  java,
  python,
  incredible,
  shell,
  mothercare,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DataBase Manager",
    icon: sql,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competetive Programmer",
    icon: cp,
  },
  {
    title: "Backend Developer",
    icon: django,
  },
];

const technologies = [
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "ch",
    icon: ch,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  }
];

const projects = [
  {
    name: "MotherCare App",
    description:
      "People and students are generally over-burdened with stress and anxiety especially in this post-corona-period. Our application provides an interface to avoid such situations during the prevention phase rather than going for the cure. ",
    tags: [],
    image: mothercare,
    source_code_link: "https://www.figma.com/proto/fTjg0qF6lvOyn4JMjsTFNA/MotherCare-(Copy)?node-id=0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A6&show-proto-sidebar=1",
  },
  {
    name: "The Incredible App",
    description:
      "Our platform connects donors with surplus food to underprivileged individuals in need, and we have developed a high fidelity prototype using design software like Figma to ensure efficient regulation of food donations. ",
    tags: [],
    image: incredible,
    source_code_link: "https://www.figma.com/proto/xY4RBuCM015orHwSi4mgVk/HI-FI-PROTOTYPE-incrEDIBLE?node-id=61-170&starting-point-node-id=61%3A17",
  },
  {
    name: "Linux Shell",
    description:
      "This project aims on building a custom shell for the user which handles commands like rm, cd, ls, mkdir, date etc. This shell was build in C language",
    tags: [],
    image: shell,
    source_code_link: "https://github.com/mananchugh02/Custom-Shell",
  },
];

export { services, technologies, projects };
