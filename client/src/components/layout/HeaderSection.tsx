import { IPageProps } from '../../types.ts';
import {Link} from "react-router-dom";


interface IHeaderProps {
  pages: IPageProps[];
  rootPage: IPageProps;
}

export default function HeaderSection(props: IHeaderProps) {
  const pages: IPageProps[] = props.pages;
  const root: IPageProps = props.rootPage;
  // const rootPage: IPageProps = props.rootPage;

  return (
    <header>
      <div className="h-fit pb-4! sm:pb-0! sm:h-20 flex shadow-sm items-center justify-between w-full flex-col sm:flex-row">
        <Link to={root.path} >
          <h1 className="ml-4! text-2xl! font-bold! text-gray-800 hover:text-blue-600 transition-colors">Thomas Stemler</h1>
        </Link>

        <ul className="flex flex-row items-center flex-wrap justify-around gap-x-4 mr-4!">
          {pages.map((page, i) => (
            <li key={i}>
              <Link to={`/${page.path}`}>
                <p className='text-gray-600 hover:text-blue-600 transition-colors'>{page.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <br />
    </header>
  )
}
