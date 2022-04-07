import { Container, Card } from 'react-bootstrap';
import classes from './NotACommunist.less';
function NotACommunist(props) {
  return (
    <Container fluid className='d-flex justify-content-center card-con'>
      <Card style={{ width: '50rem' }} className='m-auto card-self'>
        <Card.Header>
          <div className='d-flex justify-content-center card-text-head'>
            <h1>Not a Communist?</h1>
          </div>
        </Card.Header>
        <Card.Body>
          <div className='d-flex justify-content-start card-text-body'>
            <p>
              Watch this!
              <br />
              It won't change your mind, but it's a good vid!
            </p>
          </div>
          <div className='d-flex justify-content-center ratio ratio-16x9'>
            <iframe
              width='auto'
              height='auto'
              src='https://www.youtube.com/embed/hactcmhVS1w'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NotACommunist;
