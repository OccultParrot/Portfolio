import ProjectCard from '../components/elements/ProjectCard.tsx';
import {IProjectCardProps} from "../../types.ts";
import projectsConfig from '../configs/projects.json';


export default function ProjectsPage() {
  // Importing projects from the config file
  const projects: IProjectCardProps[] = projectsConfig as IProjectCardProps[];
  const featuredProjects = projects.filter((project) => !!project.isFeatured);
  const regularProjects = projects.filter((project) => !project.isFeatured);

  return (
    <section className="container mx-auto! px-4! py-16!">
      <h2 className="text-3xl font-bold mb-12! text-center text-gray-800">
        My Projects
      </h2>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-12!">
          <h3 className="text-xl font-semibold mb-6! text-gray-700">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      <div>
        <h3 className="text-xl font-semibold mb-6! text-gray-700">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}