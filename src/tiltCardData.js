// array of objects containing data for tilt card component
// Logos
import androidLogo from "../src/assets/Logos/androidLogo.png";
import nativeLogo from "../src/assets/Logos/nativeLogo.png";
import lowCode from "../src/assets/Logos/lowCode.png";
import CardUI from "../src/assets/Logos/3DCard.png";
import mobileUI from "../src/assets/Logos/ReactNative.jpg";
import figma from "../src/assets/Logos/UI.png";

const technologies = [
  // each technology object
  {
    id: 1,
    newUI : CardUI,
    title: "Web Technologies",
    desc: "Crafting dynamic web applications with modern technologies",
    skill: "Frontend",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
   },
  {
    id: 2,
    newUI : mobileUI,
    title: "Mobile Technologies",
    // desc: "Creating responsive mobile applications with modern frameworks",
    obj1: {
      title: "Android/IOS",
      subTitle: "Native Development",
      image: androidLogo,
    },
    obj2: {
      title: "Cross Platform Development",
      subTitle: ["React Native", "Flutter", "Ionic"],
      image: nativeLogo,
    },
    obj3: {
      title: "No Code Development",
      subTitle: ["Bubble", "Adalo", "Thunkable"],
      image: lowCode,
    },
  },
  {
    id: 3,
    newUI : figma,
    title: "other services/technologies",
    obj1: {
      title: "UI/UX Design for better user experience and user interface",
    },
    obj2: {
      title: "Scalable architecture Design and Development",
    },
    obj3: {
      title: "Devops and Cloud Services Operations",
    },
  },
  // {
  //   id: 4,
  //   title: "AI/ML",
  //   desc: "Implementing AI/ML models for better business insights , where we deliver solutions that has impacted peoples's life positively",
  // },
];

export { technologies };
