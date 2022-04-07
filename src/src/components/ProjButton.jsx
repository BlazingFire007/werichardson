import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavBarContext from './layout/NavBarContext';

import classes from './Intro.less';

function ProjButton(props) {
  const navCtx = useContext(NavBarContext);
  const navigate = useNavigate();
  function clickHandler() {
    navigate('/projects');
    navCtx.determineActiveKey();
  }
  return (
    <Button
      size='lg'
      type='button'
      variant='outline-primary border rounded-0 shadow'
      className='btn-ani'
      onClick={clickHandler}>
      See My Projects
    </Button>
  );
}

export default ProjButton;
