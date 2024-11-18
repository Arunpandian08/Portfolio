import gitHubIcon from "../assets/Images/ContactSectionIcons/gitHubIcon.png";
import emailIcon from "../assets/Images/ContactSectionIcons/emailIcon.png";
import linkedInIcon from "../assets/Images/ContactSectionIcons/linkedInIcon.png";
import instagramIcon from "../assets/Images/ContactSectionIcons/instagramIcon.png";
import eCommerceAppImg from '../assets/Projects Images/E-commerce.png'
import realEstateAppImg from '../assets/Projects Images/real-estate-management.png'
import dietAppImg from '../assets/Projects Images/diet-suggestion-app.png'
import youtubeCloneImg from '../assets/Projects Images/youtubeCloneImg.png'
import htmlIcon from '../assets/Images/SkillsSectionImages/html.png'
import cssIcon from '../assets/Images/SkillsSectionImages/css.png'
import jsIcon from '../assets/Images/SkillsSectionImages/javascript.png'
import bootstrapIcon from '../assets/Images/SkillsSectionImages/bootstrap.png'
import tailwindIcon from '../assets/Images/SkillsSectionImages/tailwind.png'
import reactIcon from '../assets/Images/SkillsSectionImages/reactJs.png'
import nodejsIcon from '../assets/Images/SkillsSectionImages/nodeJs.png'
import expressJsIcon from '../assets/Images/SkillsSectionImages/expressJs.png'
import mongoDbIcon from '../assets/Images/SkillsSectionImages/mongoDb.png'
import mySQLIcon from '../assets/Images/SkillsSectionImages/mySQL.png'
import gitIcon from '../assets/Images/SkillsSectionImages/git.png'
import reduxIcon from '../assets/Images/SkillsSectionImages/redux.png'
import npmIcon from '../assets/Images/SkillsSectionImages/npm.png'
import guviLogo from '../assets/Images/EducationLogos/guvi.png'
import sasurieLogo from '../assets/Images/EducationLogos/sasurie.png'
import chikkannaLogo from '../assets/Images/EducationLogos/chikkanna.png'
import nanjappaLogo from '../assets/Images/EducationLogos/nanjappa.png'
import aloysiusLogo from '../assets/Images/EducationLogos/aloysius.png'
import parkLogo from '../assets/Images/EducationLogos/park.png'
import html5 from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/html5.webp'
import css3 from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/css3.jpg'
import js from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/js.jpeg'
import Bootstrap from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/Bootstrap.png'
import tailwind from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/tailwind.jpg'
import react from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/react.jpg'
import redux from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/redux.png'
import node from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/nodejs.jpg'
import expressWord from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/expressWord.png'
import mongoDb from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/mongodb.jpg'
import mysql from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/mysql.jpg'
import postgres from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/postgres.png'
import git from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/Git.jpg'
import github from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/github.png'
import npmLogo from '../assets/Images/SkillsSectionImages/TechStackCarouselImages/npm.png'

const frontendCarousel = [
  htmlIcon,html5,cssIcon,css3,js,react,redux,bootstrapIcon,Bootstrap,tailwind
];
const backendCarousel = [
  nodejsIcon,node,expressJsIcon,expressWord,npmIcon,npmLogo,mongoDb,mysql,postgres,git,github
];

const projectsData = [
  {
    id: 1,
    image: eCommerceAppImg,
    title: "E-Commerce web application",
    desc: [
      "Built with React and Redux Toolkit for state management.",
      "Dynamic cart operations (add, remove, clear items) and JWT authentication.",
      "Backend using Node.js, Express, and MongoDB for user data and cart products.",
      "Integrates Stripe for secure payment processing and supports CRUD for user profiles."
    ],
    tech: ['React JS', "Redux", "Redux-toolkit", "NPM", "react-router-dom", "Node JS", "Authentication", "Authorization", "MongoDB", "Stripe", "Own Custom-CSS"],
    frontend: "https://github.com/Arunpandian08/E-Commerce-Frontend.git",
    backend: "https://github.com/Arunpandian08/E-Commerce-Backend.git",
    demo: "https://shopping-zone-redux.netlify.app/",
  },
  {
    id: 2,
    image: realEstateAppImg,
    title: "Real Estate Management",
    desc: [
      "Comprehensive user management with authentication and authorization.",
      "Admins can add, edit, and delete property data efficiently.",
      "Frontend built with React, utilizing React Router DOM for navigation.",
      "Backend built with Node.js, Express, JWT for authentication, and bcrypt for password hashing."
    ],
    tech: ['React JS', "CRUD Operation", "Authentication", "Authorization", 'Bootstrap', "Node JS", "MongoDB"],
    frontend: "https://github.com/Arunpandian08/Real-Estate-Management-Frontend.git",
    backend: "https://github.com/Arunpandian08/Real-Estate-Management-Backend.git",
    demo: "https://real-estate-management-crud.netlify.app/",
  },
  {
    id: 3,
    image: dietAppImg,
    title: "Diet Suggestion App",
    desc: [
      "Provides personalized diet plans, user management, and various diet recipes.",
      "Features BMI & BMR calculators and interactive diet charts powered by Chart.js.",
      "Effective fat burner suggestions for complete health tracking.",
      "Fully responsive app with a user-friendly interface."
    ],
    tech: ['React JS', "Bootstrap", "Chart.js", "BMI & BMR calculator", "Node JS", "JWT", "bcrypt", "MongoDB"],
    frontend: "https://github.com/Arunpandian08/Diet-Suggestion-App-Frontend.git",
    backend: "https://github.com/Arunpandian08/Diet-suggestion-App-backend.git",
    demo: "https://diet-suggesion-web-app.netlify.app/",
  },
  {
    id: 4,
    image: youtubeCloneImg,
    title: "Youtube Clone",
    desc: [
      "Fetches data from the YouTube Data API to display dynamic videos.",
      "User-friendly homepage with detailed video pages and recommended videos.",
      "Built with React Router DOM for seamless navigation.",
      "Moment.js used for time formatting for a better user experience."
    ],
    tech: ['React JS', "youtube data API", "Node JS", "MongoDB","Own Custom-CSS"],
    frontend: "https://github.com/Arunpandian08/Frontend-youtube-clone-with-youtube-API.git",
    backend: "https://github.com/Arunpandian08/Backend-youtube-clone-with-youtube-API.git",
    demo: "https://youtube-clone-frontend-f50664.netlify.app/",
  }
];

