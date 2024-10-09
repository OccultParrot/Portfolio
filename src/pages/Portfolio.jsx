import ProjectCard from '../components/Card';
import BasicECS from '../assets/BasicECS.png';
import Movte from '../assets/Movte.png';
import WeatherDashboard from '../assets/WeatherDashboard.png';

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
      name: 'WeatherDashboard',
      description:
        'This website displays the current weather and the future weather for any city',
      githubLink: 'https://github.com/WeatherDashboard',
      deployedLink: 'https://weather-dashboard-g6mh.onrender.com',
    },
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
