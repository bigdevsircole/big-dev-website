import '../styles/Expertise.css'

const Expertise = () => {
  return (
    <section>
        <h2>Fullstack Development</h2>
        <div className="expert-card">
        <ul>
          <li>HTML | CSS | Tailwind CSS | JavaScript</li>
          <li>Node.JS | Next.JS | EmailJS | React.JS</li>
          <li>Bootstrap | Jquery</li>
        </ul>
        </div>

        <h2>Design</h2>
        <div className="expert-card">
        <ul>
        <li>Photoshop</li>
          <li>CorelDraw</li>
          <li>Figma</li>
          <li>Canva</li>
        </ul>
        </div>

        <h2>Digital Marketing</h2>
        <div className="expert-card">
        <ul>
        <li>Email Marketing</li>
          <li>Social Media Marketing</li>
          <li>Search Engine Optimization</li>
        </ul>
        </div>
    </section>
  );
}

export default Expertise;
