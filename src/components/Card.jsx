import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div
      className={`
        block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1
        ${project.isFeatured ? 'bg-white' : 'bg-gray-50'}
      `}
    >
      <div className={`relative ${project.isFeatured ? 'h-80' : 'h-60'}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        {project.isFeatured && (
          <span className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3
          className={`font-bold mb-4 text-gray-800 ${
            project.isFeatured ? 'text-2xl' : 'text-xl'
          }`}
        >
          {project.name}
        </h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        <div className="flex flex-col items-center space-y-4">
          <Link
            to={project.githubLink}
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Github Repository
          </Link>

          {project.deployedLink && (
            <Link
              to={project.deployedLink}
              target="_blank"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Deployed Link
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
