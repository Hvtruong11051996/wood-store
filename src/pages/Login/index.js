import React from 'react';
import './login.css';

function Login(props) {
  return (
    <div>
      <div>
        <img className="wave" src="img/wave.png" />
        <div className="container login-wood">
          <div className="img">
          </div>
          <div className="login-content">
            <form action="index.html">
              <img src="img/avatar.svg" />
              <h2 className="title">Welcome</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input type="text" className="input" placeholder="UserName ..." />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input type="password" className="input" placeholder="PassWord ..." />
                </div>
              </div>
              <div className="logout-wood">
                <div className="back-login">
                  <div className="i">
                    <i className="fas fa-long-arrow-alt-left"></i>
                  </div>
                  <a style={{ marginLeft: 5 }} href="#">Register</a>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" className="btn" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;