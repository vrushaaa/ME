function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A full-stack personal website with an AI-powered resume assistant built using React, Node.js, and OpenAI API.",
    },
    {
      title: "Task Manager App",
      description: "A simple task management application developed with React and local storage for task persistence.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;