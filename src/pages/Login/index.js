import React from 'react';
import './styles.css';

function Login(props) {
  return (
    <div>
      <div>
        <img class="wave" src="img/wave.png" />
        <div class="container login-wood">
          <div class="img">
          </div>
          <div class="login-content">
            <form action="index.html">
              <img src="img/avatar.svg" />
              <h2 class="title">Welcome</h2>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" placeholder="UserName ..." />
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input type="password" class="input" placeholder="PassWord ..." />
                </div>
              </div>
              <div class="logout-wood">
                <div class="back-login">
                  <div class="i">
                    <i class="fas fa-long-arrow-alt-left"></i>
                  </div>
                  <a style={{ marginLeft: 5 }} href="#">Register</a>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" class="btn" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;