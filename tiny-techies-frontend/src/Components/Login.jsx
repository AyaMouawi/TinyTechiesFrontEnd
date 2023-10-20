
import React from 'react'
import '../css/Login.css';
import NavBar from './NavBar';

function Login() {
    const handleSignUpClick = () => {
      const LoginContainer = document.getElementById("LoginContainer");
      LoginContainer.classList.add("right-panel-active");
    };
  
    const handleSignInClick = () => {
      const LoginContainer = document.getElementById("LoginContainer");
      LoginContainer.classList.remove("right-panel-active");
    };
  
    return (
      <div className="Login">
       <NavBar />
        <div className="LoginContainer" id="LoginContainer">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1 className="h1login">Create Account</h1>
              < input className='inputlogin' type="text" placeholder="Name" />
              < input className='inputlogin' type="number" placeholder="Age" />

              < input className='inputlogin' type="email" placeholder="Email" />
              < input className='inputlogin' type="password" placeholder="Password" />
              <br />
              <button className='Sign' >Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1 className='h1login' >Sign in</h1>
              < input className='inputlogin' type="email" placeholder="Email" />
              < input className='inputlogin' type="password" placeholder="Password" />
              <button className='Sign'>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='h1login'>Welcome Back!</h1>
                <p className='plogin'>
                  To stay connected with us, please login with your personal info
                </p>
                <button  className="ghost Sign" id="signIn" onClick={handleSignInClick}>
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
      </div>
    );
  }
  
  export default Login
