import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import djangoicon from "../../assets/icons/djangoicon.svg";
import graphicon from "../../assets/icons/grahpql.svg";
import databaseicon from "../../assets/icons/databaseicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg"
import laravelicon from "../../assets/icons/laravelicon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import extensionicon from "../../assets/icons/extensionicon.svg";
import aiicon from "../../assets/icons/aiicon.svg";
import blockchainicon from "../../assets/icons/blockchainicon.svg";
// import tastyMockup from "../../assets/img/tasty_mockup.webp";
// import instorMockup from "../../assets/img/instor_mockup.webp";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import aurellienIcon from "../../assets/img/aurelien.jpg";
import ludoIcon from "../../assets/img/ludo.jpg";
import wassimIcon from "../../assets/img/wassim.jpg";
import danapayPNG from "../../assets/img/danapay.png";
import realtimePNG from "../../assets/img/realtime.png";
import hirepeoplePNG from "../../assets/img/hirepeople.png";
import realadvisorPNG from "../../assets/img/realadvisor.png";
import cosmicPNG from "../../assets/img/cosmic.png";
import profilepicture from "../img/me.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
// import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import devopsicon from "../../assets/icons/devopsicon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoLog } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

const firstName = 'Renan';
// const lastName = '';

// const fullName = `${firstName} ${lastName}`;

