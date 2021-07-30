import { API_URL } from './API_URL';

export const getUserInfosFromDatabase = (userId) => {
  return fetch(`${API_URL}/userid/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
};
