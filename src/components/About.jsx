function About() {
  return (
    <section id="about" className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/src/assets/profile-placeholder.jpg"
            alt="Profile Picture"
            className="w-48 h-48 object-cover rounded-full shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm Vrusha Naik, a passionate developer with a focus on full-stack web development and AI integration. I enjoy building dynamic applications and automating workflows to solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My skills include JavaScript, React, Node.js, and experience with APIs. I hold a B.E. degree in Computer Engineering with Honours in Artificial Intelligence & Machine Learning from Goa College of Engineering and have worked on projects that blend creativity with technology.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Skills</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>C</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;