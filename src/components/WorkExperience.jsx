function WorkExperience() {
  const experiences = [
    {
      company: "Siemens Technology & Services Pvt. Ltd",
      location: "Bangalore,India",
      role: "Full-Stack Developer",
      duration: "July 2024 - August 2024",
      description: "Developed and maintained web applications using React and Node.js, integrated AI features with external APIs.",
    },
  ];

  return (
    <section id="work-experience" className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">{exp.role} @ {exp.company}</h3>
              <p className="text-gray-500 italic">{exp.location}</p>
              <p className="text-gray-500 italic">{exp.duration}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;