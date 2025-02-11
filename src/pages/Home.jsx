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
              Versatile Full Stack Developer who combines technical expertise in design and digital marketing skills to deliver solutions that drive user engagement and business growth.
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
            <div className="portfolio-card">
              <h3>E-Commerce Platform</h3>
              <p>A fully functional e-commerce website built with MERN stack.</p>
            </div>
            <div className="portfolio-card">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio showcasing my skills and projects.</p>
            </div>
            <div className="portfolio-card">
              <h3>Task Management App</h3>
              <p>A task management tool built with React and Firebase.</p>
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
