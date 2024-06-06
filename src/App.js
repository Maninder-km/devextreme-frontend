import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import DevExtremeForm from './DevExtremeForm';
import DevExtremeTable from './DevExtremeTable';

function Navigation() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return null;
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/form">DevExtreme Form</Link>
        </li>
        <li>
          <Link to="/table">DevExtreme Table</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<h4>Welcome! Please select a page.</h4>} />
          <Route path="/form" element={<DevExtremeForm />} />
          <Route path="/form/:id" element={<DevExtremeForm />} />
          <Route path="/table" element={<DevExtremeTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

