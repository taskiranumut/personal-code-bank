import { API_URL } from './API_URL';

export const deleteBlockFromDatabase = (blockId) => {
  return fetch(`${API_URL}/id/${blockId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
};
