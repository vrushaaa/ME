import './index.css';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <section id="about" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold text-blue-600">About Section</h2>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-3xl font-bold text-blue-600">Projects Section</h2>
        </section>
        <section id="resume-assistant" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold text-blue-600">Resume Assistant Section</h2>
        </section>
      </main>
    </div>
  );
}

export default App;