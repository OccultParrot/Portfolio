import Logo from "../assets/Logo.svg";


import {languages} from '../config.tsx';
import { Link } from 'react-router-dom';

// The home page, where most information is shown.
export default function HomePage() {
  return (
    <div>
      {/* Short about me */}
      <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-1/4 lg:w-1/3">
          <img src={Logo} alt="Logo" loading="lazy" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold leading-tight mb-4 text-gray-800">
            Thomas Stemler
          </h2>
          <p className="text-gray-600 text-lg mb-6 italic">Full Stack Developer</p>
          <p className="text-gray-600 text-lg leading-relaxed">
            As a passionate Full Stack Developer, I bring ideas to life through
            code. With expertise in both frontend and backend technologies, I
            create seamless, user-friendly applications that solve real-world
            problems. My approach combines technical excellence with creative
            problem-solving, ensuring that every project I undertake is both
            functional and innovative.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 hover:scale-120 transition  cursor-default ease-in-out"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          {/* Contact Me button */}
          <div className="mt-16 text-center" >
            <Link className="" to="/contact">
              <button
                onClick={() => {}}
                type="button"
                className={`inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all `}
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/*/!* Featured Projects *!/*/}
      {/*<section className="container mx-auto px-4">*/}
      {/*  <div className="text-center">*/}
      {/*    <h2 className="text-3xl font-bold leading-tight mb-4 text-gray-800">*/}
      {/*      Featured Projects*/}
      {/*    </h2>*/}
      {/*  </div>*/}
      {/*  {projects.filter((project) => {*/}
      {/*    return !!project.isFeatured;*/}
      {/*  }).map((project) => (*/}
      {/*    <div>*/}
      {/*      <h2 className="text-2xl font-bold leading-tight mb-4 text-gray-800">{project.title}</h2>*/}
      {/*      <p>{project.description}</p>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</section>*/}
    </div>
  )
}