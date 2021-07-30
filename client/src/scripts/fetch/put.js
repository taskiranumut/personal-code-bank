import { API_URL } from './API_URL';

export const updateBlockInDatabase = (updatedBlockInfos, blockId) => {
  const { blockTitle, blockTag, blockData } = updatedBlockInfos;
  return fetch(`${API_URL}/id/${blockId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blockTitle,
      blockTag,
      blockData,
    }),
  });
};
