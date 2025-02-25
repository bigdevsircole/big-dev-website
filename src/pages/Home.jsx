import profilePic from '../assets/images/caleb-yinusa-headshot.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import myresume from '../assets/calebcv.pdf';

export const Home = () => {
    return (
      <div>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">A Developer and More</h1>
            <p className="hero-description">
            With over 10 years of immersive experience in the tech realm, I've journeyed from humble beginnings, fueled by a relentless passion for learning and an unwavering belief in the mantra "Impossible is Nonsense." Every step of the way, I've thrived on challenges, embracing them as opportunities to innovate and create.
            <br />
            <br />
            As a Full Stack Developer, I design and develop seamless solutions tailored to suit the business goals of clients and also exceed their expectations. I've honed my expertise in crafting seamless digital experiences from frontend to backend using JavaScript, Reacht.JS, Next.JS, Node.JS, Git & GitHub, Tailwind CSS, Bootstrap, Jquery, EmailJS, CSS, HTML, Photoshop, CorelDraw, WordPress, Figma, Canva, and Generative AI.
            <br />
            <br />
            My proficiency extends beyond development, encompassing the realms of Design, but my journey doesn't stop there. I'm also a Cyber Warrior, dedicated to safeguarding digital landscapes from emerging threats. I always put security into consideration when working on projects.
            <br />
            <br />
            My career is punctuated by collaborations with esteemed brands such as Institute of Industrial Development, Bright Mind Academy, RLABS in Nigeria. I've lent my expertise to transformative projects across diverse sectors leaving an unforgettable mark on every endeavour.
            </p>
            <div className="hero-buttons">
              <Link to="/Projects" className="hero-cta view-work">View My Work</Link>
              <a rel='noopener noreferrer' href={myresume} target='_blank' className="hero-cta hire-me">Download Resume</a>
            </div>
          </div>
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </section>

        <section className="expertise">
          <h2>Expertise</h2>
          <ul>
            <li>HTML | CSS | Tailwind CSS | JavaScript</li>
            <li>Node.JS | Next.JS | EmailJS | React.JS</li>
            <li>Bootstrap | Jquery</li>
            <li>Photoshop | CorelDraw | Figma | Canva | Generative AI</li>
          </ul>
        </section>

        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-list">
            <div className="portfolio-card1">
              <a href="https://project-x-plum-omega.vercel.app/" target='_blank'>
              <h3>Project X</h3>
              <p>A demo website that was built on HTML, CSS and Javascript.</p>
              </a>
            </div>
            <div className="portfolio-card2">
            <a href="https://guess-the-number-game-neon.vercel.app/" target='_blank'>
              <h3>Guess Game</h3>
              <p>A guess game where you have the chance to guess the correct number.</p>
              </a>
            </div>
            <div className="portfolio-card3">
            <a href="https://perfume-card-psi.vercel.app/" target='_blank'>
              <h3>Perfume Card</h3>
              <p>A one page website displaying a perfume products.</p>
              </a>
            </div>
            <div className="portfolio-card4">
            <a href="https://sircole-site.vercel.app/" target='_blank'>
              <h3>Sircole Site</h3>
              <p>The first static demo website for myself on week one into coding career.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="reachout">
          <h2>Reachout Form</h2>
          <p>Feel free to reachout for enquiry, collaboration or just a friendly hello!</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    );
};

export default Home;
