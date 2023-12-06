import { projects } from '../../utils/constants';
import './projects.css';

const Projects = () => {
  return (
      <ul className='project'>
        {projects.map((project, index) => (
            <li key={index} className="project__item">
              <a className="project__link" href={project.url} target='_blank' rel="noreferrer">
                <h2 className="project__title">{project.name}</h2>
                <p>↗</p>
              </a>
            </li>
        ))}
      </ul>
  );
};

export default Projects;


