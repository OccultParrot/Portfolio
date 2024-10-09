import React from 'react';

import Logo from '../assets/Logo.jpg';

function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-row md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/4">
          <img
            src={Logo}
            alt="Thomas Stemler"
            className="rounded-lg shadow-md w-1/4"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Thomas Stemler
          </h2>
          <p className="text-gray-600 text-lg mb-6">Full Stack Developer</p>
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
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React',
                'Node.js',
                'TypeScript',
                'PostgreSQL',
                'Python',
                'C#',
                'C++',
                'Java',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
