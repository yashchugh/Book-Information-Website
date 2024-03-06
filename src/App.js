import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Login from './Components/Login';
import DashboardPage from './Components/DashboardPage';
import Gallery from './Components/Gallery';
import Data from './Components/Data';
import Resources from './Components/Resources';
import './App.css';
// import ProtectedRoute from './Components/ProtectedRoute';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    setLoggedIn(false);
    // Reset URL to the homepage after logout
    // window.location.href = '/';
    localStorage.clear();
    sessionStorage.clear();
    // const newUrl = '/';
    // window.history.replaceState(null, null,newUrl);
    
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleCloseToggle = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        {loggedIn && !isMenuOpen && (
          <div className="menu-icon" onClick={handleMenuToggle}>
            <GiHamburgerMenu
              size={24}
              style={{ position: 'fixed', top: '20px', left: '20px', zIndex: '999', color: 'white' }}
            />
          </div>
        )}
        {loggedIn && (
          <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu-icon" onClick={handleCloseToggle}>
              <GrClose
                size={24}
                style={{ position: 'relative', float: 'right', marginTop: '20px', left: '-15px' }}
              />
              <button
                style={{
                  backgroundColor: '#9a25e6',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRadius: '10px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '22px',
                  position: 'absolute',
                  left: '10px',
                  bottom: '30px',
                  border: '2px solid black',
                }}
                onClick={handleLogout}
                className="logout-button"
              >
                Logout
              </button>
            </div>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/data">Data</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </nav>
        )}
         <div className="content">
          {!loggedIn ? (
            <Login handleLogin={handleLogin}/>
          ) : (
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/data" element={<Data />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
