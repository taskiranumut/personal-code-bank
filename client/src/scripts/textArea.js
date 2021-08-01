export const getBlockDataFromTextarea = (editor) => {
  const blockData = editor.getValue();
  return blockData;
};

export const setBlockDataToTextArea = (editor, blockData) => {
  editor.setValue(blockData);
};
