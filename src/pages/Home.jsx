import { Link } from 'react-router-dom';
import profilePic from '../assets/images/caleb-yinusa-headshot.png';
import myresume from '../assets/calebcv.pdf';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import '../styles/Home.css';

export const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jqqfn9q', 'template_pjyxg1p', form.current, 'y-fZwQR7f20KakfWJ')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Thank you for reaching out!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">A Developer and More</h1>
          <p className="hero-description">
            With over 10 years of immersive experience in the tech realm, I've journeyed from humble
            beginnings, fueled by a relentless passion for learning and an unwavering belief in the
            mantra "Impossible is Nonsense." Every step of the way, I've thrived on challenges,
            embracing them as opportunities to innovate and create.
            <br />
            <br />
            As a Full Stack Developer, I design and develop seamless solutions tailored to suit the
            business goals of clients and also exceed their expectations. I've honed my expertise in
            crafting seamless digital experiences from frontend to backend using JavaScript,
            React.JS, Next.JS, Node.JS, Git & GitHub, Tailwind CSS, Bootstrap, Jquery, EmailJS, CSS,
            HTML, Photoshop, CorelDraw, WordPress, Figma, Canva, and Generative AI.
            <br />
            <br />
            My proficiency extends beyond development, encompassing the realms of Design, but my
            journey doesn't stop there. I'm also a Cyber Warrior, dedicated to safeguarding digital
            landscapes from emerging threats. I always put security into consideration when working
            on projects.
            <br />
            <br />
            My career is punctuated by collaborations with esteemed brands such as Institute of
            Industrial Development, Bright Mind Academy, RLABS in Nigeria. I've lent my expertise to
            transformative projects across diverse sectors leaving an unforgettable mark on every
            endeavour.
          </p>
          <div className="hero-buttons">
            <Link to="/Projects" className="hero-cta view-work">
              View My Work
            </Link>
            <a
              rel="noopener noreferrer"
              href={myresume}
              target="_blank"
              className="hero-cta hire-me"
            >
              Download Resume
            </a>
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
          <div className="portfolio-card portfolio-card1">
            <a href="https://project-x-plum-omega.vercel.app/" rel="noreferrer" target="_blank">
              <h3>Project X</h3>
              <p>A demo website that was built on HTML, CSS and Javascript.</p>
            </a>
          </div>
          <div className="portfolio-card portfolio-card2">
            <a href="https://guess-the-number-game-neon.vercel.app/" rel="noreferrer" target="_blank">
              <h3>Guess Game</h3>
              <p>A guess game where you have the chance to guess the correct number.</p>
            </a>
          </div>
          <div className="portfolio-card portfolio-card3">
            <a href="https://perfume-card-psi.vercel.app/" rel="noreferrer" target="_blank">
              <h3>Perfume Card</h3>
              <p>A one page website displaying a perfume products.</p>
            </a>
          </div>
          <div className="portfolio-card portfolio-card4">
            <a href="https://sites.google.com/view/calebyinusa/home" rel="noreferrer" target="_blank">
              <h3>Sircole Site</h3>
              <p>This was the first static website for myself before I got into coding career.</p>
            </a>
          </div>
          <div className="portfolio-card portfolio-card5">
            <a href="https://myfirst-react-work.vercel.app/" rel="noreferrer" target="_blank">
              <h3>First React Project</h3>
              <p>This was me trying out react for a demo e-commerce website.</p>
            </a>
          </div>
          <div className="portfolio-card portfolio-card6">
            <a href="https://two-passion-one-purpose.vercel.app/" rel="noreferrer" target="_blank">
              <h3>Project TPOP</h3>
              <p>
                Two Passion, One Purpose. This project is the bedrock of my ability to build a more
                beautiful and better projects as I continue my software development journey.
              </p>
            </a>
          </div>
        </div>
        <div className="view-all">
          <Link to="/Projects" className="view-all-link">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="reachout">
        <form ref={form} onSubmit={sendEmail}>
          <p>Feel free to reach out for enquiry, collaboration or just a friendly hello!</p>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;