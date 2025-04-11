// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Topbar from './components/Topbar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen">
        {/* Navbar Component */}
        <Topbar />

        {/* Page Content */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;