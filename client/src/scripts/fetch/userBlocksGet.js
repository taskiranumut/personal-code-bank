import { getUserIdFromLocalStorage } from '../localStorage';

const getUserBlocks = async () => {
  const userId = getUserIdFromLocalStorage();
  await fetch('http://localhost:3000/user-blocks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userId,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      this.allBlocks = res;
    });
};
