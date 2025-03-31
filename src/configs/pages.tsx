import { IPageProps } from '../../types.ts';

import HomePage from '../pages/HomePage.tsx';
import ProjectsPage from '../pages/ProjectsPage.tsx';
import ContactPage from '../pages/ContactPage.tsx';

/**
 * Configuration array defining all application routes.
 * Each entry maps to a route in the application, along with getting a link to the path in the nav bar if marked false for isHidden
 *
 * Also, the first item in the array is considered the "root" and the title will redirect to it.
 * @type {Array<IPageProps>}
 * @example
 * {
 *   name: "home",
 *   path: "home",
 *   isHidden?: false
 *   element: <Home/>,
 *   children: [] // optional nested routes
 * }
 */
export const pages: Array<IPageProps> = [
	{
		name: 'Home',
		path: '',
		isHidden: true,
		element: <HomePage/>
	},
	{
		name: 'Projects',
		path: 'projects',
		element: <ProjectsPage/>
	},
	{
		name: 'Contact Me',
		path: 'contact',
		element: <ContactPage/>
	},
];