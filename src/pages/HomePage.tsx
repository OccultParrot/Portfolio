// import React from 'react';
import Logo from '../assets/Logo.svg';

import experienceConfig from '../configs/experience.json';
import { Link } from 'react-router-dom';
// import { experience } from '../pages.tsx';
import { IExperience } from '../../types.ts';
import { ReactElement } from 'react';

/**
 * Component to display an individual experience item
 * @param displayName - The name of the experience item
 * @param icon - The icon URL for the experience item
 * @constructor
 */
const ExperienceItem = ( { displayName, icon }: { displayName: string, icon: string } ) => {
	return (
		<div
			className="m-2 flex select-none items-center rounded-lg border border-gray-100 bg-white p-3 shadow-md transition-all duration-300 hover:translate-y-1 hover:shadow-lg"
		>
			<div className="mr-3 flex items-center justify-center rounded-md bg-gray-50 p-2"
			     style={ { width: '48px', height: '48px' } }>
				<img src={ icon } alt={ displayName } className="max-h-full max-w-full object-contain"/>
			</div>
			<span className="font-medium text-gray-800">{ displayName }</span>
		</div>
	);
};

/**
 * HomePage component that serves as the landing page of the application.
 * It displays the main information about me, including a brief introduction,
 * a contact button, and a list of skills and technologies.
 *
 * @returns {JSX.Element} - The rendered HomePage component
 */
export default function HomePage(): ReactElement {
	// Importing experience from the config file
	const experience: IExperience[] = experienceConfig as IExperience[];

	// Group experiences by type and level, sorting them alphabetically
	const languages = experience
		.filter(( e: IExperience ) => e.type === 'language')
		.sort(( a, b ) => a.name.localeCompare(b.name));

	const frameworks = experience
		.filter(( e: IExperience ) => e.type === 'framework')
		.sort(( a, b ) => a.name.localeCompare(b.name));

	const technologies = experience
		.filter(( e: IExperience ) => e.type === 'technology')
		.sort(( a, b ) => a.name.localeCompare(b.name));

	// Get unique levels
	const allLevels: Array<'frontend' | 'backend' | 'database'> = ['frontend', 'backend', 'database'];

	return (
		<div className="flex w-full flex-col items-center">
			<div className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 lg:flex-row">
				<div className="w-1/4 lg:w-1/3">
					{/* My logo. When you hover, it rotates and scales up slightly*/ }
					<img
						src={ Logo }
						alt="Logo"
						loading="lazy"
						className="h-auto w-full transform transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-105"
					/>
				</div>

				<div className="w-full lg:w-2/3">
					<h2 className="mb-4 text-3xl font-bold leading-tight text-gray-800">
						Thomas Stemler
					</h2>
					<p className="mb-6 text-lg italic text-gray-600">Full Stack Developer</p>

					<p className="mb-8 text-lg leading-relaxed text-gray-600">
						As a passionate Full Stack Developer, I bring ideas to life through
						code. With expertise in both frontend and backend technologies, I
						create seamless, user-friendly applications that solve real-world
						problems.
					</p>

					<div className="mt-16 flex flex-col gap-4 text-center">
						{/* Contact Me Button */ }
						<Link to="/contact">
							<button
								type="button"
								className="inline-flex transform justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Contact Me
							</button>
						</Link>

						{/* View My Projects Button */ }
						<Link to="/projects">
							<button
								type="button"
								className="inline-flex transform justify-center rounded-md border border-transparent bg-gray-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>
								View My Projects
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-12">
				<div className="mx-auto w-full max-w-5xl rounded-xl bg-gray-50 p-8 shadow-lg">
					<div className="mb-10 text-center">
						<h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
						<div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500"></div>
						<p className="mt-4 text-gray-600">Technologies I work with professionally</p>
					</div>

					{/* Stack Section */ }
					<div className="mb-12">
						{ allLevels.map(level => {
							// Filter items by level
							const levelItems = [...languages, ...frameworks, ...technologies].filter(
								item => item.level?.includes(level)
							);

							// If no items for this level, skip rendering
							if (levelItems.length === 0) return null;

							return (
								<div key={ level } className="mb-10">
									<div className="mb-6 flex items-center">
										<div className="mr-4 h-12 w-2 rounded-r-full bg-blue-500"></div>
										<h3 className="text-2xl font-bold capitalize text-gray-800">{ level } Stack</h3>
									</div>
									<div className="flex flex-wrap">
										{ levelItems.map(item => (
											<ExperienceItem
												key={ item.name }
												displayName={ item.name }
												icon={ item.icon }
											/>
										)) }
									</div>
								</div>
							);
						}) }
					</div>

					{/* Languages Section */ }
					{ languages.length > 0 && (
						<div className="mb-10">
							<div className="mb-6 flex items-center">
								<div className="mr-4 h-12 w-2 rounded-r-full bg-green-500"></div>
								<h3 className="text-2xl font-bold text-gray-800">Languages</h3>
							</div>
							<div className="flex flex-wrap">
								{ languages.map(language => (
									<ExperienceItem
										key={ language.name }
										displayName={ language.name }
										icon={ language.icon }
									/>
								)) }
							</div>
						</div>
					) }

					{/* Frameworks Section */ }
					{ frameworks.length > 0 && (
						<div className="mb-10">
							<div className="mb-6 flex items-center">
								<div className="mr-4 h-12 w-2 rounded-r-full bg-purple-500"></div>
								<h3 className="text-2xl font-bold text-gray-800">Frameworks</h3>
							</div>
							<div className="flex flex-wrap">
								{ frameworks.map(framework => (
									<ExperienceItem
										key={ framework.name }
										displayName={ framework.name }
										icon={ framework.icon }
									/>
								)) }
							</div>
						</div>
					) }

					{/* Technologies Section */ }
					{ technologies.length > 0 && (
						<div>
							<div className="mb-6 flex items-center">
								<div className="mr-4 h-12 w-2 rounded-r-full bg-yellow-500"></div>
								<h3 className="text-2xl font-bold text-gray-800">Tools & Technologies</h3>
							</div>
							<div className="flex flex-wrap">
								{ technologies.map(tech => (
									<ExperienceItem
										key={ tech.name }
										displayName={ tech.name }
										icon={ tech.icon }
									/>
								)) }
							</div>
						</div>
					) }
				</div>
			</div>
		</div>
	);
}