import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AptitudeTest from './pages/AptitudeTest';
import JobInfo from './pages/JobInfo';
import './App.css';
import './AptitudeTest.css'; 
import './JobInfo.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/aptitude-test">適職診断</Link></li>
            <li><Link to="/job-info">IT職種を知る</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aptitude-test" element={<AptitudeTest />} />
          <Route path="/job-info" element={<JobInfo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;