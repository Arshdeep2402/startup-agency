import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  potrait,
  potrait1,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../../public/assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "/#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "/#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "/#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "/#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "/#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/#login",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "About Us",
    url: "/about-us",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "By using the latest technologies available in the market, GenV is there for you to optimize and expand your business into the online world.";

export const collabContent = [
  {
    id: "0",
    title: "Latest Technologies",
  },
  {
    id: "1",
    title: "Optimal Solutions",
  },
  {
    id: "2",
    title: "Optimized and Clean Work",
  },
];

import reactlogo from "../../public/assets/collab/react.png";
import gitlogo from "../../public/assets/collab/github.png";
import mongo from "../../public/assets/collab/mongo.png";
import mysql from "../../public/assets/collab/mysql.png";
import node from "../../public/assets/collab/node.png";
import php from "../../public/assets/collab/php.png";
import google from "../../public/assets/collab/google.png";
import tailwind from "../../public/assets/collab/tailwind.png";

export const collabApps = [
  {
    id: "0",
    title: "React",
    icon: reactlogo,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "tailwind",
    icon: tailwind,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Github",
    icon: gitlogo,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Mongo",
    icon: mongo,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Mysql",
    icon: mysql,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Node",
    icon: node,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "php",
    icon: php,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Google Analytics",
    icon: google,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Web Designing",
    description: "Covering all the basics of FrontEnd.",
    price: "5k",
    features: ["HTML", "CSS, Bootstrap", "JavaScript"],
  },
  {
    id: "1",
    title: "PHP Full Stack",
    description: "It will consist of all the basics of web desiging + PHP.",
    price: "9k",
    features: ["CSS, Boostrap", "JavaScript, Jquery", "PHP, MySQL"],
  },
  {
    id: "2",
    title: "MERN Stack",
    description: "Contains Web Desiging basics + MERN Stack.",
    price: "13k",
    features: ["React Js, Tailwind", "Node Js, Express Js", "MongoDB, MySQL"],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const intro = [
  {
    id: "0",
    title: "Akshit Bathla",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: potrait1,
    colorful: true,
  },
  {
    id: "1",
    title: "Harsh Gupta",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: potrait1,
  },
  {
    id: "2",
    title: "Ritik Rozra",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: potrait1,
  },
  {
    id: "3",
    title: "Arshdeep Singh",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: potrait1,
  },
  {
    id: "4",
    title: "Jiya Chugh",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: potrait1,
  },
];
