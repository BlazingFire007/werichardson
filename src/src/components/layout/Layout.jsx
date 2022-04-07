import { useState } from 'react';

import Footer from '../footer/Footer';
import NavigateBar from '../header/NavigateBar';

function Layout(props) {
  return (
    <div>
      <NavigateBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
