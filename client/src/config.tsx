import GitHubLogo from './assets/github.svg';
import LinkedInLogo from './assets/linkedin.svg';
import DevLogo from './assets/dev-icon.svg';

import { IPageProps, ISocialProps, IProjectCardProps } from './types.ts';

import HomePage from './pages/HomePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import MessagesPage from './pages/MessagesPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
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
    name: 'About Me',
    path: 'about',
    element: <AboutPage />
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


export const languages: Array<string> = [
  'Python',
  'JavaScript',
  'TypeScript',
  'C#',
  'C++',
  'Java',
  'HTML',
  'CSS',
  'SQL',
  'Lua',
  'PBasic',
  'bash'
];

export const frameworks: Array<string> = [
  'Node.js',
  'PostgreSQL',
  'React',
  'Flask',
  'MonoGame',
  'PySimpleGui',
  'tailwindcss',
  'Express.js',
  ''
];

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
  {
    title: 'Title',
    description: 'Blah blah blah blah',
    image: 'https://www.metroparks.net/wp-content/uploads/2017/06/1080p_HBK_autumn-morning_GI.jpg',
    isFeatured: true,
    links: [
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      },
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      },
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      },
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      }
    ]
  },
  {
    title: 'Title',
    description: 'Blah blah blah blah',
    image: '',
    // isFeatured: true,
    links: [
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      }
    ]
  }
];