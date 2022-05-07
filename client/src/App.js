import './App.css';
import JournalPage from './components/pages/JournalPage';
import { Routes, Route } from 'react-router-dom';
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
      <Route path="/update/:id" element={<CreatePage />} />
    </Routes>
    </>
  );
}

export default App;
