export const getUserIdFromLocalStorage = () => {
  const result = localStorage.getItem('token');
  const userDataRaw = result.split('.')[1];
  const userData = atob(userDataRaw);
  const objectUserData = JSON.parse(userData);
  return objectUserData.id;
};

export const removeLocalStorage = () => {
  localStorage.removeItem('token');
};
