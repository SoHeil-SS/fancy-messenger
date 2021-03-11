import { utilsFunctions } from "../utilsFunctions";

const { actionCreator } = utilsFunctions;

const personClicked = (personId) => actionCreator("PERSON_CLICKED", personId);

const addClicked = () => actionCreator("ADD_CLICKED");

const copyClicked = (chatText) => actionCreator("COPY_CLICKED", chatText);

const editClicked = (chatId) => actionCreator("EDIT_CLICKED", chatId);

const deleteClicked = (chatId) => actionCreator("DELETE_CLICKED", chatId);

const forwardClicked = (forwardText) =>
  actionCreator("FORWARD_CLICKED", [forwardText]);

const onForwardChat = (personId) =>
  actionCreator("FORWARD_TO_PERSON_CLICKED", personId);

const saveClicked = () => actionCreator("SAVE_CLICKED");

const editCloseClicked = (chatId) =>
  actionCreator("EDIT_CLOSE_CLICKED", chatId);

const onInputChange = (text, whichInput) =>
  actionCreator("INPUT_CHANGED", { text, whichInput });

const onKeyPress = () => actionCreator("ENTER_CLICKED");

const closeClicked = () => actionCreator("CLOSE_CLICKED", true);

const onChatMenuClick = () => actionCreator("CHAT_MENU_CLICKED");

const searchInputState = (value) => actionCreator("SEARCH_CLICKED", value);

const onPersonMenuClick = () => actionCreator("PERSON_MENU_CLICKED");

const onCloseModalClick = () => actionCreator("CLOSE_MODAL_CLICKED");

const onLoadComplete = () => actionCreator("LOAD_COMPLETED");

export const stateActions = {
  personClicked,
  addClicked,
  copyClicked,
  editClicked,
  deleteClicked,
  forwardClicked,
  onForwardChat,
  saveClicked,
  editCloseClicked,
  onInputChange,
  onKeyPress,
  closeClicked,
  onChatMenuClick,
  searchInputState,
  onPersonMenuClick,
  onCloseModalClick,
  onLoadComplete,
};
