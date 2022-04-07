import { createContext, useState } from 'react';

const NavBarContext = createContext({
  aKey: window.location.pathname,
  determineActiveKey: () => {},
  setActiveKey: () => {}
});

export function NavBarContextProvider(props) {
  const [aKey, setActiveKey] = useState(window.location.pathname);
  function determineActiveKey() {
    return setActiveKey(window.location.pathname);
  }
  const context = {
    aKey: aKey,
    determineActiveKey: determineActiveKey,
    setActiveKey: setActiveKey
  };

  return <NavBarContext.Provider value={context}>{props.children}</NavBarContext.Provider>;
}

export default NavBarContext;
