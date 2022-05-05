import './App.css';
import JournalPage from './components/pages/JournalPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import CreatePage from './components/pages/CreatePage';

function App() {

  return (
    <>
    <Routes>
      <Route
        exact
        path="/"
        element={<JournalPage />}
      />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
    </>
  );
}

export default App;
