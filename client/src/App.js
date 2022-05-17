import './App.css';
import JournalPage from './components/pages/JournalPage';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './components/pages/CreatePage';
import EditPage from './components/pages/EditPage';
import RegisterPage from './components/pages/RegisterPage';
import LogInPage from './components/pages/LogInPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route exact path="/" element={<JournalPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/update/:id" element={<EditPage />} />
    </Routes>
  );
}

export default App;
