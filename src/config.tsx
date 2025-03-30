import GitHubLogo from './assets/github.svg';
import LinkedInLogo from './assets/linkedin.svg';
import DevLogo from './assets/dev-icon.svg';
import ReactLogo from './assets/react.svg';

import { IPageProps, ISocialProps, IProjectCardProps, IExperience } from './types.ts';

import HomePage from './pages/HomePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import MessagesPage from './pages/MessagesPage.tsx';
import ResumePage from './pages/ResumePage.tsx';
import ContactPage from './pages/ContactPage.tsx';



export const isAdmin: boolean = false;

export const BackendUrl: string = 'http://localhost:5296/api';

/**
 * Configuration array defining all social media accounts connected to me.
 * Each entry maps to a link in the footer
 *
 * @type {Array<ISocialProps>}
 * @example
 * // Earlier in the imports
 * import GitHubLogo from "./assets/github.svg"
 *
 * // Entry in array
 * {
 *   name: "GitHub",
 *   icon: GitHubLogo,
 *   href: "https://github.com/OccultParrot"
 * }
 */
export const socials: Array<ISocialProps> = [
  {
    name: 'GitHub',
    icon: GitHubLogo,
    href: 'https://github.com/OccultParrot'
  },
  {
    name: 'LinkedIn',
    icon: LinkedInLogo,
    href: 'https://www.linkedin.com/in/thomas-stemler-468094299/'
  },
  {
    name: 'Dev.to',
    icon: DevLogo,
    href: 'https://dev.to/occultparrot'
  }
];

/**
 * Configuration array defining all application routes.
 * Each entry maps to a route in the application, along with getting a link to the path in the nav bar if marked false for isHidden
 *
 * Also, the first item in the array is considered the "root" and the title will redirect to it.
 * @type {Array<IPageProps>}
 * @example
 * {
 *   name: "home",
 *   path: "home",
 *   isHidden?: false
 *   element: <Home/>,
 *   children: [] // optional nested routes
 * }
 */
export const pages: Array<IPageProps> = [
  {
    name: 'Home',
    path: '',
    isHidden: true,
    element: <HomePage />
  },
  {
    name: 'Projects',
    path: 'projects',
    element: <ProjectsPage />
  },
  {
    name: 'Contact Me',
    path: 'contact',
    element: <ContactPage />
  },
  {
    name: 'Messages',
    path: 'messages',
    element: <MessagesPage />,
    isAdminOnly: true
  },
  {
    name: 'Resume',
    path: 'resume',
    element: <ResumePage />
  }
];

/**
 * Configuration array defining all experience items.
 * Each entry maps to a skill or technology that I have experience with.
 *
 * @type {Array<IExperience>}
 * @example
 * {
 *   name: "Python",
 *   type: "language",
 *   icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
 *   level: ["backend"]
 * }
 */
export const experience: Array<IExperience> = [
  // Languages
  {
    name: "Python",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    level: ["backend"]
  },
  {
    name: "JavaScript",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    level: ["frontend", "backend"]
  },
  {
    name: "TypeScript",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    level: ["frontend", "backend"]
  },
  {
    name: "C#",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
    level: ["backend"]
  },
  {
    name: "C++",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "Java",
    type: "language",
    icon: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
  },
  {
    name: "HTML",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    level: ["frontend"]
  },
  {
    name: "CSS",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
    level: ["frontend"]
  },
  {
    name: "SQL",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/640px-Sql_data_base_with_logo.svg.png",
    level: ["database"]
  },
  {
    name: "Lua",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
  },
  {
    name: "Visual Basic",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg",
  },
  {
    name: "bash",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
  },
  {
    name: "GLSL",
    type: "language",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/OpenGL_logo.svg/640px-OpenGL_logo.svg.png"
  },

  // Frameworks
  {
    name: "React",
    type: "framework",
    icon: ReactLogo,
    level: ["frontend"]
  },
  {
    name: "TailwindCSS",
    type: "framework",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png",
    level: ["frontend"]
  },
  {
    name: "Express.js",
    type: "framework",
    icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
    level: ["backend"]
  },
  {
    name: "ASP.NET",
    type: "framework",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    level: ["backend"]
  },
  {
    name: "Flask",
    type: "framework",
    icon: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000",
    level: ["backend"]
  },
  {
    name: "MonoGame",
    type: "framework",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e6/MonoGame_Logo.svg",
  },
  {
    name: "Mongoose",
    type: "framework",
    icon: "",
    level: ["backend"]
  },
  {
    name: "Sequelize",
    type: "framework",
    icon: "",
    level: ["backend"]
  },

  // Technologies
  {
    name: "Vite",
    type: "technology",
    icon: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000",
    level: ["frontend"]
  },
  {
    name: "Node.js",
    type: "technology",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    level: ["backend"]
  },
  {
    name: "JetBrains IDEs",
    type: "technology",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Cib-jetbrains_%28CoreUI_Icons_v1.0.0%29.svg/240px-Cib-jetbrains_%28CoreUI_Icons_v1.0.0%29.svg.png",
  },
  {
    name: "MongoDB",
    type: "Technology",
    icon: "",
    level: ["database"]
  },
  {
    name: "PostgreSQL",
    type: "technology",
    icon: "",
    level: ["database"]
]

/**
 * Each project has the following info:
 *
 * title: string - The title of the project
 * description: string - A short description of the project
 * image: string - A link to the image to display (MIGHT CHANGE)
 * isFeatured: bool | null - Optional choice to add it to the featured projects
 * links: IProjectLink - A array of links concerning the project. THE FIRST LINK IS WHAT THE CARD WILL REDIRECT TO
 */
export const projects: IProjectCardProps[] = [
  {
    title: 'Friends Without Benefits',
    description: 'A fun object recognition scavenger hunt, played solo or with a friend!',
    image: 'https://ucarecdn.com/b5bd864b-904b-401d-b1e7-4ab87c5ec3a4/Screenshot20250302172615.png',
    links: [
      {
        displayName: "Hosted Website",
        href: "https://friends-without-benefits.onrender.com/",
      },
      {
        displayName: "GitHub Repository",
        href: "https://github.com/savevsgames/friends-without-benefits"
      }
    ]
  },

];