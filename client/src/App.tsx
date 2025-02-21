import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {ReactElement} from "react";

import DevLogo from "./assets/dev-icon.svg"
import LinkedInLogo from "./assets/linkedin.svg"
import GitHubLogo from "./assets/github.svg"

import Home from "./pages/Home";
import Error from "./pages/Error.tsx";
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";

/**
 * Interface defining the properties for creating routes in the application.
 * Used by the CreateRoute function to generate route elements recursively.
 *
 * @interface IPageProps
 * @property {string} name - Used for the header menu to travel to that page
 * @property {string} path - The URL path segment for this route
 * @property {ReactElement} element - The React component to render at this route
 * @property {IPageProps[]} [children] - Optional nested routes under this route
 */
export interface IPageProps {
  name: string;
  path: string;
  isHidden?: boolean;
  element: ReactElement;
  children?: IPageProps[];
}

/**
 * Interface defining the properties for creating links to my social medias in the footer
 *
 * @interface ISocialProps
 * @property {string} name - Used for the text that appears when you hover over the social medias icon
 * @property {string} icon - The SVG that is the social medias logo
 * @property {string} href - The link that the user gets redirected to when they click on the social media icon
 */
export interface ISocialProps{
  name: string;
  icon: string;
  href: string;
}
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
const pages: Array<IPageProps> = [
  {
    name: "Home",
    path: "",
    isHidden: true,
    element: <Home/>
  },
  {
    name: "Projects",
    path: "projects",
    element: <Home/>,
  },
  {
    name: "About Me",
    path: "about",
    element: <Home/>,
  },
  {
    name: "Blog",
    path: "blog",
    element: <Home/>,
  },
  {
    name: "Resume",
    path: "resume",
    element: <Home />
  }
];

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
const socials: Array<ISocialProps> = [
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
 * Layout component that wraps all routes with common header and footer elements.
 * Uses React Router's Outlet component to render nested route content.
 *
 * @returns {ReactElement} A div containing the header, main content area with Outlet, and footer
 * @author Thomas Stemler (OccultParrot)
 */
function Layout(): ReactElement {

  return (
    <div className="min-h-screen flex flex-col">
      <Header pages={pages.filter((page) => {return !page.isHidden})} rootPage={pages[0]}/>

      <main className="grow bg-white">
        <Outlet/>
      </main>
      <Footer socials={socials}/>
    </div>
  );
}

/**
 @param props The properties of the Route we want to create. Contains:
  - **name**: Used for the header menu to travel to that page.
  - **path**: The path to that page. If child don't write the whole path, just what is added to parent Routes path.
  - **element**: The React element that the Route will route to.
  - **children?**: ***Nullable***. An array of more **IPageProps** that represent the children routes.

 @returns a **Route** **ReactElement**, for use in the browser router

 @desc This function is used for creating the routes for the browser router in the App function

 @author Thomas Stemler (OccultParrot)
 **/
function CreateRoute(props: IPageProps): ReactElement {
  console.warn(`Creating route to page ${props.name} at path ${props.path}, with ${props.children?.length ?? 0} children`); // For testing. TODO: Comment out in final product

  // If the route has NO children,
  if (!props.children)
    // Return a Route element
    return <Route key={props.path} path={props.path} element={props.element}/>

  // If the route DOES have children,
  return (
    // Return a Route element, with children Routes via recursively calling the function
    <Route key={props.path} path={props.path} element={props.element}>\
      {/* Map through EACH of the Route's children Routes */}
      {props.children.map((childProps: IPageProps) =>
        // Recursively call the CreateRoute function, to make a Route Element here
        CreateRoute(childProps)
      )}
    </Route>
  )
}


/**
 * Main application component that sets up routing configuration.
 * Implements a BrowserRouter with nested routes and error handling.
 *
 * @returns {ReactElement} The configured router with all application routes
 * @author Thomas Stemler (OccultParrot)
 *
 * @desc
 * Routes structure:
 * - "/" (Layout wrapper)
 *   - "/" (index) -> Landing page
 *   - Dynamic routes from pages array
 *   - "*" -> Error page for unmatched routes
 */
export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* The "index" page is the one that gets served when you have a blank path */}
          <Route path={pages[0].path} index element={pages[0].element}/>

          {/* Seeding of paths */}
          {pages.slice(1).map((pageProps: IPageProps) => CreateRoute(pageProps))}

          {/* The error page gets served if the path the user goes to does not exist. */}
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
