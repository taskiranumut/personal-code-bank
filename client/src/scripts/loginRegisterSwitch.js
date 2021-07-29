export const showSignInForm = () => {
  clearMessageDiv();

  const signUpButton = document.querySelector('#signup-btn');
  signUpButton.classList.add('click-button');

  const signInButton = document.querySelector('#signin-btn');
  signInButton.classList.remove('click-button');

  const signInDiv = document.querySelector('#login-element');
  signInDiv.style.visibility = 'visible';

  const signUpDiv = document.querySelector('#register-element');
  signUpDiv.style.visibility = 'hidden';

  const logRegFrame = document.querySelector('#log-reg-frame');
  logRegFrame.style.height = '340px';
};

export const showSignUpForm = () => {
  clearMessageDiv();

  const signInButton = document.querySelector('#signin-btn');
  signInButton.classList.add('click-button');

  const signUpButton = document.querySelector('#signup-btn');
  signUpButton.classList.remove('click-button');

  const signInDiv = document.querySelector('#login-element');
  signInDiv.style.visibility = 'hidden';

  const signUpDiv = document.querySelector('#register-element');
  signUpDiv.style.visibility = 'visible';

  const logRegFrame = document.querySelector('#log-reg-frame');
  logRegFrame.style.height = '500px';
};

const clearMessageDiv = () => {
  const messageDiv = document.querySelector('#message');
  messageDiv.innerHTML = '';
};
