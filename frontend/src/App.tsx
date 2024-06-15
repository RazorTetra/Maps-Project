import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import MainMenu from './pages/MainMenu';  // Pastikan ini sudah diimpor

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainMenu />} />  // Set MainMenu sebagai halaman root
      </Routes>
    </Router>
  );
}

export default App;