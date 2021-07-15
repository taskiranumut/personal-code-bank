import { showSignInForm, showSignUpForm } from './loginRegisterSwitch';
import { getUserIdFromLocalStorage, removeLocalStorage } from './localStorage';
import {
  loadMainPage,
  fillTags,
  fillBlocks,
  fillUsername,
  handleNewBlock,
  fillMainPage,
  getUserNames,
} from './mainPage';
import { blockCreateElementData } from './elementDatas/mainPageDatas';
// import { getAllBlocks } from './fetch/userBlocksGet';

class App {
  constructor() {
    this.allBlocks = [];
  }

  handleSignInButton() {
    const signInButton = document.querySelector('#signin-btn');
    signInButton.addEventListener('click', showSignInForm);
  }

  loginSubmit() {
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', this.loginUser);
    }
  }

  async loginUser(e) {
    e.preventDefault();
    let allBlocks = [];
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = '';

    const result = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    if (result.status === 'ok') {
      localStorage.setItem('token', result.data);
      messageDiv.innerHTML = 'Login is successful';
      loadMainPage();
      const getUserBlocks = async () => {
        const userId = getUserIdFromLocalStorage();
        await fetch('http://localhost:3000/user-blocks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: userId,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            allBlocks = res.reverse();
          });
      };
      const userId = getUserIdFromLocalStorage();
      getUserNames(userId);
      getUserBlocks()
        .then(() => {
          fillMainPage(allBlocks);
        })
        .then(() => {
          handleNewBlock(allBlocks);
        });
    } else {
      messageDiv.innerHTML = result.error;
    }
  }

  handleSignUpButton() {
    const signUpButton = document.querySelector('#signup-btn');
    signUpButton.addEventListener('click', showSignUpForm);
  }

  signUpSubmit() {
    const regForm = document.querySelector('#reg-form');
    if (regForm) {
      regForm.addEventListener('submit', this.registerUser);
    }
  }

  async registerUser(e) {
    e.preventDefault();
    const firstName = document.querySelector('#register-firstname').value;
    const lastName = document.querySelector('#register-lastname').value;
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = '';

    const result = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    }).then((res) => res.json());
    if (result.status === 'ok') {
      messageDiv.innerHTML = 'Registration is completed.';
    } else {
      messageDiv.innerHTML = result.error;
    }
  }

  init() {
    this.handleSignInButton();
    this.handleSignUpButton();
    this.loginSubmit();
    this.signUpSubmit();
  }
}

export default App;
