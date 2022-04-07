import { Card, Container, Image, Row, Col } from 'react-bootstrap';
import FlagText from './FlagText';
import classes from './Intro.less';

function Flag(props) {
  return (
    <div className='shadow'>
      <Container fluid className='flag-holder'>
        <br />
        <br />
        <Container className='d-flex p-5 justify-content-center'>
          <div className='m-auto flag-over'>
            <FlagText />
          </div>
        </Container>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Flag;
