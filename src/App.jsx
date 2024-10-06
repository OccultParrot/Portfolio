import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

// Importing Header and Footer
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Importing pages
import Error from "./pages/Error/Error";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import ResumePage from "./pages/Resume/Resume";
 
// Array of pages. When you want to add a page to the website, add it here!
const pages = [
  {
    name: "About Me",
    path: "/",
    element: <AboutPage />,
    isIndex: true,
  },
  {
    name: "Portfolio",
    path: "portfolio",
    element: <PortfolioPage />,
    isIndex: false,
  },
  {
    name: "Contact Me",
    path: "contact",
    element: <ContactPage />,
  },
  {
    name: "Resume",
    path: "resume",
    element: <ResumePage />,
  },
];

function Layout() {
  return (
    <div>
      <Header pages={pages} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Dynamically adding pages to the router */}
          {pages.map((page) =>
            page.isIndex ? (
              <Route key={page.path} index element={page.element} />
            ) : (
              <Route key={page.path} path={page.path} element={page.element} />
            )
          )}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
