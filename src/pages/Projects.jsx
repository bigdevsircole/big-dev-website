import '../styles/Projects.css';

export const Projects = () => {
    return (
      <div className="portfolio-container">
            <div className="portfolio-card1">
              <a href="https://project-x-plum-omega.vercel.app/" rel="noreferrer" target='_blank'>
              <h3>Project X</h3>
              <p>A demo website that was built on HTML, CSS and Javascript.</p>
              </a>
            </div>
            <div className="portfolio-card2">
            <a href="https://guess-the-number-game-neon.vercel.app/" rel="noreferrer" target='_blank'>
              <h3>Guess Game</h3>
              <p>A guess game where you have the chance to guess the correct number.</p>
              </a>
            </div>
            <div className="portfolio-card3">
            <a href="https://perfume-card-psi.vercel.app/" rel="noreferrer" target='_blank'>
              <h3>Perfume Card</h3>
              <p>A one page website displaying a perfume products.</p>
              </a>
            </div>
            <div className="portfolio-card4">
            <a href="https://sites.google.com/view/calebyinusa/home" rel="noreferrer" target='_blank'>
              <h3>Sircole Site</h3>
              <p>This was the first static website for myself before I got into coding career.</p>
              </a>
            </div>
            <div className="portfolio-card5">
            <a href="https://myfirst-react-work.vercel.app/" rel="noreferrer" target='_blank'>
              <h3>First React Project</h3>
              <p>This was me trying out react for a demo e-commerce website.</p>
              </a>
            </div>
            <div className="portfolio-card6">
            <a href="https://two-passion-one-purpose.vercel.app/" rel="noreferrer" target='_blank'>
              <h3>Project TPOP</h3>
              <p>Two Passion, One Purpose. This project is the bedrock of my ability to build a more beautiful and better projects as I continue my software development journey.</p>
              </a>
            </div>
      </div>
    );
};

export default Projects;
