// import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { experience } from '../config.tsx';
import { IExperience } from '../types.ts';
import { ReactElement } from 'react';

/**
 * Component to display an individual experience item
 * @param displayName - The name of the experience item
 * @param icon - The icon URL for the experience item
 * @constructor
 */
const ExperienceItem = ({ displayName, icon }: { displayName: string, icon: string }) => {
  return (
    <div
      className="flex items-center bg-white shadow-md rounded-lg p-3 m-2 select-none transition-all duration-300 hover:shadow-lg hover:translate-y-1 border border-gray-100"
    >
      <div className="bg-gray-50 p-2 rounded-md mr-3 flex items-center justify-center"
           style={{ width: '48px', height: '48px' }}>
        <img src={icon} alt={displayName} className="max-w-full max-h-full object-contain" />
      </div>
      <span className="font-medium text-gray-800">{displayName}</span>
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
  // Group experiences by type and level, sorting them alphabetically
  const languages = experience
    .filter((e: IExperience) => e.type === 'language')
    .sort((a, b) => a.name.localeCompare(b.name));

  const frameworks = experience
    .filter((e: IExperience) => e.type === 'framework')
    .sort((a, b) => a.name.localeCompare(b.name));

  const technologies = experience
    .filter((e: IExperience) => e.type === 'technology')
    .sort((a, b) => a.name.localeCompare(b.name));

  // Get unique levels
  const allLevels: Array<'frontend' | 'backend' | 'database'> = ['frontend', 'backend', 'database'];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-1/4 lg:w-1/3">
          {/* My logo. When you hover, it rotates and scales up slightly*/}
          <img
            src={Logo}
            alt="Logo"
            loading="lazy"
            className="w-full h-auto transform hover:scale-105 hover:rotate-12 transition-transform ease-in-out duration-300"
          />
        </div>

        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold leading-tight mb-4 text-gray-800">
            Thomas Stemler
          </h2>
          <p className="text-gray-600 text-lg mb-6 italic">Full Stack Developer</p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            As a passionate Full Stack Developer, I bring ideas to life through
            code. With expertise in both frontend and backend technologies, I
            create seamless, user-friendly applications that solve real-world
            problems.
          </p>

          <div className="mt-16 text-center flex flex-col gap-4">
            {/* Contact Me Button */}
            <Link to="/contact">
              <button
                type="button"
                className="inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              >
                Contact Me
              </button>
            </Link>

            {/* View My Projects Button */}
            <Link to="/projects">
              <button
                type="button"
                className="inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all transform hover:scale-105"
              >
                View My Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-xl p-8 w-full max-w-5xl shadow-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">Technologies I work with professionally</p>
          </div>

          {/* Stack Section */}
          <div className="mb-12">
            {allLevels.map(level => {
              // Filter items by level
              const levelItems = [...languages, ...frameworks, ...technologies].filter(
                item => item.level?.includes(level)
              );

              // If no items for this level, skip rendering
              if (levelItems.length === 0) return null;

              return (
                <div key={level} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-12 bg-blue-500 rounded-r-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-gray-800 capitalize">{level} Stack</h3>
                  </div>
                  <div className="flex flex-wrap">
                    {levelItems.map(item => (
                      <ExperienceItem
                        key={item.name}
                        displayName={item.name}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages Section */}
          {languages.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-green-500 rounded-r-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-800">Languages</h3>
              </div>
              <div className="flex flex-wrap">
                {languages.map(language => (
                  <ExperienceItem
                    key={language.name}
                    displayName={language.name}
                    icon={language.icon}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Frameworks Section */}
          {frameworks.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-purple-500 rounded-r-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-800">Frameworks</h3>
              </div>
              <div className="flex flex-wrap">
                {frameworks.map(framework => (
                  <ExperienceItem
                    key={framework.name}
                    displayName={framework.name}
                    icon={framework.icon}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Technologies Section */}
          {technologies.length > 0 && (
            <div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-yellow-500 rounded-r-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-800">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap">
                {technologies.map(tech => (
                  <ExperienceItem
                    key={tech.name}
                    displayName={tech.name}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}