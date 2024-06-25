import gitHubIcon from "../../assets/ContactSectionImages/gitHubIcon.png";
import emailIcon from "../../assets/ContactSectionImages/emailIcon.png";
import linkedInIcon from "../../assets/ContactSectionImages/linkedInIcon.png";
import instagramIcon from "../../assets/ContactSectionImages/instagramIcon.png";

const projectsData = [
  {
    id: 1,
    image: "/Projects Images/diet-suggestion-app.png",
    title: "Diet Suggestion App -CapStone Project",
    desc: "Healthy Diet is a comprehensive app designed to help users manage their health and fitness goals with personalized diet plans, user management, and a variety of diet recipes. It features BMI & BMR calculators, effective fat burner suggestions, and interactive diet charts powered by Chart.js for a complete health tracking experience",
    frontend:
      "https://github.com/Arunpandian08/Diet-Suggestion-App-Frontend.git",
    backend: "https://github.com/Arunpandian08/Diet-suggestion-App-backend.git",
    demo: "https://diet-suggestion-app-frontend.netlify.app/",
  },
  {
    id: 2,
    image: "/Projects Images/youtube-clone.png",
    title: "Youtube-Clone with Youtube data API",
    desc: "YouTubeClone is a dynamic video platform fetching data from the YouTube Data API. It features a user-friendly homepage, detailed video pages, and recommended videos. Built with React Router DOM and enhanced with Moment.js for time formatting, it delivers an engaging and seamless video-watching experience.",
    frontend:
      "https://github.com/Arunpandian08/Frontend-youtube-clone-with-youtube-API.git",
    backend:
      "https://github.com/Arunpandian08/Backend-youtube-clone-with-youtube-API.git",
    demo: "https://youtube-clone-frontend-f50664.netlify.app/",
  },
  {
    id: 3,
    image: "/Projects Images/todo_app.png",
    title: "Todo App",
    desc: "Todo List is an efficient task management app utilizing Context API for state management. It features a robust Todo Form, status filtering, and task cards with options to change status or delete todo`s, ensuring seamless and organized productivity",
    frontend:
      "https://github.com/Arunpandian08/Frontend-Todo-App-Context-API.git",
    backend:
      "https://github.com/Arunpandian08/Backend-Todo-App-Context-API.git",
    demo: "https://todo-app-with-context-api-08.netlify.app/",
  },
];

const eductionData = [
  {
    id: 1,
    course: "Full Stack Developer",
    institute: "Guvi Greeks Networks, Chennai",
    description:"Developed and maintained web applications using MERN stack. Collaborated with a team of developers to deliver high-quality software solutions.",
    year: "2023 - 2024",
  },
  {
    id: 2,
    course: "Bachelor of Education in Mathematics",
    institute:"Sasurie College of Education, Tamilnadu Teachers Education University",
    description:"Completed a degree focusing on educational methods and mathematics.",
    year: "2019-2021",
  },
  {
    id: 3,
    course: `Master's Degree in Mathematics`,
    institute: "Chikkanna Govt arts College, Bharathiar University",
    description: `Achieved a Master's degree in Mathematics with a strong academic record.`,
    year: "2017-2019",
  },
  {
    id: 4,
    course: `Bachelor's Degree in Mathematics`,
    institute: "Parks college, Bharathiar University",
    description: `Completed a Bachelor's degree in Mathematics with First Class.`,
    year: "2014-2017",
  },
  {
    id: 5,
    course: "HSC",
    institute: "Nanjappa Govt Higher Secondary School",
    description:"completed higher secondary education and achieved excellent grades.",
    year: "2012-2014",
  },
  {
    id: 6,
    course: "SSLC",
    institute: "St.Aloysius Higher Secondary School",
    description:"Completed secondary education with high academic performance.",
    year: "2008-2012",
  },
];

const ContactIcons = [
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

export default { projectsData, eductionData, ContactIcons };
