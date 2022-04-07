import './ProjectsPage.less';
import { Col, Container, Row } from 'react-bootstrap';
import Project from '../components/Project';
import UseDocumentTitle from '../components/UseDocumentTitle';
function ProjectsPage(props) {
  UseDocumentTitle('Projects - Eli Richardson');
  const projects = [
    {
      title: 'Strawpoll.js',
      imageUrl: '/img/Strawpolljs-logos.jpeg',
      desc: (
        <p>
          A simple NPM package to interact with{' '}
          <a href='https://strawpoll.com' target='_blank'>
            strawpoll.com
          </a>
        </p>
      ),
      link: 'https://www.npmjs.com/package/strawpoll.js'
    },
    {
      title: 'PassJS',
      imageUrl: '/img/PassJS-logos.jpeg',
      desc: 'An NPM package to generate passwords.\n\nSupports phrases and random character generation.',
      link: 'https://www.npmjs.com/package/@eli.richardson/pass-js'
    }
  ];
  return (
    <section id='projects'>
      <Container>
        <div className='heading'>
          <h2 className='text-center'>Projects</h2>
          <p className='text-center'>Yeah... there isn't much here.</p>
        </div>
        <Row className='justify-content-center ms-auto me-auto p-auto'>
          <Col xs={6} lg={4}>
            <Project project={projects[0]} />
          </Col>
          <Col xs={6} lg={4}>
            <Project project={projects[1]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsPage;
