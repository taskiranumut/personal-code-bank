export const getUserIdFromLocalStorage = () => {
  const result = localStorage.getItem('token');
  const userDataRaw = result.split('.')[1];
  const userData = atob(userDataRaw);
  const objectUserData = JSON.parse(userData);
  return objectUserData.id;
};

export const clearMessageDiv = () => {
  getMessageDivEl().innerHTML = '';
};

export const getMessageDivEl = () => {
  return document.querySelector('#message');
};

export const clearClickTagClass = () => {
  const $clickTagEl = document.querySelector('.click-tag');
  if ($clickTagEl) {
    $clickTagEl.classList.remove('click-tag');
  }
};

export const addClickTagClass = (blockTag) => {
  const $tagEl = document.getElementById(blockTag);
  $tagEl.classList.add('click-tag');
};
