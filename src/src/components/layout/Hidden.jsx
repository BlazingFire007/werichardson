import { AnimationOnScroll } from 'react-animation-on-scroll';

function Hidden(props) {
  return (
    <AnimationOnScroll
      animateIn='animate__slideInUp'
      duration={0.8}
      animateOnce={true}
      offset={200}>
      {props.children}
    </AnimationOnScroll>
  );
}

export default Hidden;
