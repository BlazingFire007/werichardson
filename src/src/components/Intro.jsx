import { Container, Image, Row, Col, Stack } from 'react-bootstrap';

import classes from './Intro.less';
import ProjButton from './ProjButton';

function Intro(props) {
  return (
    <section>
      <Container fluid className='d-flex justify-content-center'>
        <Stack gap={3}>
          <Image fluid roundedCircle src='/img/self.png' className='img ms-auto me-auto'></Image>
          <div className='ms-auto me-auto text-center intro-text'>
            <p>
              My name is Eli Richardson. I make stuff. Sometimes it's cool.
              <br /> Most of the time it isn't
            </p>
          </div>
          <div className='ms-auto me-auto'>
            <ProjButton />
          </div>
        </Stack>
      </Container>
    </section>
  );
}

export default Intro;
