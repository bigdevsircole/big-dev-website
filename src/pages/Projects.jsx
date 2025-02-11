import '../styles/Projects.css';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import four from '../assets/images/four.png';
import five from '../assets/images/five.png';
import six from '../assets/images/six.png';
import seven from '../assets/images/seven.png';
import eight from '../assets/images/eight.png';
import nine from '../assets/images/nine.png';

const projects = [
  { id: 1, name: 'Project One', description: 'Description for project one', image: one },
  { id: 2, name: 'Project Two', description: 'Description for project two', image: two },
  { id: 3, name: 'Project Three', description: 'Description for project three', image: three },
  { id: 4, name: 'Project Four', description: 'Description for project four', image: four },
  { id: 5, name: 'Project Five', description: 'Description for project five', image: five },
  { id: 6, name: 'Project Six', description: 'Description for project six', image: six },
  { id: 7, name: 'Project Seven', description: 'Description for project seven', image: seven },
  { id: 8, name: 'Project Eight', description: 'Description for project eight', image: eight },
  { id: 9, name: 'Project Nine', description: 'Description for project nine', image: nine },
];

export const Projects = () => {
  return (
    <div className="project-card">
      {projects.map(project => (
        <div key={project.id} className="card">
          <div className="card-thumbnail">
            <img src={project.image} alt={`Image of ${project.name}`} />
          </div>
          <div className="card-content">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <a rel='noopener noreferrer' href="#" target="_blank" className='projectLink'>
                View Project
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
