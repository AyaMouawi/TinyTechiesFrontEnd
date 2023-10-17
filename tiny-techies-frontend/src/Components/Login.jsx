
import React from 'react'
import '../css/Login.css';

function Login() {
    const handleSignUpClick = () => {
      const container = document.getElementById("container");
      container.classList.add("right-panel-active");
    };
  
    const handleSignInClick = () => {
      const container = document.getElementById("container");
      container.classList.remove("right-panel-active");
    };
  
    return (
      <div className="Login">
       
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Age" />

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <br />
              <button >Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button >Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To stay connected with us, please login with your personal info
                </p>
                <button className="ghost" id="signIn" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your info and start your coding journey!</p>
                <button className="ghost" id="signUp" onClick={handleSignUpClick}>
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
