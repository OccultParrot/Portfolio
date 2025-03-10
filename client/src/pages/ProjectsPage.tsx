import ProjectCard from '../components/elements/ProjectCard.tsx';
import {IProjectCardProps} from '../types.ts';

/**
 * Each project has the following info:
 *
 * title: string - The title of the project
 * description: string - A short description of the project
 * image: string - A link to the image to display (MIGHT CHANGE)
 * isFeatured: bool | null - Optional choice to add it to the featured projects
 * links: IProjectLink - A array of links concerning the project. THE FIRST LINK IS WHAT THE CARD WILL REDIRECT TO
 */
const projects: IProjectCardProps[] = [
  {
    title: 'Friends Without Benefits',
    description: 'A fun object recognition scavenger hunt, played solo or with a friend!',
    image: 'https://ucarecdn.com/b5bd864b-904b-401d-b1e7-4ab87c5ec3a4/Screenshot20250302172615.png',
    links: [
      {
        displayName: "Hosted Website",
        href: "https://friends-without-benefits.onrender.com/",
      },
      {
        displayName: "GitHub Repository",
        href: "https://github.com/savevsgames/friends-without-benefits"
      }
    ]
  },
  {
    title: 'Title',
    description: 'Blah blah blah blah',
    image: 'https://www.metroparks.net/wp-content/uploads/2017/06/1080p_HBK_autumn-morning_GI.jpg',
    isFeatured: true,
    links: [
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      },
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      },
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      },
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      }
    ]
  },
  {
    title: 'Title',
    description: 'Blah blah blah blah',
    image: '',
    // isFeatured: true,
    links: [
      {
        displayName: 'Google',
        href: 'https://www.google.com/'
      }
    ]
  }
];

export default function ProjectsPage() {
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