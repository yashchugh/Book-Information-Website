import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = ({ handleLogin }) => {
  const [Uname, setUname] = useState('')
  const [Pass, setPass] = useState('')
  const [showError, setShowError] = useState(false)
  const Navigate = useNavigate()
  window.history.pushState({}, '', '/');
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Uname') {
      setUname(value);
    } else if (name === 'Pass') {
      setPass(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Uname === 'yash' && Pass === 'yashchugh') {
      handleLogin();
      // Navigate('/dashboard'); // Navigate to the dashboard page
    } else {
      setShowError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${process.env.PUBLIC_URL + "/1.jpeg"})`,
          padding: '280px',
          backgroundPosition: 'Center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 style={{ color: 'white' }}>Welcome to the login page</h1>
        <div>
          <label style={{ color: 'white', fontWeight: 'bold' }}>Username</label>
        </div>
        <input
          type="text"
          name="Uname"
          value={Uname}
          onChange={handleInputChange}
          size="20"
          style={{
            padding: '5px',
            width: '200px',
            margin: '10px',
            borderRadius: '10px',
            border: '2px solid black',
          }}
        />
        <br />
        <div>
          <label style={{ color: 'white', fontWeight: 'bold' }}>Password</label>
        </div>
        <input
          type="password"
          name="Pass"
          value={Pass}
          onChange={handleInputChange}
          size="20"
          style={{
            padding: '5px',
            width: '200px',
            margin: '10px',
            borderRadius: '10px',
            border: '2px solid black',
          }}
        />
        <br />
        <button
        onClick={() => Navigate('Dashboard', {replace:true})}
          type="submit"
          style={{
            backgroundColor: '#9a25e6',
            fontWeight: 'bold',
            color: '#fff',
            borderRadius: '10px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '22px',
            position: 'relative',
            overflow: 'hidden',
            zIndex: '1',
            margin: '10px',
            width: '15%',
            padding: '8px',
            border: '2px solid black',
          }}
        >
          Login
        </button>

        {/* Popup to show error message */}
        {showError && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-45%, -45%)',
              backgroundColor: 'rgba(99,44,128,1)',
              color: 'white',
              padding: '100px',
              borderRadius: '25px',
              border: '2px solid #ffffff',
              textAlign: 'center',
              fontSize: '16px',
              display: 'inline-block',
            }}
          >
            <p>Incorrect username or password.</p>
            <button
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '10px',
              }}
              onClick={() => setShowError(false)}
            >
              OK
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Login;
