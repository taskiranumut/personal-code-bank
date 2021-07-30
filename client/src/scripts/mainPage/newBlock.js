import { blockCreateElementData } from '../elementDatas/mainPageDatas';
import { allUserBlocks, fillBlocks } from './blocks';
import { saveNewblockToDatabase } from '../fetch/post';
import { getUserIdFromLocalStorage } from '../helpers';
import { fillTags } from './tags';
import { clearClickTagClass } from '../helpers';

export const handleNewBlock = () => {
  const newBlockButton = document.querySelector('#new-block-btn');
  if (newBlockButton) {
    newBlockButton.addEventListener('click', () => {
      clearClickTagClass();
      const blockDataContainer = document.querySelector(
        '#block-data-container'
      );
      if (blockDataContainer) {
        blockDataContainer.innerHTML = blockCreateElementData;
      }
      handleCancelButton();
      handleSaveButton();
    });
  }
};

export const handleCancelButton = () => {
  const cancelButton = document.querySelector('#cancel-button');
  if (cancelButton) {
    cancelButton.addEventListener('click', fillBlocks);
  }
};

const handleSaveButton = () => {
  const $saveButton = document.querySelector('#save-button');
  $saveButton.addEventListener('click', async () => {
    const blockInfos = getNewBlocksInfos();
    await saveNewblockToDatabase(blockInfos);
    const allBlocks = await allUserBlocks();
    fillBlocks(allBlocks);
    fillTags(allBlocks);
  });
};

const getNewBlocksInfos = () => {
  const blockTitle = document.querySelector('#block-title-input').value;
  const blockTag = document.querySelector('#block-tag-input').value;
  const blockData = document.querySelector('#block-data-textarea').value;
  const user = getUserIdFromLocalStorage();
  return { blockTitle, blockTag, blockData, user };
};
