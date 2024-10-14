import ProjectCard from '../components/Card';
import BasicECS from '../assets/BasicECS.png';
import Movte from '../assets/Movte.png';
import WeatherDashboard from '../assets/WeatherDashboard.png';
import SylvanExodus from '../assets/SylvanExodus.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';
import StimuliTesting from '../assets/StimuliTesting.jpg';

function PortfolioPage() {
  /**
   * Contents must follow the pattern:
   * image: string,
   * name: string,
   * description: string,
   * githubLink: string,
   * deployedLink: string
   * isFeatured: boolean
   */
  const projectArray = [
    // TODO: Add Projects
    {
      image: BasicECS,
      name: 'Basic ECS',
      description:
        'This is a simple entity component system architecture I wrote in C# using the MonoGame Framework.',
      githubLink: 'https://github.com/OccultParrot/Basic-ECS',
      isFeatured: true,
    },
    {
      image: Movte,
      name: 'Movte',
      description:
        'This is my first web development project I ever did with a group! Its a website where you put add movies that people want to watch, then you pass the device around and have people vote on what movies they want to watch.',
      githubLink: 'https://github.com/OccultParrot/movie-suggestion-voting',
      deployedLink: 'https://occultparrot.github.io/movie-suggestion-voting/',
    },
    {
      image: WeatherDashboard,
      name: 'Weather Dashboard',
      description:
        'This website displays the current weather and the future weather for any city',
      githubLink: 'https://github.com/WeatherDashboard',
      deployedLink: 'https://weather-dashboard-g6mh.onrender.com',
    },
    {
      image: SylvanExodus,
      name: 'Sylvan Exodus',
      description:
        'A work in progress game. The goal of development is write in a modular style in order to make it super easy to add new stuff.',
      githubLink: 'https://github.com/OccultParrot/SylvanExodus/blob/main/Documentation/Game-Mechanics.md',
    },
    {
      image: EmployeeTracker,
      name: 'Employee Tracker',
      description:
        'A console program to help track employees in a database.',
      githubLink: 'https://github.com/OccultParrot/Employee-Tracker',
    },
    {
      image: StimuliTesting,
      name: 'Stimuli Testing (PBASIC)',
      description:
        'The PBASIC code written for the study I preformed during my internship with Missouri S & T.',
      githubLink: 'https://github.com/OccultParrot/StimuliTesting',
    }
  ];

  const featuredProjects = projectArray.filter((project) => project.isFeatured);
  const regularProjects = projectArray.filter((project) => !project.isFeatured);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        My Projects
      </h2>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-700">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-700">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
