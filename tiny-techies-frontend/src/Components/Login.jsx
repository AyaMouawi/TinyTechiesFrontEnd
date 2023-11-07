import React, { useState } from 'react';
import '../css/Login.css';
import NavBar from './NavBar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState('');

  const checkPasswordStrength = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSmallLetter = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=]/.test(password);

    if (hasCapitalLetter && hasSmallLetter && hasNumber && hasSymbol) {
      setPasswordStrengthMessage('Your Password Is Strong');
    } else {
      setPasswordStrengthMessage(
        'Your Password should Contain small and capital letters, numbers, and symbols'
      );
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword); 
    checkPasswordStrength(newPassword); 
  };

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 5000);
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
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
        localStorage.setItem('userRole', data.role);

        if (data.role === 'Trainer') {
          navigate('/TrainerDashboard');
        } else if (data.role === 'Admin') {
          navigate('/AdminDashboard');
        } else {
          navigate('/');
        }
      } else {
        showMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSignUp = async () => {
    if (passwordStrengthMessage.includes('Strong')) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/addStudent`, {
          UserFullName: name,
          UserEmail: email,
          UserAge: age,
          Password: password,
        });
  
        if (response.status === 201) {
          setPasswordStrengthMessage(''); 
          showMessage('Please log in now .');
          setTimeout(() => {
            handleSignInClick();
          }, 1000);
        } else {
          showMessage('Unable to add new data');
        }
      } catch (error) {
        console.error('Error during Sign Up:', error);
      }
    } else {
      showMessage('Your Password is not strong. Please follow the criteria.');
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
              type={showPassword ? 'text' : 'password'} 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Pass
            </label>
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
              type={showPassword ? 'text' : 'password'} 
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
             <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Pass
            </label>
            <br />
            <p>{message}</p>
            <p style={{ color: passwordStrengthMessage.includes('Strong') ? 'green' : 'red' }} className='PassMessage'>
              {passwordStrengthMessage}
            </p>
            <button className='Sign' type="submit">Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='h1login'>Hello, Friend!</h1>
              <p className='plogin'>
              Enter your info and start your coding journey!
              </p>
              <button className="ghost Sign" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='h1login'>Welcome Back!</h1>
              <p className='plogin'>To stay connected with us, please login with your personal info</p>
              <button className="ghost Sign" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
