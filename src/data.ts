import calculator from "./assets/images/mobile-calculator.jpg";
import memory from "./assets/images/memory-card-game.jpg";
import punk from "./assets/images/punk-api.jpg";
import ticket from "./assets/images/ticket-tracker.jpg";
import todo from "./assets/images/to-do.jpg";

export const Projects = [
  {
    title: "Web calculator.",
    description:
      "Web calculator. This was my first project using HTML and CSS. I created a working calculator with a dark and light mode.",
    repo: "https://github.com/KatKozlowska/calculator-challenge",
    live: "https://katkozlowska.github.io/calculator-challenge/",
    img: `${calculator}`,
  },
  {
    title: "Memory Card Game.",
    description: " Flip Card game made using Typescript/Javascript and SCSS. I also illustrated the game.",
    repo: "https://github.com/KatKozlowska/memory-card-game",
    live: "https://katkozlowska.github.io/memory-card-game/",
    img: `${memory}`,
  },
  {
    title: "Ticket Tracker.",
    description: " A mini project which tested the knowledge of React. Each card manages its own state and updates the counter, and is searchable by name. ",
    repo: "https://github.com/KatKozlowska/ticket-tracker",
    live: "https://katkozlowska.github.io/ticket-tracker/",
    img: `${ticket}`,
  },
  {
    title: "Punk API.",
    description: " A React project which is based on the PUNK API. The website allows fo filter multiple criteria of the API.",
    repo: "https://github.com/KatKozlowska/punk",
    live: "https://katkozlowska.github.io/punk/",
    img: `${punk}`,
  },
  {
    title: "To-Do-List.",
    description: "Small to do list app made with React and Typescript, which allows you to add, delete and cross off tasks.",
    repo: "https://github.com/KatKozlowska/my-to-do",
    live: "https://katkozlowska.github.io/my-to-do/",
    img: `${todo}`,
  },
];
