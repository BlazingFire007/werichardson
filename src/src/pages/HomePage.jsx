import Container from 'react-bootstrap/Container';
import Flag from '../components/Flag';
import Intro from '../components/Intro';
import Hidden from '../components/layout/Hidden';
import NotACommunist from '../components/NotACommunist';
import UseDocumentTitle from '../components/UseDocumentTitle';
import classes from './HomePage.less';

function HomePage(props) {
  UseDocumentTitle('Home - Eli Richardson');
  return (
    <main className='home'>
      <Intro />
      <Hidden>
        <Flag />
        <NotACommunist />
      </Hidden>
    </main>
  );
}

export default HomePage;
