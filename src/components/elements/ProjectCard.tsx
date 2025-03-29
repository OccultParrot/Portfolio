import { Link } from 'react-router-dom';

import {IProjectCardProps} from '../../types.ts';


export default function ProjectCard(props: IProjectCardProps) {
  return (
    // We wrap the card in a <a /> element so that the whole card acts as a link
    <a
      href={props.links[0].href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white
      `}
    >
      <div className={`relative ${props.isFeatured ? 'h-80' : 'h-60'}`}>
        <img
          src={props.image}
          alt={`Example of ${props.title}`}
          className="w-full h-full object-cover"
        />
        {props.isFeatured && (
          <span
            className="absolute top-4 right-4 bg-blue-500 text-white px-4! py-1! rounded-full text-sm font-semibold">
            Featured
          </span>
        )}
      </div>
      <div className="p-6!">
        <h3
          className={`font-bold! mb-4! text-gray-800 ${
            props.isFeatured ? 'text-2xl!' : 'text-xl!'
          }`}
        >
          {props.title}
        </h3>
        <p className="text-gray-600 mb-6!">{props.description}</p>
        <div className="flex flex-col items-center space-y-4">
          {props.links.map((link, i) => (
            <Link
              to={link.href}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-gray-600 hover:text-blue-600 transition-colors">
                {link.displayName}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </a>
  );
}