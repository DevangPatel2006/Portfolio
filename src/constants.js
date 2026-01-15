// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import aws from "./assets/company_logo/aws.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },

      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: aws,
    role: "AWS Cloud Club Captain",
    company: "Gandhinagar, Gujarat",
    date: "August 2025 - Present",
    desc: "Leading the AWS Cloud Club by mentoring students in cloud computing, DevOps, and modern infrastructure practices. Organizing hands-on workshops, cloud labs, and hackathons focused on AWS services. Driving community engagement through knowledge-sharing sessions, speaker talks, and collaborative projects. Supporting members in building real-world cloud projects, certifications, and career pathways in cloud and DevOps.",
    skills: [
      "AWS",
      "Cloud Computing",
      "Leadership",
      "DevOps Fundamentals",
      "Event Management",
      "Mentorship",
      "Technical Workshops",
      "Community Building",
    ],
  },
  {
    id: 1,
    img: webverseLogo,
    role: "Lead ClubIDE",
    company: "Gandhinagar  Gujarat",
    date: "August 2025 - Present",
    desc: "Provided leadership and mentorship by guiding club members in academic, technical, and career growth. Organized and managed events, workshops, and hackathons to promote innovation and teamwork. Collaborated with diverse groups to encourage participation, share knowledge, and build a strong learning community. Supported juniors through advice, peer-to-peer mentoring, and networking opportunities, fostering a culture of growth and collaboration.",
    skills: [
      "Leadership",
      "Teamwork",
      "Event Management",
      "Mentorship",
      "Hackathons",
      "Networking",
      "Public Speaking",
      "Community Building",
    ],
  },
  // {
  //   id: 1,
  //   img: agcLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Government Engineering College, Gandhinagar",
    date: "July-2023 – Present",
    grade: "7.95 CGPA",
    desc: "I am currently pursuing my Bachelor of Engineering (BE) in Computer Engineering at Government Engineering College, Gandhinagar. My studies have provided a solid foundation in programming, data structures, algorithms, computer networks, and operating systems. I have also gained practical knowledge in web development, database management, and software engineering concepts. Along with academics, I actively participate in workshops, hackathons, and coding competitions, which enhance my problem-solving, teamwork, and leadership skills.",
    degree: "Bachelor of Engineering – BE (Computer Engineering)",
  },

  {
    id: 2,
    img: vpsLogo,
    school: "Shree Ambe Vidhyalaya, Vadodara",
    date: "June 2022 - June 2023",
    grade: "B1",
    desc: "I completed my class 12 education from Shree Ambe Vidhyalaya, Vadodara under the GSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "GSEB(XII) - PCM ",
  },
];

export const projects = [
  {
    id: 1,
    title: "FinLanza – AI-Powered Personal Finance Manager",
    description:
      "FinLanza is an AI-driven personal finance web application that helps users track income and expenses, analyze spending behavior, plan financial goals, optimize taxes, and make smarter saving and investment decisions. Built with smart automation and FinAIssist, it provides personalized financial insights, forecasting, and recommendations in real time — acting as a complete AI financial co-pilot.",
    image: "/projects/finlanza.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
      "FinTech",
      "REST API",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/DevangPatel2006/Finlanza",
    webapp: "https://finlanza.vercel.app/",
  },
  {
    id: 1,
    title: "QuickAI -Powerful AI Tools",
    description:
      "Fully Responsive React SAAS- Web Application With Authentication And Features PERN stack Project For Content Creators To Make Powerfull AI Generated Content",
    image: "/projects/Screenshot 2025-07-21 163855.png",
    tags: [
      "Express",
      "Postgress",
      "API",
      "React",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/DevangPatel2006/QuickAI",
    webapp: "https://quick-ai-main.vercel.app/",
  },
  {
    id: 2,
    title: "Hirrd",
    description:
      "A user-friendly platform where recruiters can post jobs and candidates can easily apply. Built with a clean design and smooth functionality to streamline job listings and applications. Simple, responsive, and effective for real-world hiring needs.",
    image: "/projects/hirrd.png",
    tags: [
      "Express",
      "SupaBase",
      "API",
      "React",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/DevangPatel2006/Hirrd",
    webapp: "https://hirrd-pink.vercel.app/",
  },
  {
    id: 3,
    title: "SENSAI",
    description:
      "An AI-Powered Career Coach Currently Working Full Stack Project With Authentication And Gemini-AI.",
    image: "/projects/Screenshot 2025-07-12 134815.png",
    tags: ["Next.Js", "Postgress", "Shadcn", "React", "TailwindCSS"],
    github: "https://github.com/DevangPatel2006/sensAI",
    webapp: "https://sens-ai-puce.vercel.app/",
  },
  {
    id: 4,
    title: "LanzaR",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/lanzar.png",
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/DevangPatel2006/lanzar-ai",
    webapp: "https://lanzar-ai.vercel.app/",
  },
  {
    id: 5,
    title: "Recipe's App ",
    description: "Interactive And Responsive Web App To Find Any Recipe.",
    image: "/projects/recipe.png",
    tags: ["API", "React", "JavaScript"],
    github: "https://devangpatel2006.github.io/Recipe-WebApp/",
    webapp: "https://github.com/DevangPatel2006/Recipe-WebApp",
  },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
