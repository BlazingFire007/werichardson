import { Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/layout/Layout';
import ContactMe from './pages/ContactMe';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
    </Layout>
  );
}

export default App;
