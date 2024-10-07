function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
      {/* Placeholder image for about me */}
      <img 
        src="https://picsum.photos/300" 
        alt="About Me" 
        className="mx-auto rounded-lg shadow-md mb-8"
      />
      <p className="text-gray-600 text-lg leading-relaxed text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vel
        aliquam blanditiis cum error velit nam excepturi doloribus! Vitae
        nostrum, deserunt sint mollitia harum quisquam doloribus enim nulla
        fugiat qui!
      </p>
    </section>
  );
}

export default AboutPage;
