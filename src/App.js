import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
