import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ISocialProps } from '../../App.tsx';

interface IFooterProps {
  socials: ISocialProps[];
}


export default function Footer(props: IFooterProps): ReactElement {
  const currentYear = new Date().getFullYear();
  const socials = props.socials;

  return (
    <footer className="bg-gray-800 pt-4!">
      <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-col justify-center space-x-8 mb-8">
          <div className="flex flex-row content-center justify-between">
            {socials.map((social) => (
              <a href={social.href}
                 className="flex flex-col space-x-8 items-center group"
              target="_blank">
                <img alt={social.name} className="h-8! w-8!" src={social.icon} />
                <p className="text-xs text-gray-300 text-center group-hover:opacity-100 opacity-0 transition-opacity">{social.name}</p>
              </a>
            ))}
          </div>
          <div className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Thomas Stemler. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
            <Link to="https://github.com/OccultParrot/Portfolio" target="_blank">
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