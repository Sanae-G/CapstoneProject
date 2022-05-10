import './App.css';
import JournalPage from './components/pages/JournalPage';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './components/pages/CreatePage';
import EditPage from './components/pages/EditPage';

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
      <Route path="/update/:id" element={<EditPage />} />
    </Routes>
    </>
  );
}

export default App;
