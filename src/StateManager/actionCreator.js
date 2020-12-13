function actionCreator(type, payload) {
  return { type, payload };
}

export const personClicked = (personId) => (dispatch) =>
  dispatch(actionCreator("PERSON_CLICKED", personId));

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

export const onInputChange = (text, whichInput) =>
  actionCreator("INPUT_CHANGED", { text, whichInput });

export const onKeyPress = (e) => actionCreator("ENTER_CLICKED", e);

export const closeClicked = () => actionCreator("CLOSE_CLICKED", true);

export const onChatMenuClick = () => actionCreator("CHAT_MENU_CLICKED");

export const onSearchClick = (value) => actionCreator("SEARCH_CLICKED", value);

export const onPersonMenuClick = () => actionCreator("PERSON_MENU_CLICKED");
