import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import './index.css';

// Importing Header and Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Importing pages
import Error from './pages/Error';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';

// Array of pages. When you want to add a page to the website, add it here!
/**
 * Pages MUST follow the following guidelines:
 * name: string
 * path: string
 * element: ReactElement
 * isIndex?: boolean
 * redirect?: string
 */
const pages = [
  {
    name: 'About Me',
    path: '/',
    element: <AboutPage />,
    isIndex: true,
  },
  {
    name: 'Portfolio',
    path: 'portfolio',
    element: <PortfolioPage />,
  },
  {
    name: 'Contact Me',
    path: 'contact',
    element: <ContactPage />,
  },
  {
    name: 'Resume',
    // TODO: Make Resume redirect to dropbox share link of resume
    path: 'https://google.com',
    // Undefined because there is no resume page
    element: undefined,
    // redirecting to '_blank' will make it open in a new page
    redirect: '_blank',
  },
];

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header pages={pages} />
      <main className="flex-grow">
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
            ),
          )}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
