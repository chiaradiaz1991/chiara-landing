import React from 'react';
import logo from './image.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faAt } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons/";
import resume from './images/ChiaraDiazResume.png';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="about-me">
          <div className="main-description">
            Hello, I'm Chiara
        </div>
          <div className="description">
            Front end Developer | Illustrator | CopyWriter
        </div>
        </div>
        <div className="links">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/chiara-diaz"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="App-link"
            href="https://github.com/chiaradiaz1991"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="App-link"
            href="https://www.behance.net/chiaradiaz"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <div className="App-link">
            <a href={resume} download>
              <FontAwesomeIcon icon={faFemale} />
            </a>
          </div>
        </div>
        <div className="contact">
          Let's keep in touch chiara.diaz1991@gmail.com
        </div>
        <div className="footer">
          Website created and developed with 💖 by Chiara Diaz.
      </div>
      </div>
    </div>
  );
}

export default App;
