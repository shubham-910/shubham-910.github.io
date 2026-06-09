import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
  AiOutlineHighlight,
  AiOutlineSetting,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiPhp,
  SiTypescript,
  SiSpringboot,
  SiNodedotjs,
  SiMagento,
  SiAdobecreativecloud,
  SiAwsamplify,
  SiAmazonaws,
  SiAmazondynamodb,
  SiPostgresql,
  SiLaravel,
  SiVuedotjs,
  SiBitbucket,
  SiLinux,
  SiPowerbi,
  SiTerraform,
  SiJenkins,
  SiKubernetes,
  SiDocker,
  SiAnsible,
  SiHelm,
  SiJira,
  SiJunit5,
  SiSonarqube,
  SiAmazons3,
  SiGitlab,
  SiPrometheus,
  SiJfrog,
  SiAwslambda,
  SiAmazonec2,
  SiAmazonsqs,
  SiAmazonapigateway,
  SiAmazoniam,
  SiAmazoncloudwatch,
  SiMlb,
  SiScikitlearn,
  SiNumpy,
  SiPandas
} from "react-icons/si";

import {
  FaCode,
  FaCubes,
  FaHardHat,
  FaLayerGroup,
  FaProjectDiagram,
  FaRust,
  FaTasks
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

// export const resumeLink = "";
// export const repoLink = "";

export const callToAction = "https://www.linkedin.com/in/shubham-jethva-835b771b1/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificateList",
    title: "Certificates",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    monogram: "DU",
    title: "Dalhousie University, Halifax, Canada",
    degree: "Masters of applied computer science",
    duration: "Sep 2023 - Dec 2024",
    content1: "Major: Computer Science",
    content2: "",
    link: "https://www.dal.ca/",
  },
  {
    id: "education-2",
    monogram: "LJ",
    title: "LJ Institute of Engineering and Technology | GTU, India",
    degree: "Bachelors in Computer Engineering",
    duration: "July 2018 - June 2022",
    content1: "Major: Computer Engineering",
    link: "https://ljku.edu.in/",
  },
];


export const certificateList = [
  {
    id: "certificate-1",
    title: "AWS Certified Solutions Architect – Associate",
    link: "https://www.credly.com/badges/d195aa31-e41b-4811-99b3-3cd3538c2025/public_url",
  },
  {
    id: "certificate-2",
    title: " Data Analysis Certificate (LinkedIn, Microsoft)",
    link: "https://www.linkedin.com/learning/certificates/10143c2b3c436f9fb0db3695b02900b4b2d6200a879159fca63e50b3d15c809e?trk=share_certificate",
  },
  {
    id: "certificate-3",
    title: "PowerBI Certificate",
    link: "https://drive.google.com/file/d/1bZWe8jSVWt1Y1aI__YpSARTzu98O-xBa/view",
  },
  {
    id: "certificate-4",
    title: "Figma: UI/UX Design",
    link: "https://www.udemy.com/certificate/UC-b08bce7a-4697-45b5-b7b6-858400a40c87/",
  }
];


