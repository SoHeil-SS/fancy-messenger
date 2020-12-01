function actionCreator(type, payload) {
  return { type, payload };
}

export const personClicked = (personId) =>
  actionCreator("PERSON_CLICKED", personId);

export const addClicked = () => actionCreator("ADD_CLICKED");

export const deleteClicked = (chatId) =>
  actionCreator("DELETE_CLICKED", chatId);

export const editClicked = (chatId) => actionCreator("EDIT_CLICKED", chatId);

export const saveClicked = () => actionCreator("SAVE_CLICKED");

export const forwardClicked = (chatId) =>
  actionCreator("FORWARD_CLICKED", chatId);

export const editCloseClicked = (chatId) =>
  actionCreator("EDIT_CLOSE_CLICKED", chatId);

export const onInputChange = (chatContent) =>
  actionCreator("INPUT_CHANGED", chatContent);

export const onDraftChange = (draft) => actionCreator("DRAFT_CHANGED", draft);

export const onKeyPress = (e) => actionCreator("ENTER_CLICKED", e);

export const closeClicked = () => actionCreator("CLOSE_CLICKED");
