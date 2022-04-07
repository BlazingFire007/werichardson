import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBarContext from '../layout/NavBarContext';
import classes from './Footer.less';

function Footer(props) {
  const navCtx = useContext(NavBarContext);
  return (
    <footer className='page-footer'>
      <Container>
        <div className='text-center'>
          <Link to='/' className='footer-text' onClick={() => navCtx.setActiveKey('/')}>
            Home
          </Link>
          <Link
            to='/projects'
            className='footer-text'
            onClick={() => navCtx.setActiveKey('/projects')}>
            Projects
          </Link>
          <Link
            to='/contact'
            className='footer-text'
            onClick={() => navCtx.setActiveKey('/contact')}>
            Contact
          </Link>
        </div>
        <div className='social-icons'>
          <a href='https://instagram.com/eli.richardson' target='_blank'>
            <i className='fa-brands fa-instagram fa-xl' style={{ color: 'var(--bs-pink)' }}></i>
          </a>
          <a href='https://github.com/BlazingFire007' target='_blank'>
            <i className='fa-brands fa-github fa-xl' style={{ color: 'var(--bs-dark)' }}></i>
          </a>
          <a href='https://discord.com/users/190313064367652864' target='_blank'>
            <i className='fa-brands fa-discord fa-xl' style={{ color: '#6091ef' }}></i>
          </a>
          <a href='https://www.npmjs.com/~eli.richardson' target='_blank'>
            <i className='fa-brands fa-npm fa-xl' style={{ color: 'var(--bs-dark)' }}></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
