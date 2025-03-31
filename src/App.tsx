import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Fragment, ReactElement } from 'react';
import { pages } from './configs/pages.tsx';
import { IPageProps } from '../types.ts';
import ErrorPage from './pages/ErrorPage.tsx';
import HeaderSection from './components/layout/HeaderSection.tsx';
import FooterSection from './components/layout/FooterSection.tsx';


/**
 * Layout component that wraps all routes with common header and footer elements.
 * Uses React Router's Outlet component to render nested route content.
 *
 * @returns {ReactElement} A div containing the header, main content area with Outlet, and footer
 * @author Thomas Stemler (OccultParrot)
 */
function Layout(): ReactElement {

	return (
		<div className="flex min-h-screen flex-col">
			<HeaderSection pages={ pages.filter(( page ) => {
				return !page.isHidden
			}) } rootPage={ pages[0] }/>

			<main className="grow bg-white">
				<Outlet/>
			</main>
			<FooterSection/>
		</div>
	);
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
 *   - "*" -> ErrorPage page for unmatched routes
 */
export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Layout/> }>
					{/* The "index" page is the one that gets served when you have a blank path */ }
					<Route index element={ pages[0].element }/>

					{/* Flatten all routes */ }
					{ pages.slice(1).map(( pageProps: IPageProps ) => {
						if (!pageProps.children) {
							return <Route key={ pageProps.path } path={ pageProps.path } element={ pageProps.element }/>;
						}

						return (
							<Fragment key={ pageProps.path }>
								<Route path={ pageProps.path } element={ pageProps.element }/>
								{ pageProps.children.map(( childProps ) => (
									<Route
										key={ `${ pageProps.path }/${ childProps.path }` }
										path={ `${ pageProps.path }/${ childProps.path }` }
										element={ childProps.element }
									/>
								)) }
							</Fragment>
						);
					}) }

					{/* The error page gets served if the path the user goes to does not exist. */ }
					<Route path="*" element={ <ErrorPage/> }/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
