// import {Typewriter} from 'react-simple-typewriter';
import Logo from "../assets/LOGO DO NOT DELETE.png";
import {languages} from '../config.tsx';
import { Link } from 'react-router-dom';

{/*<span className="bg-gradient-to-br from-cyan-600 to-cyan-400 bg-clip-text text-5xl font-extrabold  text-transparent">*/}
{/*  <Typewriter words={["Hello", "World"]} cursor cursorStyle="_" loop={0}/>*/}
{/*</span>*/}



// TODO: Finish the home page stuff.
// The home page, where most information is shown.
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col sm:flex-row items-center md:items-start gap-8">
      {/*  Hero Section */}
      <div className="w-fit lg:w-1/2">
        <img src={Logo} alt="Thomas Stemler" />
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
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                  {language}
                </span>
            ))}
          </div>
        </div>
        <div className="mt-16 h-full text-center" >
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

      {/* Short value proposition */}

      {/* Logo */}

      {/*  Get in contact button */}

      {/* Skills / Tech Stack */}

      {/* Featured Projects */}

      {/* Brief Introduction, put a link to AboutMe there also */}

      {/* Latest blog post */}
    </div>
  )
}