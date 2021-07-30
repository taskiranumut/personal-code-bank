import { getUserBlocksFromDatabase } from '../fetch/post';
import { getUserIdFromLocalStorage } from '../helpers';
import { handleShowBlock } from './updateBlock';

export const allUserBlocks = async () => {
  let blocks;
  const userId = getUserIdFromLocalStorage();
  await getUserBlocksFromDatabase(userId)
    .then((res) => res.json())
    .then((res) => {
      blocks = res.reverse();
    });
  return blocks;
};

export const fillBlocks = async () => {
  const blockDataContainer = document.querySelector('#block-data-container');
  blockDataContainer.innerHTML = `<div class="tag-container">
    <div class="block-tag">
      <i class="fas fa-cube"></i>
      Blocks
    </div></div>
    <div id="blocks-container"></div>`;
  const blockContainer = document.querySelector('#blocks-container');
  blockContainer.innerHTML = '';

  const allBlocks = await allUserBlocks();
  allBlocks.forEach((block) => {
    blockContainer.innerHTML += `<div class="block-container">
      <div class="row single-block-row user-block">
          <div class="col block-title-col flex-center padding-7px">
              <div class="single-block-title" id="${block._id}"> 
              ${block.blockTitle}
              </div>
          </div>
          <div class="col-3 block-tag-col flex-center padding-7px">
              <div class="single-block-tag" id="right-block-tag">
              ${block.blockTag}
              </div>
          </div>
      </div>
      </div>`;
  });
  handleShowBlock();
};

export const fillFilteredBlocks = (filteredBlocks) => {
  const blockDataContainer = document.querySelector('#block-data-container');
  blockDataContainer.innerHTML = `<div class="tag-container">
    <div class="block-tag">
      <i class="fas fa-cube"></i>
      Blocks
    </div></div>
    <div id="blocks-container"></div>`;
  const blockContainer = document.querySelector('#blocks-container');
  blockContainer.innerHTML = '';

  filteredBlocks.forEach((block) => {
    blockContainer.innerHTML += `<div class="block-container">
      <div class="row single-block-row user-block">
          <div class="col block-title-col flex-center padding-7px">
              <div class="single-block-title" id="${block._id}"> 
              ${block.blockTitle}
              </div>
          </div>
          <div class="col-3 block-tag-col flex-center padding-7px">
              <div class="single-block-tag" id="right-block-tag">
              ${block.blockTag}
              </div>
          </div>
      </div>
      </div>`;
  });
  handleShowBlock();
};
