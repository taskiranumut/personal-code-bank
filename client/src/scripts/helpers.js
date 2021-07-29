export const clearMessageDiv = () => {
  getMessageDivEl().innerHTML = '';
};

export const getMessageDivEl = () => {
  return document.querySelector('#message');
};
