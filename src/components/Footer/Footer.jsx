import GithubLogo from '../../assets/icons8-github.svg';
import LinkedInLogo from '../../assets/icons8-linked-in.svg';
import DevLogo from '../../assets/dev-icon.svg';

import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubLogo,
      url: 'https://github.com/OccultParrot',
    },
    {
      name: 'LinkedIn',
      icon: LinkedInLogo,
      url: 'https://www.linkedin.com/in/thomas-stemler-468094299/',
    },
    {
      name: 'Dev.to',
      icon: DevLogo,
      url: 'https://dev.to/occultparrot',
    },
  ];

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-8 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors group"
              >
                <span className="sr-only">{social.name}</span>
                <div className="relative">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-8 w-8 transform group-hover:scale-110 transition-transform"
                  />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-300">
                    {social.name}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Thomas Stemler. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
            <Link to='https://github.com/OccultParrot/Portfolio' className='text-gray-400 text-sm hover:text-blue-600' target='_blank'>Link to github repository</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
