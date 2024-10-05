import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

// Importing Header and Footer
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Importing pages
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import TestPage from "./pages/Test";

// Array of pages. When you want to add a page to the website, add it here!
const pages = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    isIndex: true,
  },
  {
    name: "About Me",
    path: "about",
    element: <AboutPage />,
    isIndex: false,
  },
  {
    name: "Test [Click Me!]",
    path: "test",
    element: <TestPage />,
    isIndex: false,
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