const eductionData = [
  {
    id: 1,
    course: "Full Stack Developer",
    logo: guviLogo,
    institute: "Guvi Greeks Networks, Chennai",
    description: "Developed and maintained web applications using MERN stack. Collaborated with a team of developers to deliver high-quality software solutions.",
    year: "2023 - 2024",
  },
  {
    id: 2,
    course: "Bachelor of Education in Mathematics",
    logo: sasurieLogo,
    institute: "Sasurie College of Education, Tamilnadu Teachers Education University, Tiruppur",
    description: "Completed a degree focusing on educational methods and mathematics.",
    year: "2019-2021",
  },
  {
    id: 3,
    course: `Master's Degree in Mathematics`,
    logo: chikkannaLogo,
    institute: "Chikkanna Govt arts College, Bharathiar University, Tiruppur",
    description: `Achieved a Master's degree in Mathematics with a strong academic record.`,
    year: "2017-2019",
  },
  {
    id: 4,
    course: `Bachelor's Degree in Mathematics`,
    logo: parkLogo,
    institute: "Parks college, Bharathiar University, Tiruppur",
    description: `Completed a Bachelor's degree in Mathematics with First Class.`,
    year: "2014-2017",
  },
  {
    id: 5,
    course: "HSC",
    institute: "Nanjappa Govt Higher Secondary School, Tiruppur",
    logo: nanjappaLogo,
    description: "completed higher secondary education and achieved excellent grades.",
    year: "2012-2014",
  },
  {
    id: 6,
    course: "SSLC",
    institute: "St.Aloysius Higher Secondary School, Theni",
    logo: aloysiusLogo,
    description: "Completed secondary education with high academic performance.",
    year: "2008-2012",
  },
];

const contactIcons = [
  {
    URI: "https://github.com/Arunpandian08",
    icon: gitHubIcon,
  },
  {
    URI: "mailto:arunpandianda123@gmail.com",
    icon: emailIcon,
  },
  {
    URI: "https://www.linkedin.com/in/d-arunpandian/",
    icon: linkedInIcon,
  },
  {
    URI: "https://www.instagram.com/arun_fsd_08/?hl=en",
    icon: instagramIcon,
  },
];

const techStackImages = [
  { src: htmlIcon, alt: 'htmlIcon' },
  { src: cssIcon, alt: 'cssIcon' },
  { src: jsIcon, alt: 'jsIcon' },
  { src: bootstrapIcon, alt: 'bootstrapIcon' },
  { src: tailwindIcon, alt: 'tailwindIcon' },
  { src: reactIcon, alt: 'reactIcon' },
  { src: nodejsIcon, alt: 'nodejsIcon' },
  { src: expressJsIcon, alt: 'expressJsIcon' },
  { src: mongoDbIcon, alt: 'mongoDbIcon' },
  { src: mySQLIcon, alt: 'mySQLIcon' },
  { src: gitIcon, alt: 'gitIcon' },
  { src: gitHubIcon, alt: 'gitHubIcon' },
  { src: npmIcon, alt: 'npmIcon' },
  { src: reduxIcon, alt: 'reduxIcon' }
];

const frontEndSkills = [
  'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React JS', 'React Redux'
];

const backEndSkills = [
  'Node JS', 'Express JS', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'NPM'
];


export default { projectsData, eductionData, contactIcons, techStackImages, frontEndSkills, backEndSkills, frontendCarousel,backendCarousel };
