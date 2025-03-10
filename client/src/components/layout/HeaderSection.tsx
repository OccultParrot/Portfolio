import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

import { IPageProps } from '../../types.ts';
import { isAdmin } from '../../config.tsx';


interface IHeaderProps {
  pages: IPageProps[];
  rootPage: IPageProps;
}

function CreateNavLink(page: IPageProps, i: number): ReactElement {
  // If the page has no children just do a regular link
  if (!page.children || page.children.length <= 0) {
    return (
      <li key={i}>
        <Link to={`/${page.path}`}>
          <p className="text-gray-600 hover:text-blue-600 transition-colors">{page.name}</p>
        </Link>
      </li>
    );
  }

  // For pages with children, create a dropdown menu
  return (
    <li key={i} className="relative group">
      <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">
        <Link
          to={`/${page.path}`}
        >
          <p className="text-gray-600 hover:text-blue-600 transition-colors">{page.name}</p>
        </Link>
        <svg
          className="ml-1 w-4 h-4 invisible sm:visible transition-transform group-hover:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd" />
        </svg>
      </div>

      {/* Dropdown menu */}
      <ul
        className="absolute z-10 left-0 mt-2 bg-white rounded-md shadow-lg py-1 w-48 opacity-0 invisible group-hover:opacity-100 sm:group-hover:visible transition-all duration-200">
        {page.children.map((childPage, childIndex) => (
          !childPage.isHidden && (
            <li key={childIndex}>
              <Link
                to={`/${page.path}/${childPage.path}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                {childPage.name}
              </Link>
            </li>
          )
        ))}
      </ul>
    </li>
  );
}

export default function HeaderSection(props: IHeaderProps) {
  const pages: IPageProps[] = props.pages;
  const root: IPageProps = props.rootPage;

  return (
    <header className="sticky top-0 z-50">
      <div
        className="h-fit pb-4 sm:pb-0 sm:h-20 flex shadow-sm items-center justify-between w-full flex-col sm:flex-row bg-white">
        <Link to={root.path}>
          <div className="flex items-center justify-between group">
            <h1 className="ml-0 sm:ml-4 text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              Thomas Stemler
            </h1>
            {
              isAdmin && (
              <p className="ml-2 text-gray-500">│ Admin</p>
            )
            }
          </div>
        </Link>

        <ul className="flex flex-row items-center flex-wrap justify-around gap-x-2 sm:gap-x-4 mr-0 sm:mr-4">
          {pages.map((page, i) => (
            !page.isHidden && (!page.isAdminOnly || isAdmin) && CreateNavLink(page, i)
          ))}
        </ul>
      </div>
      <br />
    </header>
  );
}