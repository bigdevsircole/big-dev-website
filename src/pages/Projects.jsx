import React from 'react';
import '../styles/Projects.css';

// Import flyer images
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

const Projects = () => {
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Project X',
      description: 'A demo website that was built on HTML, CSS, and JavaScript.',
      link: 'https://project-x-plum-omega.vercel.app/',
      backgroundImage: '/project_x_icon.png',
    },
    {
      id: 2,
      title: 'Guess Game',
      description: 'A guess game where you have the chance to guess the correct number.',
      link: 'https://guess-the-number-game-neon.vercel.app/',
      backgroundImage: '/guess_game.png',
    },
    {
      id: 3,
      title: 'Perfume Card',
      description: 'A one-page website displaying perfume products.',
      link: 'https://perfume-card-psi.vercel.app/',
      backgroundImage: '/perfume_card_icon.jpg',
    },
    {
      id: 4,
      title: 'Sircole Site',
      description: 'This was the first static website for myself before I got into the coding career.',
      link: 'https://sites.google.com/view/calebyinusa/home',
      backgroundImage: '/sircole_site.png',
    },
    {
      id: 5,
      title: 'First React Project',
      description: 'This was me trying out React for a demo e-commerce website.',
      link: 'https://myfirst-react-work.vercel.app/',
      backgroundImage: '/first-react-work.jpg',
    },
    {
      id: 6,
      title: 'Project TPOP',
      description: 'Two Passion, One Purpose. This project is the bedrock of my ability to build more beautiful and better projects as I continue my software development journey.',
      link: 'https://two-passion-one-purpose.vercel.app/',
      backgroundImage: '/card-6.jpg',
    },
  ];

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
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-card"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <a href={item.link} rel="noreferrer" target="_blank">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="flyers-container">
        <h2>Visual Designs</h2>
        <div className="flyers-grid">
          {flyers.map((flyer, index) => (
            <div key={index} className="flyer">
              <img src={flyer} alt={`Flyer ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;