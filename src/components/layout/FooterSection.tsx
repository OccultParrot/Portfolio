import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { socials } from "../../configs/typeScriptConfigs.tsx";


export default function FooterSection(): ReactElement {
	const currentYear = new Date().getFullYear();
	// Importing socials from the config file

	return (
		<footer className="bg-gray-800 pt-4!">
			<div className="mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
				<div className="mb-8 flex flex-col justify-center">
					<div className="flex flex-row content-center justify-between">
						{ socials.map(( social, i ) => (
							<a href={ social.href }
							   className="flex flex-col items-center group"
							   key={ i }
							   target="_blank" rel="noopener noreferrer">
								<img alt={ social.name } className="h-8! w-8!" src={ social.icon }/>
								<p
									className="my-2 text-center text-xs text-gray-300 opacity-0 transition-opacity group-hover:opacity-100">{ social.name }</p>
							</a>
						)) }
					</div>
					<div className="text-center space-y-4">
						<p className="text-sm text-gray-300">
							© { currentYear } Thomas Stemler. All rights reserved.
						</p>
						<p className="text-sm text-gray-400">Full Stack Developer</p>
						<Link to="https://github.com/OccultParrot/Portfolio" target="_blank" rel="noopener noreferrer">
							<p className="text-sm text-gray-400 transition-colors hover:text-blue-600">
								Link to GitHub repository.
							</p>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}