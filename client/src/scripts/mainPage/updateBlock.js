import { fillBlocks } from './blocks';
import { updateBlockInDatabase } from '../fetch/put';
import { deleteBlockFromDatabase } from '../fetch/delete';
import { fillTags } from './tags';
import { handleCancelButton } from './newBlock';
import { clearClickTagClass } from '../helpers';
import { allUserBlocks } from './blocks';
import { blockUpdateElementData } from '../elementDatas/mainPageDatas';

export const handleShowBlock = () => {
  const blockContainersDiv = document.querySelector('#blocks-container');
  let blockId = '';
  blockContainersDiv.addEventListener('click', async (e) => {
    if (e.target.className === 'single-block-title') {
      clearClickTagClass();
      blockId = e.target.id;
      const allBlocks = await allUserBlocks();
      const selectedBlock = allBlocks.find((block) => {
        if (block._id === blockId) {
          return block;
        }
      });
      openSelectedBlocks(selectedBlock);
      handleSaveUpdateButton(blockId);
      handleDeleteButton(blockId);
      handleCancelButton();
    }
  });
};

const handleSaveUpdateButton = (blockId) => {
  const saveButton = document.querySelector('#save-button');
  saveButton.addEventListener('click', async () => {
    const newBlockInfos = getUpdatedBlocksInfos();
    await updateBlockInDatabase(newBlockInfos, blockId);
    fillBlocks();
    fillTags();
  });
};

const getUpdatedBlocksInfos = () => {
  const blockTitle = document.querySelector('#block-title-input').value;
  const blockTag = document.querySelector('#block-tag-input').value;
  const blockData = document.querySelector('#block-data-textarea').value;
  return { blockTitle, blockTag, blockData };
};

const handleDeleteButton = (blockId) => {
  const $deleteButton = document.querySelector('#delete-button');
  $deleteButton.addEventListener('click', async () => {
    await deleteBlockFromDatabase(blockId);
    fillTags();
    fillBlocks();
  });
};

const openSelectedBlocks = (selectedBlock) => {
  const blockDataContainer = document.querySelector('#block-data-container');
  if (blockDataContainer) {
    blockDataContainer.innerHTML = blockUpdateElementData;
  }
  document.querySelector('#block-title-input').value = selectedBlock.blockTitle;
  document.querySelector('#block-tag-input').value = selectedBlock.blockTag;
  document.querySelector('#block-data-textarea').value =
    selectedBlock.blockData;
};
