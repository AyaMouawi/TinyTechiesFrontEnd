import React, { useState } from 'react';
import '../css/Login.css';
import NavBar from './NavBar';
import {  Navigate } from 'react-router-dom'; 
import axios from "axios";



function Login() {
  const [email, setEmail] = useState(''); 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userRole, setUserRole] = useState(null);
  const [messageTimeout, setMessageTimeout] = useState(null);
  
  const showMessage = (message) => {
    setMessage(message);
    if (messageTimeout) {
      clearTimeout(messageTimeout); 
    }
    setMessageTimeout(
      setTimeout(() => {
        setMessage(''); 
      }, 5000)
    );
  };
  const handleSignUpClick = () => {
    const LoginContainer = document.getElementById("LoginContainer");
    LoginContainer.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const LoginContainer = document.getElementById("LoginContainer");
    LoginContainer.classList.remove("right-panel-active");
  };

  const handleLogin = async () => {
  
    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserEmail: email, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
       
        showMessage(data.message);
        localStorage.setItem('userId', data.userId);
        setUserRole(data.role);

      } else {
      
        showMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/user/addStudent', {
        UserFullName: name,
        UserEmail: email,
        UserAge: age,
        Password: password,
      });
  
      if (response.status === 201) {
        showMessage('Data added successfully'); 
        setUserRole('Student');
      } else {
        showMessage('Unable to add new data');
      }
    } catch (error) {
      console.error('Error during Sign Up:', error);
    }
  };

  return (
    <div className="Login">
      <NavBar />
      <div className="LoginContainer" id="LoginContainer">
        <div className="form-container sign-in-container">
          <form className="logInForm" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <h1 className="h1login">Sign in</h1>
            <input
              className='inputlogin'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='inputlogin'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{message}</p>
            <button className='Sign' type="submit">Sign In</button>
          </form>
        </div>
        <div className="form-container sign-up-container">
        <form className="logInForm" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
            <h1 className="h1login">Create Account</h1>
            <input
              className='inputlogin'
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='inputlogin'
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              className='inputlogin'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='inputlogin'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <p>{message}</p>
            <button className='Sign' type="submit">Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='h1login'>Welcome Back!</h1>
              <p className='plogin'>
                To stay connected with us, please login with your personal info
              </p>
              <button className="ghost Sign" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='h1login'>Hello, Friend!</h1>
              <p className='plogin'>Enter your info and start your coding journey!</p>
              <button className="ghost Sign" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {userRole === 'Student' && <Navigate to="/" replace={true} />}
      {userRole === 'Trainer' && <Navigate to="/TrainerDashboard" replace={true} />}
      {userRole === 'Admin' && <Navigate to="/AdminDashboard" replace={true} />}
    </div>
  );
}

export default Login;
