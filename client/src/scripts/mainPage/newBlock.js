import { blockCreateElementData } from '../elementDatas/mainPageDatas';
import { allUserBlocks, fillBlocks } from './blocks';
import { saveNewblockToDatabase } from '../fetch/post';
import { getUserIdFromLocalStorage } from '../helpers';
import { fillTags } from './tags';
import { clearClickTagClass } from '../helpers';
import { getBlockDataFromTextarea } from '../textArea';

export const handleNewBlock = () => {
  const newBlockButton = document.querySelector('#new-block-btn');
  if (newBlockButton) {
    newBlockButton.addEventListener('click', () => {
      clearClickTagClass();
      const blockDataContainer = document.querySelector(
        '#block-data-container'
      );

      blockDataContainer.innerHTML = blockCreateElementData;
      const $textAreaEl = document.getElementById('block-data-textarea');
      const editor = CodeMirror.fromTextArea($textAreaEl, {
        mode: 'javascript',
        theme: 'base16-light',
        lineNumbers: true,
      });
      handleCancelButton();
      handleSaveButton(editor);
    });
  }
};

export const handleCancelButton = () => {
  const cancelButton = document.querySelector('#cancel-button');
  if (cancelButton) {
    cancelButton.addEventListener('click', fillBlocks);
  }
};

const handleSaveButton = (editor) => {
  const $saveButton = document.querySelector('#save-button');
  $saveButton.addEventListener('click', async () => {
    const blockInfos = getNewBlocksInfos(editor);
    await saveNewblockToDatabase(blockInfos);
    const allBlocks = await allUserBlocks();
    fillBlocks(allBlocks);
    fillTags(allBlocks);
  });
};

const getNewBlocksInfos = (editor) => {
  const blockTitle = document.querySelector('#block-title-input').value;
  const blockTag = document.querySelector('#block-tag-input').value;
  const blockData = getBlockDataFromTextarea(editor);
  const user = getUserIdFromLocalStorage();
  return { blockTitle, blockTag, blockData, user };
};
