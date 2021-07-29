import { clearMessageDiv, getMessageDivEl } from './helpers';
import { registerToDatabase } from './fetch/post';

export const registerUser = async (e) => {
  e.preventDefault();
  const { $firstNameEl, $lastNameEl, $emailEl, $passwordEl } =
    getRegisterElements();
  const userRegisterInfos = {
    firstName: $firstNameEl.value,
    lastName: $lastNameEl.value,
    email: $emailEl.value,
    password: $passwordEl.value,
  };
  clearMessageDiv();

  const result = await registerToDatabase(userRegisterInfos).then((res) =>
    res.json()
  );

  if (result.status === 'ok') {
    getMessageDivEl().innerHTML = 'Registration completed. Please sign in.';
    clearRegisterInputs();
  } else {
    getMessageDivEl().innerHTML = result.error;
  }
};

const getRegisterElements = () => {
  const $firstNameEl = document.querySelector('#register-firstname');
  const $lastNameEl = document.querySelector('#register-lastname');
  const $emailEl = document.querySelector('#register-email');
  const $passwordEl = document.querySelector('#register-password');
  return { $firstNameEl, $lastNameEl, $emailEl, $passwordEl };
};

const clearRegisterInputs = () => {
  const { $firstNameEl, $lastNameEl, $emailEl, $passwordEl } =
    getRegisterElements();
  $firstNameEl.value = '';
  $lastNameEl.value = '';
  $emailEl.value = '';
  $passwordEl.value = '';
};
