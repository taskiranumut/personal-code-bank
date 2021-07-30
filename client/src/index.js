import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/main.css';
import App from './scripts/app';

let app = new App({
  signInButtonSelector: '#signin-btn',
  signUpButtonSelector: '#signup-btn',
  loginFormSelector: '#login-form',
  registerFormSelector: '#reg-form',
});

app.init();
