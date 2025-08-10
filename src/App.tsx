import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AptitudeTest from './pages/AptitudeTest';
import './App.css'; // スタイルシートをインポート

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/aptitude-test">適職診断</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aptitude-test" element={<AptitudeTest />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;