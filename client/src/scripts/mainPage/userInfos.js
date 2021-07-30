import { getUserInfosFromDatabase } from '../fetch/get';
import { getUserIdFromLocalStorage } from '../helpers';

export const fillUserNames = () => {
  const userId = getUserIdFromLocalStorage();
  getUserInfosFromDatabase(userId)
    .then((res) => res.json())
    .then((userInfos) => {
      const userNamesDiv = document.querySelector('#username');
      userNamesDiv.innerHTML += `${userInfos.firstName} ${userInfos.lastName}`;
    });
};
