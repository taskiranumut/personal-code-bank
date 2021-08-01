import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import '../codeMirror/lib/codemirror.js';
import '../codeMirror/lib/codemirror.css';
import '../codeMirror/mode/javascript/javascript.js';
import '../codeMirror/theme/base16-light.css';
import App from './scripts/app';

let app = new App({
  signInButtonSelector: '#signin-btn',
  signUpButtonSelector: '#signup-btn',
  loginFormSelector: '#login-form',
  registerFormSelector: '#reg-form',
});

app.init();
