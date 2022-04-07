import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { NavBarContextProvider } from './components/layout/NavBarContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <NavBarContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NavBarContextProvider>
);
