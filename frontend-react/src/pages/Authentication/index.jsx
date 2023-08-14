import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.message === 'User signin successfully') {
        console.log('Token:', data.token);
        localStorage.setItem('token', data.token);
        handleRole(data.user_type);
      } else {
        if (data.errors) {
          setErrorMessages(data.errors); 
        } else {
          setErrorMessages({});
        }
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleRole = (role) => {
    if (role === 1) {
      navigate('/Admin');
    } else if (role === 2) {
      navigate('/Teacher');
    } else if (role === 3) {
      navigate('/Parent');
    } else {
      navigate('/Student');
    }
  };

  return (
    <div className='center-auth'>
      <div className='signin-form'>
        <h1>E-Learning</h1>

        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {errorMessages && (
          <div className='error-messages'>
            {Object.keys(errorMessages).map((field) =>
              errorMessages[field].map((message, index) => (
                <p key={index} className='error-message'>
                  {message}
                </p>
              ))
            )}
          </div>
        )}
        <div className='input-container '>
          <label>Email:</label>
          <input
            type='text'
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </div>
        <div className='input-container '>
          <label>Password:</label>
          <input
            type='password'
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <div className='button-container'>
          <button className='submit' onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

