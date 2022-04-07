import { Image } from 'react-bootstrap';
import './Project.less';

function Project(props) {
  const project = props.project;
  return (
    <div className='item'>
      <Image fluid src={project.imageUrl}></Image>
      <h2 className='text-center'>{project.title}</h2>
      {project.desc}
      <br />
      <p>
        Check it out:{' '}
        <a href={project.link} target='_blank'>
          here!
        </a>
      </p>
    </div>
  );
}

export default Project;
