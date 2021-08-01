import { fillBlocks } from './blocks';
import { updateBlockInDatabase } from '../fetch/put';
import { deleteBlockFromDatabase } from '../fetch/delete';
import { fillTags } from './tags';
import { handleCancelButton } from './newBlock';
import { clearClickTagClass } from '../helpers';
import { allUserBlocks } from './blocks';
import { blockUpdateElementData } from '../elementDatas/mainPageDatas';
import { setBlockDataToTextArea, getBlockDataFromTextarea } from '../textArea';

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
      const $blockDataContainer = document.querySelector(
        '#block-data-container'
      );
      $blockDataContainer.innerHTML = blockUpdateElementData;
      const $textAreaEl = document.getElementById('block-data-textarea');
      const editor = CodeMirror.fromTextArea($textAreaEl, {
        mode: 'javascript',
        theme: 'base16-light',
        lineNumbers: true,
      });
      document.querySelector('#block-title-input').value =
        selectedBlock.blockTitle;
      document.querySelector('#block-tag-input').value = selectedBlock.blockTag;
      setBlockDataToTextArea(editor, selectedBlock.blockData);
      handleSaveUpdateButton(blockId, editor);
      handleDeleteButton(blockId);
      handleCancelButton();
    }
  });
};

const handleSaveUpdateButton = (blockId, editor) => {
  const saveButton = document.querySelector('#save-button');
  saveButton.addEventListener('click', async () => {
    const newBlockInfos = getUpdatedBlocksInfos(editor);
    await updateBlockInDatabase(newBlockInfos, blockId);
    fillBlocks();
    fillTags();
  });
};

const getUpdatedBlocksInfos = (editor) => {
  const blockTitle = document.querySelector('#block-title-input').value;
  const blockTag = document.querySelector('#block-tag-input').value;
  const blockData = getBlockDataFromTextarea(editor);
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
