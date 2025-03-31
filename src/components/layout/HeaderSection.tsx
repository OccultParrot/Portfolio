import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

import { IPageProps } from '../../../types.ts';


interface IHeaderProps {
	pages: IPageProps[];
	rootPage: IPageProps;
}

function CreateNavLink( page: IPageProps, i: number ): ReactElement {
	// If the page has no children just do a regular link
	if (!page.children || page.children.length <= 0) {
		return (
			<li key={ i }>
				<Link to={ `/${ page.path }` }>
					<p className="text-gray-600 transition ease-in-out hover:scale-115 hover:text-blue-600">{ page.name }</p>
				</Link>
			</li>
		);
	}

	// For typeScriptConfigs with children, create a dropdown menu
	return (
		<li key={ i } className="relative group">
			<div className="flex cursor-pointer items-center text-gray-600 transition-colors hover:text-blue-600">
				<Link
					to={ `/${ page.path }` }
				>
					<p className="text-gray-600 transition ease-in-out hover:scale-115 hover:text-blue-600">{ page.name }</p>
				</Link>
				<svg
					className="invisible ml-1 h-4 w-4 transition-transform group-hover:rotate-180 sm:visible"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path fillRule="evenodd"
					      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					      clipRule="evenodd"/>
				</svg>
			</div>

			{/* Dropdown menu */ }
			<ul
				className="invisible absolute left-0 z-10 mt-2 w-48 rounded-md bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 sm:group-hover:visible">
				{ page.children.map(( childPage, childIndex ) => (
					!childPage.isHidden && (
						<li key={ childIndex }>
							<Link
								to={ `/${ page.path }/${ childPage.path }` }
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
							>
								{ childPage.name }
							</Link>
						</li>
					)
				)) }
			</ul>
		</li>
	);
}

export default function HeaderSection( props: IHeaderProps ) {
	const pages: IPageProps[] = props.pages;
	const root: IPageProps = props.rootPage;

	return (
		<header className="sticky top-0 z-50">
			<div
				className="flex h-fit w-full flex-col items-center justify-between bg-white pb-4 shadow-sm sm:h-20 sm:flex-row sm:pb-0">
				<Link to={ root.path }>
					<div className="flex items-center justify-between group">
						<h1
							className="ml-0 text-2xl font-bold text-gray-800 transition ease-in-out group-hover:text-blue-600 hover:scale-110 sm:ml-4">
							Thomas Stemler
						</h1>
					</div>
				</Link>

				<ul className="mr-0 flex flex-row flex-wrap items-center justify-around gap-x-2 sm:mr-4 sm:gap-x-4">
					{ pages.map(( page, i ) => (
						!page.isHidden && CreateNavLink(page, i)
					)) }

					<li key="resumme">
						<a href="/Resume.pdf" download>
							<p className="text-gray-600 transition ease-in-out hover:scale-115 hover:text-blue-600">Resume</p>
						</a>
					</li>
				</ul>
			</div>
			<br/>
		</header>
	);
}