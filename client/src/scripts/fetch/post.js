import { API_URL } from './API_URL';

export const registerToDatabase = (userRegisterInfos) => {
  const { firstName, lastName, email, password } = userRegisterInfos;
  return fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });
};

export const confirmUserInDatabase = (userLoginInfos) => {
  const { email, password } = userLoginInfos;
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const getUserBlocksFromDatabase = (userId) => {
  return fetch(`${API_URL}/user-blocks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userId,
    }),
  });
};

export const saveNewblockToDatabase = (blockInfos) => {
  const { blockTitle, blockTag, blockData, user } = blockInfos;
  return fetch(`${API_URL}/block`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blockTitle,
      blockTag,
      blockData,
      user,
    }),
  });
};
