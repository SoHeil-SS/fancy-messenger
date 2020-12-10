function actionCreator(type, payload) {
  return { type, payload };
}

export const personClicked = (personId) =>
  actionCreator("PERSON_CLICKED", personId);

export const addClicked = () => actionCreator("ADD_CLICKED");

export const copyClicked = (chatText) =>
  actionCreator("COPY_CLICKED", chatText);

export const editClicked = (chatId) => actionCreator("EDIT_CLICKED", chatId);

export const deleteClicked = (chatId) =>
  actionCreator("DELETE_CLICKED", chatId);

export const forwardClicked = (chatId) =>
  actionCreator("FORWARD_CLICKED", chatId);

export const saveClicked = () => actionCreator("SAVE_CLICKED");

export const editCloseClicked = (chatId) =>
  actionCreator("EDIT_CLOSE_CLICKED", chatId);

export const onInputChange = (chatContent) =>
  actionCreator("INPUT_CHANGED", chatContent);

export const onKeyPress = (e) => actionCreator("ENTER_CLICKED", e);

export const closeClicked = () => actionCreator("CLOSE_CLICKED");