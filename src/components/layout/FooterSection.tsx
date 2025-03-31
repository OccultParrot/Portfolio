import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import socialsConfig from '../../configs/socials.json';

import { ISocialProps } from '../../../types.ts';


export default function FooterSection(): ReactElement {
	const currentYear = new Date().getFullYear();
	// Importing socials from the config file
	const socials: ISocialProps[] = socialsConfig as ISocialProps[];

	return (
		<footer className="bg-gray-800 pt-4!">
			<div className=" mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col items-center">
				<div className="flex flex-col justify-center  mb-8">
					<div className="flex flex-row content-center justify-between">
						{ socials.map(( social, i ) => (
							<a href={ social.href }
							   className="flex flex-col  items-center group"
							   key={ i }
							   target="_blank" rel="noopener noreferrer">
								<img alt={ social.name } className="h-8! w-8!" src={ social.icon }/>
								<p
									className="my-2 text-xs text-gray-300 text-center group-hover:opacity-100 opacity-0 transition-opacity">{ social.name }</p>
							</a>
						)) }
					</div>
					<div className="text-center space-y-4">
						<p className="text-gray-300 text-sm">
							© { currentYear } Thomas Stemler. All rights reserved.
						</p>
						<p className="text-gray-400 text-sm">Full Stack Developer</p>
						<Link to="https://github.com/OccultParrot/Portfolio" target="_blank" rel="noopener noreferrer">
							<p className="text-gray-400 text-sm hover:text-blue-600 transition-colors">
								Link to GitHub repository.
							</p>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}