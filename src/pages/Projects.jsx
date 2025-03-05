import '../styles/Projects.css';

import flyer1 from '../assets/images/caleb-portfolio-12.png';
import flyer2 from '../assets/images/caleb-portfolio-16.png';
import flyer3 from '../assets/images/caleb-portfolio-18.png';
import flyer4 from '../assets/images/caleb-portfolio-21.png';
import flyer5 from '../assets/images/caleb-portfolio-22.png';
import flyer6 from '../assets/images/caleb-portfolio-25.png';
import flyer7 from '../assets/images/delicious-food-flyer3.png';
import flyer8 from '../assets/images/gift-card-flyer2.png';
import flyer9 from '../assets/images/happy-birthday-flyer4.png';
import flyer10 from '../assets/images/Refelective-Jacket-caleb-yinusa.png';
import flyer11 from '../assets/images/safety-boot-for-engineers-caleb-yinusa.jpg';
import flyer12 from '../assets/images/wine-flyer-flyer1.png';

export const Projects = () => {
  const flyers = [
    flyer1,
    flyer2,
    flyer3,
    flyer4,
    flyer5,
    flyer6,
    flyer7,
    flyer8,
    flyer9,
    flyer10,
    flyer11,
    flyer12,
  ];

  return (
    <div>
      <div className="portfolio-container">
        <div className="portfolio-card1">
          <a href="https://project-x-plum-omega.vercel.app/" rel="noreferrer" target="_blank">
            <h3>Project X</h3>
            <p>A demo website that was built on HTML, CSS, and JavaScript.</p>
          </a>
        </div>
        <div className="portfolio-card2">
          <a href="https://guess-the-number-game-neon.vercel.app/" rel="noreferrer" target="_blank">
            <h3>Guess Game</h3>
            <p>A guess game where you have the chance to guess the correct number.</p>
          </a>
        </div>
        <div className="portfolio-card3">
          <a href="https://perfume-card-psi.vercel.app/" rel="noreferrer" target="_blank">
            <h3>Perfume Card</h3>
            <p>A one-page website displaying perfume products.</p>
          </a>
        </div>
        <div className="portfolio-card4">
          <a href="https://sites.google.com/view/calebyinusa/home" rel="noreferrer" target="_blank">
            <h3>Sircole Site</h3>
            <p>This was the first static website for myself before I got into the coding career.</p>
          </a>
        </div>
        <div className="portfolio-card5">
          <a href="https://myfirst-react-work.vercel.app/" rel="noreferrer" target="_blank">
            <h3>First React Project</h3>
            <p>This was me trying out React for a demo e-commerce website.</p>
          </a>
        </div>
        <div className="portfolio-card6">
          <a href="https://two-passion-one-purpose.vercel.app/" rel="noreferrer" target="_blank">
            <h3>Project TPOP</h3>
            <p>Two Passion, One Purpose. This project is the bedrock of my ability to build more beautiful and better projects as I continue my software development journey.</p>
          </a>
        </div>
      </div>
      <div className="flyers-container">
        <h2>Visual Designs</h2>
        <div className="flyers-grid">
          {flyers.map((flyer, index) => (
            <div key={index} className="flyer">
              <img
                src={flyer}
                alt={`Flyer ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
