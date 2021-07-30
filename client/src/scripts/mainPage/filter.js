import { fillFilteredBlocks } from './blocks';
import { allUserBlocks } from './blocks';
import { clearClickTagClass, addClickTagClass } from '../helpers';

export const handleTagFilter = () => {
  const tagContainerDiv = document.getElementById('tag-container');
  tagContainerDiv.addEventListener('click', async (event) => {
    if (event.target.className === 'user-tag') {
      clearClickTagClass();
      const blockTag = event.target.id;
      addClickTagClass(blockTag);
      const allBlocks = await allUserBlocks();
      const filteredBlocks = allBlocks.filter((block) => {
        if (block.blockTag === blockTag) {
          return block;
        }
      });
      fillFilteredBlocks(filteredBlocks);
    }
  });
};

export const handleSearchForm = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-input').value;
    if (searchValue) {
      clearClickTagClass();
      const allBlocks = await allUserBlocks();
      const matchedBlocks = allBlocks.filter((block) => {
        return searchBlockByTitle(block, searchValue);
      });
      document.querySelector('#search-input').value = '';
      if (matchedBlocks.length === 0) {
        const blockContainerEl = document.querySelector('#blocks-container');
        blockContainerEl.innerHTML = `<center><h6> No Match </h6></center>`;
      } else {
        fillFilteredBlocks(matchedBlocks);
      }
    }
  });
};

const searchBlockByTitle = (block, searchValue) => {
  return block.blockTitle.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
};