// Add your past achievments here for example - rankings in hackathons/events
// export const achievements = [
//   {
//     id: "a-1",
//     icon: ethglobal,
//     event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
//     position: "Winner",
//     content1: "Top 12 winners among 20k+ registrations",
//     content2: "One of Polygon's Best Public Goods",
//     content3: "Best Module on Biconomy SDK",
//     article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
//     project: "https://devfolio.co/projects/chargeswap-3527",
//     youtube: "https://youtu.be/9rieTya8Yds?t=3908",
//   },
//   {
//     id: "a-2",
//     icon: polkadot,
//     event: "Polkadot Hackathon: Europe Edition",
//     position: "2nd Runner Up in the ink! Smart Contract Category",
//     content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
//     content2: "",
//     content3: "",
//     github: "https://github.com/pranav2305/GreenTrust",
//   },
//   {
//     id: "a-3",
//     icon: lightspeed,
//     event: "Warpspeed by Lightspeed",
//     position: "1st Runner Up",
//     content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
//     content2: "Top 3 projects using Replit",
//     content3: "1st Runner Up by Amazon Web Services (AWS)",
//     article: "https://shorturl.at/fhjsT",
//   },
//   {
//     id: "a-4",
//     icon: dennisivy,
//     event: "September Hackathon by Dennis Ivy",
//     position: "Winner",
//     content1: "Rated the best portfolio website among 450+ participants across the globe.",
//     content2: "",
//     content3: "",
//     youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
//     project: "https://parthmittal.netlify.app/",
//   },
//   {
//     id: "a-5",
//     icon: manipal,
//     event: "Manipal Hackathon'22",
//     position: "Consolation Prize",
//     content1: "Top 10 among 500+ teams across India",
//     content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
//     content3: "",
//     article: "https://shorturl.at/exEIQ",
//   },
//   {
//     id: "a-6",
//     icon: icon,
//     event: "ICON Hyperbuild Hackathon",
//     position: "Honorable Mention",
//     content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
//     content2: "",
//     content3: "",
//     project: "https://devpost.com/software/green-trust-xj2w6g",
//   },
//   {
//     id: "a-7",
//     icon: ethforall,
//     event: "ETHForAll 2023",
//     position: "Top 3 Superfluid Projects",
//     content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
//     content2: "",
//     content3: "",
//     project: "https://devfolio.co/projects/green-trust-ed14",
//   },
// ];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-11",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "pl-11",
        icon: SiTypescript,
        name: "Typescript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-8",
        icon: SiSpringboot,
        name: "SpringBoot",
      },
      {
        id: "f-9",
        icon: SiNodedotjs,
        name: "NodeJs",
      },
      {
        id: "f-10",
        icon: SiMagento,
        name: "Magento",
      },
      {
        id: "f-11",
        icon: SiAdobecreativecloud,
        name: "Adobe Commerce",
      },
      {
        id: "f-12",
        icon: SiLaravel,
        name: "Laravel",
      },
      {
        id: "f-13",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-8",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiAmazondynamodb,
        name: "DynamoDB",
      },
      {
        id: "t-4",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-5",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-6",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-7",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-9",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-10",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-11",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-12",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-13",
        icon: SiBitbucket,
        name: "Bitbucket",
      },
      {
        id: "t-14",
        icon: SiLinux,
        name: "Linux",
      },
      {
        id: "t-15",
        icon: SiPowerbi,
        name: "Power BI",
      },
      {
        id: "t-16",
        icon: SiJunit5,
        name: "JUnit",
      },
      {
        id: "t-17",
        icon: SiSonarqube,
        name: "SonarQube",
      },
      {
        id: "t-18",
        icon: SiFigma,
        name: "Figma",
      },
    ],
  },
  {
    title: "Cloud",
    items: [
      {
        id: "t-2",
        icon: SiAmazonaws,
        name: "AWS",
      },
      {
        id: "t-1",
        icon: SiTerraform,
        name: "Terraform",
      },
      {
        id: "t-3",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "t-4",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "t-5",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-6",
        icon: SiAnsible,
        name: "Ansible",
      },
      {
        id: "t-7",
        icon: SiHelm,
        name: "Helm",
      },
    ],
  },
  {
    title: "Methodologies",
    items: [
        {
            id: "m-1",
            icon: FaTasks, // From Font Awesome (for Agile)
            name: "Agile"
        },
        {
            id: "m-2",
            icon: FaProjectDiagram, // From Font Awesome (for Scrum)
            name: "Scrum"
        },
        {
            id: "m-3",
            icon: FaCode, // Generic for TDD (Test-Driven Development)
            name: "Test-Driven Development (TDD)"
        },
        {
            id: "m-4",
            icon: FaCubes, // For Microservices
            name: "Microservices"
        },
        {
            id: "m-5",
            icon: FaLayerGroup, // For SOLID Principles
            name: "SOLID Principles"
        },
        {
          id: "m-6",
          icon: AiOutlineHighlight,
          name: "UI/UX Principles",
        },
        {
          id: "m-7",
          icon: AiOutlineSetting, // SDLC
          name: "SDLC"
      }
    ]
}
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Nova Scotia Health Authority",
    link: "https://www.nshealth.ca/",
    positions: [
      {
        title: "OPOR Support Consultant / Technical Analyst",
        duration: "Feb 2026 – Present",
        stack: ["Enterprise Systems", "SOP Documentation", "User Access Management", "Incident Resolution"],
        content: [
          {
            text: "Serve as the primary point of contact for front-line users and clients — triaging support requests, clarifying requirements, and delivering timely resolutions.",
            link: "",
          },
          {
            text: "Author and maintain Standard Operating Procedures (SOPs) for recurring workflows, onboarding, and escalation paths.",
            link: "",
          },
          {
            text: "Resolve user access and permission issues across enterprise systems, ensuring compliance with security and provisioning policies.",
            link: "",
          },
          {
            text: "Investigate system-level incidents, document root causes, and coordinate with technical teams to restore service and prevent recurrence.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Brikli Inc.",
    link: "https://www.brikli.com/",
    positions: [
      {
        title: "Software Engineer",
        duration: "Sep 2025 – Present",
        stack: ["AWS", "Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Terraform", "SQS", "CI/CD"],
        content: [
          {
            text: "Shipped type-safe FastAPI REST endpoints behind AWS API Gateway, reducing average API latency by 35%.",
            link: "",
          },
          {
            text: "Integrated multi-source webhooks and event-driven SQS queues to automate asynchronous data polling pipelines.",
            link: "",
          },
          {
            text: "Engineered API rate limiting on public endpoints to protect against payload surges and abusive traffic patterns.",
            link: "",
          },
          {
            text: "Provisioned reproducible cloud infrastructure with Terraform (IaC), cutting deployment setup time by 30%.",
            link: "",
          },
          {
            text: "Automated internal workflows with agentic AI tooling (Cursor, Claude Code), accelerating feature delivery and edge-case debugging by ~25%.",
            link: "",
          },
          {
            text: "Owned the product feature lifecycle from early user feedback through production deployment across multiple agile quarters; mentored junior engineers and led code reviews.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Persuasive Computing Lab, Dalhousie University",
    link: "https://www.dal.ca/",
    positions: [
      {
        title: "Software Engineer Research Intern",
        duration: "Sep 2024 – Dec 2024",
        stack: ["AWS", "CloudFormation", "ECS Fargate", "SNS/SQS", "IAM", "CloudWatch", "Serverless"],
        content: [
          {
            text: "Deployed containerized microservices on AWS ECS Fargate, designing for 99.9% availability using the AWS Well-Architected Framework.",
            link: "",
          },
          {
            text: "Configured SNS/SQS event streams with least-privilege IAM policies to decouple asynchronous processing loops.",
            link: "",
          },
          {
            text: "Implemented Dead Letter Queues (DLQs) to isolate failed events and enable safe replay of pipeline edge cases.",
            link: "",
          },
          {
            text: "Modeled AWS environments as CloudFormation IaC templates, reducing resource initialization errors by 20%.",
            link: "",
          },
          {
            text: "Set up CloudWatch monitoring, dashboards, and alerting for production workload observability and incident response.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "AdornCommerce LLP, India",
    link: "https://www.adorncommerce.com/",
    positions: [
      {
        title: "Software Developer",
        duration: "Jul 2022 – Dec 2023",
        stack: ["Adobe Commerce", "Laravel", "Vue.js", "React", "PHP", "MySQL", "Redis", "Stripe", "GitLab CI/CD"],
        content: [
          {
            text: "Led migration from Magento Commerce to Adobe Commerce Cloud with GitLab CI/CD, improving deployment reliability and platform scalability.",
            link: "",
          },
          {
            text: "Built REST API architecture with Laravel for payments, order management, and authentication; integrated Stripe to increase checkout conversion by 90%.",
            link: "",
          },
          {
            text: "Developed reusable Vue.js and React micro-frontend components; optimized search and caching with Redis, cutting data retrieval time by 50%.",
            link: "",
          },
          {
            text: "Practiced TDD with PHPUnit (~99% coverage), SOLID design principles, and event-driven patterns in an Agile/Scrum environment.",
            link: "",
          },
        ],
      },
      {
        title: "Software Developer Intern",
        duration: "Jan 2022 – Jun 2022",
        stack: ["Magento 2", "Twilio", "Laravel", "Vue.js", "PHP", "MySQL"],
        content: [
          {
            text: "Built a Twilio SMS module for Magento 2 with 99% delivery success for order and event-triggered notifications.",
            link: "",
          },
          {
            text: "Developed a Laravel + Vue.js checkout flow with secure payment processing, gaining full-stack integration experience.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "BrainyBeam Technologies Pvt. Ltd.",
    link: "https://www.brainybeam.com/",
    positions: [
      {
        title: "Python Developer Intern",
        duration: "May 2021 – Jun 2021",
        stack: ["Python", "Django", "MySQL", "PostgreSQL"],
        content: [
          {
            text: "Integrated MySQL and PostgreSQL with Django ORM for reliable data management in production-style applications.",
            link: "",
          },
          {
            text: "Developed and maintained Django applications under mentorship, applying debugging and troubleshooting practices for stable releases.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "CreArt Solutions OPC Pvt. Ltd.",
    link: "https://www.creartsolutions.com/",
    positions: [
      {
        title: "PHP Developer Intern",
        duration: "May 2021 – Jun 2021",
        stack: ["PHP", "Laravel", "MySQL"],
        content: [
          {
            text: "Built Laravel applications with MySQL/MariaDB for efficient CRUD operations and data modeling under senior developer guidance.",
            link: "",
          },
          {
            text: "Applied newly learned backend patterns to improve project delivery efficiency across assigned modules.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "RentX",
    category: "fullstack",
    github: "https://github.com/shubham-910/RentX",
    link: "",
    content:
      "eCommerce platform to rent and sell anything with fuson of scalable frontend and backend with React.js and Springboot.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiSpringboot,
        name: "SpringBoot"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "Typescript"
      },
      {
        id: "icon-3",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-3",
        icon: SiAmazons3,
        name: "AWS S3 bucket"
      },
      {
        id: "icon-4",
        icon: SiJunit5,
        name: "JUnit"
      },
      {
        id: "icon-4",
        icon: SiGitlab,
        name: "GitLab CI/CD"
      },
    ],
  },
  {
    id: "project-2",
    title: "Little-Light",
    category: "fullstack",
    github: "https://github.com/shubham-910/little-light",
    link: "",
    content:
      "An online wellness platform connecting users with doctors for consultations, personalized treatment plans, and guided meditation for holistic health support.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiSpringboot,
        name: "SpringBoot"
      },
      {
        id: "icon-3",
        icon: SiPostgresql,
        name: "PostgreSQL"
      },
      {
        id: "icon-3",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-3",
    title: "CI/CD pipeline automation",
    category: "devops",
    github: "https://github.com/shubham-910/Devops-Pipeline",
    link: "",
    content: "A cloud-based DevOps pipeline setup that automates processes for streamlined development and deployment.",
    stack: [
      {
        id: "icon-9",
        icon: SiDocker,
        name: "Docker"
      },
      {
        id: "icon-10",
        icon: SiKubernetes,
        name: "Kubernetes"
      },
      {
        id: "icon-11",
        icon: SiJenkins,
        name: "Jenkins"
      },
      {
        id: "icon-12",
        icon: SiAnsible,
        name: "Ansible"
      },
      {
        id: "icon-13",
        icon: SiTerraform,
        name: "Terraform"
      },
      {
        id: "icon-14",
        icon: SiHelm,
        name: "Helm"
      },
      {
        id: "icon-15",
        icon: SiPrometheus,
        name: "Prometheus"
      },
      {
        id: "icon-16",
        icon: SiJfrog,
        name: "JFrog"
      }
    ]
  },
  {
    id: "project-4",
    title: "Smart Reminder",
    category: "cloud",
    github: "https://github.com/shubham-910/smart-reminder",
    link: "",
    content:
      "A cloud-hosted reminder system that keeps you on track with task reminders, so you never have to worry about losing track of time.",
    stack: [
      {
        id: "icon-6",
        icon: SiReact,
        name: "React.js"
    },
    {
        id: "icon-7",
        icon: SiAmazonaws,
        name: "AWS"
    },
    {
        id: "icon-8",
        icon: SiAmazondynamodb,
        name: "DynamoDB"
    },
    {
        id: "icon-9",
        icon: SiAwslambda,
        name: "Lambda Function"
    },
    {
        id: "icon-12",
        icon: SiAmazonec2,
        name: "EC2"
    },
    {
        id: "icon-15",
        icon: SiAmazonsqs,
        name: "SQS"
    },
    {
        id: "icon-16",
        icon: SiAmazonapigateway,
        name: "API Gateway"
    },
    {
        id: "icon-17",
        icon: SiAmazoniam,
        name: "IAM"
    },
    {
        id: "icon-20",
        icon: SiAmazoncloudwatch,
        name: "CloudWatch"
    } 
    ],
  },
  {
    id: "project-5",
    title: "Twilio-SMS",
    category: "backend",
    github: "https://github.com/shubham-910/twilio-sms",
    link: "",
    content:
      "Custom module integrated with Twilio API to send SMS notifications for order placements, cancellations, and updates.",
    stack: [
      {
        id: "icon-4",
        icon: SiMagento,
        name: "Magento"
    },
    {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript"
    },
    {
        id: "icon-6",
        icon: SiPhp,
        name: "PHP"
    },
    {
        id: "icon-7",
        icon: SiJquery,
        name: "jQuery"
    },
    {
        id: "icon-8",
        icon: SiMysql,
        name: "MySQL"
    },
    {
        id: "icon-9",
        icon: SiLinux,
        name: "Linux"
    },
    {
        id: "icon-10",
        icon: SiTwilio,
        name: "Twilio API"
    },    
    ],
  },
  {
    id: "project-6",
    title: "ShopByEcommerce - Figma",
    category: "design",
    github: "",
    link: "https://www.figma.com/design/k15KMVWxcYBG7CxjPG2Y6Z/e-commerce-App?node-id=0-1&t=36uzkFxIIAtUlTMU-1",
    content:
      "An eCommerce mobile app with a focus on intuitive UX and user-centric design principles.",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-2",
        icon: AiOutlineHighlight,
        name: "UX Principles"
      },
    ],
  },
  {
    id: "project-7",
    title: "GazeTrack",
    category: "ml",
    github: "https://github.com/shubham-910/gazeTrack",
    link: "",
    content:
      "An Attention Bias Modification (ABM) web app with ML and LLM integration to help users to find and improve their pattern. ",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React.js"
      },
      {
        id: "icon-3",
        icon: SiPostgresql,
        name: "PostgreSQL"
      },
      {
        id: "icon-4",
        icon: SiScikitlearn,
        name: "Scikit Learn"
      },
      {
        id: "icon-5",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-6",
        icon: SiPandas,
        name: "Pandas"
      },

    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
// export const extraCurricular = [
//   {
//     id: 1,
//     organisation: "Devfolio",
//     title: "UniDAO Lead",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
//         link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
//       },
//       {
//         text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
//         link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
//       },
//     ],
//     logo: devfolio,
//   },
//   {
//     id: 2,
//     organisation: "Google Developer Student Club, NITK",
//     title: "Co-Chair",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
//         link: "",
//       },
//       {
//         text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
//         link: "https://incident.nitk.ac.in/",
//       },
//     ],
//     logo: gdsc,
//   },
//   {
//     id: 3,
//     organisation: "Genesis, NITK",
//     title: "Competitions Head",
//     duration: "Sep 2021 - Present",
//     content: [
//       {
//         text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
//         link: "",
//       },
//       {
//         text: "Won 7 inter-college solo dance competitions",
//         link: "",
//       },
//     ],
//     logo: genesis,
//   },
//   {
//     id: 4,
//     organisation: "IRIS, NITK",
//     title: "Tutor",
//     duration: "Jan 2022 - Jan 2022",
//     content: [
//       {
//         text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
//         link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
//       },
//     ],
//     logo: iris,
//   },
//   {
//     id: 5,
//     organisation: "E-Cell, NITK",
//     title: "Executive Member",
//     duration: "Sep 2021 - Apr 2022",
//     content: [
//       {
//         text: "Organised the season 3 of the E-Cell NITK Podcast",
//         link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
//       },
//       {
//         text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
//         link: "",
//       },
//     ],
//     logo: ecell,
//   },
// ];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/shubham-jethva-835b771b1/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/shubham-910",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:shubhamjethva92@gmail.com",
  }
];

// Your professional summary
export const aboutMe = {
    name: "Shubham Jethva",
    githubUsername: 'shubham-910',
    tagLine: "Certified AWS Solution Architect | MACS @ Dalhousie University | Cloud & DevOps Enthusiast | Software Developer | Machine Learning Enthusiast",
    intro: ""
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];