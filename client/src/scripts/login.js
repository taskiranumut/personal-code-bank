import { clearMessageDiv, getMessageDivEl } from './helpers';
import { confirmUserInDatabase } from './fetch/post';

export const loginUser = async (e) => {
  e.preventDefault();
  const { $emailEl, $passwordEl } = getLoginElements();
  const userLoginInfos = {
    email: $emailEl.value,
    password: $passwordEl.value,
  };
  clearMessageDiv();

  const result = await confirmUserInDatabase(userLoginInfos).then((res) =>
    res.json()
  );

  if (result.status === 'ok') {
    localStorage.setItem('token', result.data);
    getMessageDivEl().innerHTML = 'Login is successful';
    clearLoginInputs();
  } else {
    getMessageDivEl().innerHTML = result.error;
  }
  return result;
};

const getLoginElements = () => {
  const $emailEl = document.querySelector('#login-email');
  const $passwordEl = document.querySelector('#login-password');
  return { $emailEl, $passwordEl };
};

const clearLoginInputs = () => {
  const { $emailEl, $passwordEl } = getLoginElements();
  $emailEl.value = '';
  $passwordEl.value = '';
};
