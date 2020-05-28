import React from 'react';
import './App.css';
import logo from './image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faAt } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons/";
import resume from './images/ChiaraDiazResume.png';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="about-me">
          <div className="main-description">
            <p>Hello, I'm Chiara.</p>
            </div>
        </div>
        <div className="description">
          Front end Developer | Illustrator | CopyWriter
        </div>
        <div className="second-description">
          <p className="text-second-description">
            I'm a front end developer from Argentina, based in Poland. I enjoy learning new things every day. I love making beautiful and functional websites and mobile applications! Also, in my free time, I'm a digital illustrator.
          </p>
          <p className="text-second-description">
            <a href="https://tarotimpulso.com" target="_blank">Tarot Impulso</a> is a personal project where I combine illustration and web development.
          </p>
          <p className="skills">
          Skills 👩🏻‍💻 HTML5, CSS3 (SASS/LESS), Bootstrap, Javascript, TypeScript, React js, JQuery, Node js, Express js, React Native, Git, Docker, Redux, NextJs, Adobe Illustrator, Adobe Photoshop & Procreate.
          </p>
        </div>
      </div>
      <div className="links">
        <a
          className="app-link"
          href="https://www.linkedin.com/in/chiara-diaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="app-link"
          href="https://github.com/chiaradiaz1991"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="app-link"
          href="https://www.behance.net/chiaradiaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <div className="app-link">
          <a className="app-link" href={resume} download>
            <FontAwesomeIcon icon={faFemale} />
          </a>
        </div>
      </div>
      <div className="contact">
        <p className="contact-text">Let's keep in touch! chiara.diaz1991@gmail.com</p>
        </div>
      <div className="footer">
        Website created and developed with 💖 by Chiara Diaz.
      </div>
    </div>
  );
}

export default App;


