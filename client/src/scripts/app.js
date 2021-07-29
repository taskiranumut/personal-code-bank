import { showSignInForm, showSignUpForm } from './loginRegisterSwitch';
import { loadMainPage } from './mainPage';
import { loginUser } from './login';
import { registerUser } from './register';

class App {
  constructor(option) {
    const {
      signInButtonSelector,
      signUpButtonSelector,
      loginFormSelector,
      registerFormSelector,
    } = option;

    this.$signInButtonEl = document.querySelector(signInButtonSelector);
    this.$signUpButtonEl = document.querySelector(signUpButtonSelector);
    this.$loginFormEl = document.querySelector(loginFormSelector);
    this.$registerFormEl = document.querySelector(registerFormSelector);
  }

  handleSignInButton() {
    this.$signInButtonEl.addEventListener('click', showSignInForm);
  }

  handleSignUpButton() {
    this.$signUpButtonEl.addEventListener('click', showSignUpForm);
  }

  loginSubmit() {
    this.$loginFormEl.addEventListener('submit', async (e) => {
      const loginResult = await loginUser(e);
      loadMainPage(loginResult.status);
    });
  }

  registerSubmit() {
    this.$registerFormEl.addEventListener('submit', registerUser);
  }

  init() {
    this.handleSignInButton();
    this.handleSignUpButton();
    this.loginSubmit();
    this.registerSubmit();
  }
}

export default App;
