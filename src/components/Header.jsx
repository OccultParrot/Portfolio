import { Link, useLocation } from 'react-router-dom';

function Header({ pages }) {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-2xl font-bold ${
                location.pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-800 hover:text-blue-600'
              } transition-colors`}
            >
              Thomas Stemler
            </Link>
          </div>

          <nav>
            <ul className="flex space-x-8">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === page.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    target={page.redirect}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