export const headerIntroData = {
  title: {
    de: `Hi, ich bin ${firstName}`,
    en: `Hi, I'm ${firstName}`,
  },
  subtitle: "Senior Fullstack Developer",
  description: {
    de: "Ich bin Alpay, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: `I'm ${firstName}, a senior fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!`,
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Experience",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Danapay",
    subtitle: "Internship",
    during: "02/2015-02/2017",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN: [
      "Collaborated closely with design teams to craft polished user interfaces and seamless, user-friendly interactions across various Front End frameworks and Figma.",
      "Demonstrated proficiency in AngularJS, leading the development of both a Real Estate project and the Kodaoverfest NFT marketplace, leveraging Angular and Node.js.",
      "Expertly integrated Google Maps to showcase event locations, incorporating Arc GIS and PostGIS.'",
    ],
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Laravel", icon: laravelicon },
    ],
    image: danapayPNG,
    deploymenturl: "https://danapay.com/",
    // githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Real Time Feedback",
    subtitle: "Mid-level Full stack Developer",
    during: "06/2017-03/2019",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN: [
      "Played a key role in developing customer-facing elements using Flutter and administrative interfaces using React and Laravel Mix.",
      "Implemented real-time chat functionality through Web Sockets, Laravel Queue, Pusher, and Echo, in addition to integrating Twilio for SMS, Stripe for payments, and email services.",
      "Elevated the admin interface by adopting Next.js, reduxjs/toolkit, and Headless UI, while optimizing real-time data management with Redis.",
      "Successfully containerized the project using Docker, and subsequently orchestrated the migration to AWS EC2, expertly handling complex components like socket.io and queuing mechanisms.",
    ],
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Laravel", icon: laravelicon },
      { name: "MySQL", icon: databaseicon },
      { name: "AWS", icon: devopsicon },
    ],
    image: realtimePNG,
    deploymenturl: "https://realtimefeedback.com/",
    // githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Cosmic Forces",
    subtitle: "Mid-level Front End Developer",
    during: "06/2019-03/2021",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN: [
      "Contributed on web3 interface for token vault system integrating with solidity smart contract",
      "Pioneered the development of a cutting-edge 3D car NFT generator, leveraging the power of ThreeJS to enable the eamless minting of animated 3D NFTs.",
      "ngineered a dynamic Play-to-Earn ( P2E) game dashboard interface using React.js, AWS, MongoDB, Subgraph, and GraphQL to provide real-time updates on game and NFT statuses.",
    ],
    technologies: [
      { name: "Typescript", icon: typescripticon },
      { name: "CSS", icon: cssicon },
      { name: "GraphQL", icon: graphicon },
      { name: "Next.js", icon: nextjsicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Laravel", icon: laravelicon },
      { name: "MySQL", icon: databaseicon },
      { name: "AWS", icon: devopsicon },
      { name: "Blockchain", icon: blockchainicon },
    ],
    image: cosmicPNG,
    deploymenturl: "https://www.cosmicforces.com/",
    // githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Hire People",
    subtitle: "Senior Full Stack Developer",
    during: "04/2021-03/2022",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN: [
      "Championed the creation of a salary estimation tool using React and Typescript, skillfully implementing Husky, Deep Source, and Sonar Cloud for enhanced code quality.",
      "Demonstrated adeptness in test-driven development by crafting thorough unit and end-to-end tests with Jest, react-testing library, and Cypress.",
      "Pioneered Node.js web scraping employing Puppeteer and browserlessAPI to aggregate job data from Glassdoor and Indeed.",
      "Innovatively designed a Google Chrome extension facilitating automated messaging using LinkedIn profiles.",
      "Spearheaded the development of a comprehensive job marketplace, transitioning from Figma to React, while seamlessly integrating APIs from Google Cloud, LinkedIn, and Facebook.",
    ],
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "Typescript", icon: typescripticon },
      { name: "Chrome Extension", icon: extensionicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: hirepeoplePNG,
    deploymenturl: "#",
    // githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "RealAdvisor",
    subtitle: "Senior Full Stack Developer",
    during: "04/2022-10/2023",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN: [
      "Architected a cutting-edge CRM system utilizing react-relay, GraphQL, Mui, and Next.js.",
      "Orchestrated the integration of Google APIs to streamline Broker meetings, and engineered a dynamic svelte documentation generator.",
      "Expertly executed the migration of the project from JavaScript to TypeScript, upgrading from Mui v4 to Mui v5, and transitioning from react-relay to Apollo for GraphQL.",
      "Leveraged hotfix deployment strategies to ensure seamless production and staging releases.",
      "Expertly integrated Google Maps to showcase event locations, incorporating Arc GIS and PostGIS.",
    ],
    technologies: [
      { name: "Next.js", icon: nextjsicon },
      { name: "GrahpQL", icon: graphicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "PostreSQL", icon: databaseicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "AI", icon: aiicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "AWS", icon: devopsicon },
    ],
    image: realadvisorPNG,
    deploymenturl: "https://realadvisor.ch/",
    // githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  // {
  //   title: "Silentmoon",
  //   description:
  //     "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
  //   description_EN:
  //     "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "Spotify Api", icon: spotifyicon },
  //     { name: "React", icon: reacticon },
  //     { name: "JWT & Bcrypt", icon: jwticon },
  //     { name: "Axios", icon: axiosicon },
  //     { name: "MongoDB", icon: mongodbicon },
  //     { name: "Express", icon: expressiconwhite },
  //     { name: "Node.js", icon: nodejsicon },
  //     { name: "Figma", icon: figmaicon },
  //     { name: "Render", icon: rendericon },
  //   ],
  //   image: silentmoonMockup,
  //   deploymenturl: "https://silentmoon-grpw.onrender.com/",
  //   githuburl:
  //     "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#FFD5BD",
  //   },
  // },
  // {
  //   title: "Furniture Organizer",
  //   description:
  //     "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
  //   description_EN:
  //     "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "React", icon: reacticon },
  //     { name: "JWT & Bcrypt", icon: jwticon },
  //     { name: "Axios", icon: axiosicon },
  //     { name: "MongoDB", icon: mongodbicon },
  //     { name: "Express", icon: expressiconwhite },
  //     { name: "Node.js", icon: nodejsicon },
  //     { name: "Figma", icon: figmaicon },
  //     { name: "Render", icon: rendericon },
  //     { name: "Trello", icon: trelloicon },
  //   ],
  //   image: instorMockup,
  //   deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
  //   githuburl: "https://github.com/AlpayC/Furniture_MERN",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend",
    skills: [
      { title: "PHP", hash: "#Php", icon: phpicon, color: "#8892bf" },
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: laravelicon,
        color: "#ff2d20",
      },
      { title: "Python", hash: "#Python", icon: pythonicon, color: "#00C4CC" },
      { title: "Django", hash: "#Django", icon: djangoicon, color: "#113228" },
      { title: "Grahpql", hash: "#Grahpql", icon: graphicon, color: "#368cbf" },
      { title: "Database", hash: "#Database", icon: databaseicon, color: "#ffda44" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Other Skill",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Chrome Extension",
        hash: "#Chrome Extension",
        icon: extensionicon,
        color: "#34cce0",
      },
      {
        title: "AI",
        hash: "#AI",
        icon: aiicon,
        color: "#4353FF",
      },
      {
        title: "Blockchain",
        hash: "#Blockchain",
        icon: blockchainicon,
        color: "#e1ad2f",
      },
      {
        title: "Devops",
        hash: "#Devops",
        icon: devopsicon,
        color: "#3c71e3",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Experience", hash: "#experience", icon: GoLog },
  { de: "Über mich", en: "Recommendation", hash: "#recommendation", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/renan-viega-2435371a6",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/xingarr",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:ninja990621@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "Recommendation",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "Recommendations from my clients",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: aurellienIcon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "AURÉLIEN MONCHAMBERT",
      description: `As the CEO of Danapay company, I had the opportunity to work closely with ${firstName} on a project that required a skilled React developer. ${firstName} not only demonstrated his ability to develop a project from scratch with great attention to detail, but also consistently delivered high-quality work in a timely manner. He was also an instrumental part of the team that developed a Chrome extension for our company, which helped us to improve our workflow and productivity. I would highly recommend ${firstName} to anyone in need of a talented, reliable, and efficient web developer`,
      icon: aurellienIcon,
    },
    {
      title: "WASSIM AZIRAR",
      description: `${firstName} demonstrated deep knowledge of React, TypeScript, and the entire frontend ecosystem. Their ability to quickly understand project requirements, troubleshoot issues and implement solutions was outstanding. ${firstName} not only delivered high-quality code, but also continually introduced creative ideas that enhanced the user interface and user experience.`,
      icon: wassimIcon,
    },
    {
      title: "LUDO HOFFSTETTER",
      description: `I had the pleasure of working with ${firstName} on the HirePeople Chrome Extension, and I can say without hesitation that he is a great Front-End Developer. He consistently demonstrated a strong technical skillset, a keen eye for detail, and an unwavering commitment to creating high-quality user experiences. Overall, I highly recommend ${firstName} for any Front-End Development role. Their expertise, attention to detail, and commitment make them an asset to any team.`,
      icon: ludoIcon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: `I agree that ${firstName} may use my personal data (name and e-mail address) to contact me.`,
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
