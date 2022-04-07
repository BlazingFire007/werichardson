import { useState, useEffect } from 'react';
import classes from './Intro.less';

function FlagText(props) {
  const colors = [
    'rgb(255, 255, 255)',
    'rgb(255, 127, 0)',
    'rgb(148, 0, 211)',
    'rgb(75, 0, 130)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 0)',
    'rgb(255, 255, 0)'
  ];
  const [color, setColor] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((v) => (v === 6 ? 0 : v + 1));
    }, 250);
  }, []);

  return (
    <h1 className='text-center flag-text' id='communism' style={{ color: colors[color] }}>
      COMMUNISM WILL WIN!
    </h1>
  );
}

export default FlagText;
