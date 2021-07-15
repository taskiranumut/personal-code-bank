import {
  mainPageElementsData,
  blockTagsElementsData,
  blockElementsData,
  blockCreateElementData,
  blockUpdateElementData,
} from './elementDatas/mainPageDatas';

import { getUserIdFromLocalStorage } from './localStorage';

let temp = '';

export const loadMainPage = () => {
  const bigContainerDiv = document.querySelector('#big-container');
  bigContainerDiv.innerHTML = mainPageElementsData;
};

export const fillTags = (blockArray) => {
  const tagContainer = document.querySelector('#tag-container');
  tagContainer.innerHTML = '';

  const allBlockTags = blockArray.map((block) => {
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
    <div class="user-tag" id="${tag}">
    ${tag}
    </div>
    </div>`;
  });
  handleTagFilter(blockArray);
  handleSearchForm(blockArray);
};

export const fillBlocks = (blockArray) => {
  const blockContainer = document.querySelector('#blocks-container');
  blockContainer.innerHTML = '';
  blockArray.forEach((block) => {
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
  handleShowBlock(blockArray);
  // handleSearchForm(blockArray);
};

export const fillUsername = (userArray) => {
  const username = document.querySelector('#username');
  username.innerHTML += userArray.firstName;
  username.innerHTML += userArray.lastName;
};

export const fillMainPage = (userArray) => {
  fillTags(userArray);
  fillBlocks(userArray);
};

export const handleNewBlock = (userArray) => {
  const newBlockButton = document.querySelector('#new-block-btn');
  if (newBlockButton) {
    newBlockButton.addEventListener('click', () => {
      const blockDataContainer = document.querySelector(
        '#block-data-container'
      );
      if (blockDataContainer) {
        blockDataContainer.innerHTML = blockCreateElementData;
      }
      handleCancelButton(userArray);
      handleSaveButton(userArray);
    });
  }
};

const handleCancelButton = (userArray) => {
  const cancelButton = document.querySelector('#cancel-button');
  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      const blockDataContainer = document.querySelector(
        '#block-data-container'
      );
      blockDataContainer.innerHTML = `<div class="tag-container">
      <div class="block-tag">
        <i class="fas fa-cube"></i>
        Blocks
      </div></div>
      <div id="blocks-container"></div>`;
      fillBlocks(userArray);
    });
  }
};

const handleSaveButton = (userArray) => {
  const saveButton = document.querySelector('#save-button');
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      blockPostToDatabase().then(() => {
        updateBlocks(userArray);
      });
    });
  }
};

const blockPostToDatabase = async () => {
  const blockTitle = document.querySelector('#block-title-input').value;
  const blockTag = document.querySelector('#block-tag-input').value;
  const blockData = document.querySelector('#block-data-textarea').value;
  const user = getUserIdFromLocalStorage();

  await fetch('http://localhost:3000/block', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blockTitle,
      blockTag,
      blockData,
      user,
    }),
  }).then((res) => res.json());
};

const updateBlocks = async () => {
  let updatedBlocks = [];
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
      updatedBlocks = res.reverse();
    })
    .then(() => {
      againFillBlocks(updatedBlocks);
    });
};

const handleSearchForm = (blockArray) => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-input').value;
    if (searchValue) {
      clearClickTagClass();
      const matchedBlocks = blockArray.filter((block) => {
        return searchBlockByTitle(block, searchValue);
      });
      document.querySelector('#search-input').value = '';
      fillBlocks(matchedBlocks);
    }
  });
};

const searchBlockByTitle = (block, searchValue) => {
  return block.blockTitle.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
};

const againFillBlocks = (userArray) => {
  const blockDataContainer = document.querySelector('#block-data-container');
  blockDataContainer.innerHTML = `<div class="tag-container">
  <div class="block-tag">
    <i class="fas fa-cube"></i>
    Blocks
  </div></div>
  <div id="blocks-container"></div>`;
  fillTags(userArray);
  fillBlocks(userArray);
};

const handleShowBlock = (blockArray) => {
  const blockContainersDiv = document.getElementById('blocks-container');
  let blockId = '';
  blockContainersDiv.addEventListener('click', (event) => {
    if (event.target.className === 'single-block-title') {
      blockId = event.target.id;
    }
    const selectedBlock = blockArray.find((block) => {
      if (block._id === blockId) {
        return block;
      }
    });
    const blockDataContainer = document.querySelector('#block-data-container');
    if (blockDataContainer) {
      blockDataContainer.innerHTML = blockUpdateElementData;
    }
    document.querySelector('#block-title-input').value =
      selectedBlock.blockTitle;
    document.querySelector('#block-tag-input').value = selectedBlock.blockTag;
    document.querySelector('#block-data-textarea').value =
      selectedBlock.blockData;
    handleCancelButton(blockArray);
    handleSaveUpdateButton(blockId);
    handleDeleteButton(blockId);
  });
};

const handleUpdateBlock = async (blockId) => {
  const blockTitle = document.querySelector('#block-title-input').value;
  const blockTag = document.querySelector('#block-tag-input').value;
  const blockData = document.querySelector('#block-data-textarea').value;

  await fetch(`http://localhost:3000/id/${blockId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blockTitle,
      blockTag,
      blockData,
    }),
  }).then((res) => res.json());
};

const handleSaveUpdateButton = (blockId) => {
  const saveButton = document.querySelector('#save-button');
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      handleUpdateBlock(blockId).then(() => {
        updateBlocks();
      });
    });
  }
};

const handleDeleteBlock = async (blockId) => {
  await fetch(`http://localhost:3000/id/${blockId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};

const handleDeleteButton = (blockId) => {
  const deleteButton = document.querySelector('#delete-button');
  if (deleteButton) {
    deleteButton.addEventListener('click', () => {
      handleDeleteBlock(blockId).then(() => {
        updateBlocks();
        // clearClickTagClass();
      });
    });
  }
};

export const getUserNames = async (userId) => {
  await fetch(`http://localhost:3000/userid/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => {
      fillUserNames(res);
    });
};

const fillUserNames = (userInfo) => {
  const userNamesDiv = document.querySelector('#username');
  userNamesDiv.innerHTML += `${userInfo.firstName} ${userInfo.lastName}`;
};

const handleTagFilter = (blockArray) => {
  const tagContainerDiv = document.getElementById('tag-container');
  tagContainerDiv.addEventListener('click', (event) => {
    if (event.target.className === 'user-tag') {
      clearClickTagClass();
      const blockTag = event.target.id;
      const tagEl = document.getElementById(blockTag);
      tagEl.classList.add('click-tag');
      temp = event.target.id;

      const filteredBlocks = blockArray.filter((block) => {
        if (block.blockTag === blockTag) {
          return block;
        }
      });
      fillBlocks(filteredBlocks);
    }
  });
};

const clearClickTagClass = () => {
  if (temp) {
    const tempEl = document.getElementById(temp);
    tempEl.classList.remove('click-tag');
  }
};
