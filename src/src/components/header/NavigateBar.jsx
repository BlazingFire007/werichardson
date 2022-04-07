import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavBarContext from '../layout/NavBarContext';

import classes from './NavigateBar.less';

function NavigateBar(props) {
  const navCtx = useContext(NavBarContext);
  return (
    <header>
      <Navbar collapseOnSelect variant='dark' fixed='top' expand='md' className='navigatebar text'>
        <Container>
          <img src='/SVG/asset2.svg' className='brand-logo img-fluid'></img>
          <Navbar.Brand href='/' className='brand-text'>
            Eli Richardson
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              className='ms-auto text'
              activeKey={navCtx.aKey}
              onSelect={navCtx.determineActiveKey}>
              <LinkContainer to='/'>
                <Nav.Link className='nav-item' eventKey='/'>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/projects'>
                <Nav.Link className='nav-item' eventKey='/projects'>
                  Projects
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link className='nav-item' eventKey='/contact'>
                  Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigateBar;
