import './index.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <About />
        <Projects />
        <WorkExperience />
        <section id="resume-assistant" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold text-blue-600">Resume Assistant Section</h2>
        </section>
      </main>
    </div>
  );
}

export default App;