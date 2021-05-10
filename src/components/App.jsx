import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <h2 class="react-reveal section-title" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 300ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-994719943610863-2;">Skills</h2>
      <div class="main">
        <div class="skill">
          <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" />
          <h4>Javascript</h4>
          <p>Experience:</p>
          <p>6 Months +</p>
        </div>
      </div>
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
