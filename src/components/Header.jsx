import { useEffect } from 'react';

function Header() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <header className="bg-blue-600 text-white py-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#resume-assistant" className="hover:underline">Resume Assistant</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;