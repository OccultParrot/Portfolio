import GitHubLogo from './assets/github.svg';
import LinkedInLogo from './assets/linkedin.svg';
import DevLogo from './assets/dev-icon.svg';

import {ISocialProps, IPageProps} from './types.ts';

import HomePage from './pages/HomePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';

import AboutPage from './pages/AboutPage/AboutPage.tsx';
import HobbiesPage from './pages/AboutPage/HobbiesPage.tsx';
import MusicPage from './pages/AboutPage/MusicPage.tsx';

import BlogPage from './pages/BlogPage.tsx';
import ResumePage from './pages/ResumePage.tsx';

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
    name: "GitHub",
    icon: GitHubLogo,
    href: "https://github.com/OccultParrot"
  },
  {
    name: "LinkedIn",
    icon: LinkedInLogo,
    href: "https://www.linkedin.com/in/thomas-stemler-468094299/"
  },
  {
    name: "Dev.to",
    icon: DevLogo,
    href: "https://dev.to/occultparrot"
  }
]

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
    name: "Home",
    path: "",
    isHidden: true,
    element: <HomePage/>
  },
  {
    name: "Projects",
    path: "projects",
    element: <ProjectsPage/>,
  },
  {
    name: "About Me",
    path: "about",
    element: <AboutPage/>,
    children: [
      {
        name: "Hobbies",
        path: "hobbies",
        element: <HobbiesPage />
      },
      {
        name: "Music",
        path: "music",
        element: <MusicPage />
      }
    ]
  },
  {
    name: "Blog",
    path: "blog",
    element: <BlogPage/>,
  },
  {
    name: "Resume",
    path: "resume",
    element: <ResumePage />
  }
];