import ProjectCard from "../components/Card"

function PortfolioPage() {
  /**
   * Contents must follow the pattern:
   * image,
   * name,
   * description,
   * link,
   * isFeatured
   */
  const projectArray = [
    {
      name: "Read This",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://google.com",
      image: "https://picsum.photos/300",
      isFeatured: true,
    },
    {
      name: "Hoof Track",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://HoofTrack.com",
      image: "https://picsum.photos/300",
      isFeatured: true,
    },
    {
      name: "Read This",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://google.com",
      image: "https://picsum.photos/300",
      isFeatured: false,
    },
    {
      name: "Hoof Track",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://HoofTrack.com",
      image: "https://picsum.photos/300",
      isFeatured: false,
    },
    {
      name: "Read This",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://google.com",
      image: "https://picsum.photos/300",
      isFeatured: false,
    },
    {
      name: "Hoof Track",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://HoofTrack.com",
      image: "https://picsum.photos/300",
      isFeatured: false,
    },
    {
      name: "Read This",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://google.com",
      image: "https://picsum.photos/300",
      isFeatured: false,
    },
    {
      name: "Hoof Track",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique voluptates, illo magnam, dolore quae fuga optio adipisci facilis ut qui, ducimus impedit non! Nihil quas reiciendis enim atque inventore?",
      link: "https://HoofTrack.com",
      image: "https://picsum.photos/300",
      isFeatured: false,
    },
    // Add more projects as needed
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