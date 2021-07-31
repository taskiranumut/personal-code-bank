import { mainPageElementsData } from './elementDatas/mainPageDatas';
import { fillUserNames } from './mainPage/userInfos';
import { fillTags } from './mainPage/tags';
import { fillBlocks } from './mainPage/blocks';
import { handleNewBlock } from './mainPage/newBlock';
import { handleTagFilter, handleSearchForm } from './mainPage/filter';

export const loadMainPage = (status) => {
  if (status === 'ok') {
    const bigContainerDiv = document.querySelector('#big-container');
    bigContainerDiv.innerHTML = mainPageElementsData;
    loadAllDatasToMainPage();
    handleNewBlock();
    handleTagFilter();
    handleSearchForm();
  }
};

const loadAllDatasToMainPage = () => {
  fillUserNames();
  fillTags();
  fillBlocks();
};
