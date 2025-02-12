import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {ReactElement} from "react";

import Home from "./pages/Home";
import Landing from "./pages/Landing.tsx";
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
interface IPageProps {
  name: string;
  path: string;
  element: ReactElement;
  children?: IPageProps[];
}

/**
 * Configuration array defining all application routes.
 * Each entry maps to a route in the application.
 *
 * @type {Array<IPageProps>}
 * @example
 * {
 *   name: "home",
 *   path: "home",
 *   element: <Home/>,
 *   children: [] // optional nested routes
 * }
 */
const pages: Array<IPageProps> = [
  {
    name: "home",
    path: "home",
    element: <Home/>,
  },
];

/**
 * Layout component that wraps all routes with common header and footer elements.
 * Uses React Router's Outlet component to render nested route content.
 *
 * @returns {ReactElement} A div containing the header, main content area with Outlet, and footer
 * @author Thomas Stemler (OccultParrot)
 */
function Layout() {

  return (
    <div>
      <Header/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
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
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* The "index" page is the one that gets served when you have a blank path */}
          <Route path="/" index element={<Landing/>}/>

          {/* Seeding of paths */}
          {pages.map((pageProps: IPageProps) => CreateRoute(pageProps))}

          {/* The error page gets served if the path the user goes to does not exist. */}
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
