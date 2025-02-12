import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {ReactElement} from "react";

import Home from "./pages/Home";
import Landing from "./pages/Landing.tsx";
import Error from "./pages/Error.tsx";
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";

interface IPageProps {
  name: string;
  path: string;
  element: ReactElement;
  children?: IPageProps[];
}

const pages: Array<IPageProps> = [
  {
    name: "home",
    path: "home",
    element: <Home/>,
  },
];

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

function CreateRoute(props: IPageProps): ReactElement {
  console.warn(`Creating route to page ${props.name} at path ${props.path}, with ${props.children?.length ?? 0} children`); // For testing. TODO: Comment out in final product
  if (!props.children)
    return <Route key={props.path} path={props.path} element={props.element} />

  return (
    <Route key={props.path} path={props.path} element={props.element}>
      {props.children.map((childProps: IPageProps) =>
        CreateRoute(childProps)
      )}
    </Route>
  )
}

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
