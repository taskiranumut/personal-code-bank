import { allUserBlocks } from './blocks';
import { randomIdGenerator } from '../helpers';

export const fillTags = async () => {
  const allBlocks = await allUserBlocks();
  const tagContainer = document.querySelector('#tag-container');
  tagContainer.innerHTML = '';

  const allBlockTags = allBlocks.map((block) => {
    return block.blockTag;
  });

  let filteredTags = [];
  allBlockTags.forEach((tag) => {
    const isThere = filteredTags.includes(tag);
    if (isThere === false) {
      filteredTags.push(tag);
    }
  });

  filteredTags.forEach((tag) => {
    tagContainer.innerHTML += `<div class="user-tag-single-container">
      <div class="user-tag" id="${tag}">${tag}</div></div>`;
  });
};
