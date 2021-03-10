import { utilsFunctions } from "../utilsFunctions";

const { actionCreator } = utilsFunctions;

export const stateActions = {
  personClicked: (personId) => actionCreator("PERSON_CLICKED", personId),

  addClicked: () => actionCreator("ADD_CLICKED"),

  copyClicked: (chatText) => actionCreator("COPY_CLICKED", chatText),

  editClicked: (chatId) => actionCreator("EDIT_CLICKED", chatId),

  deleteClicked: (chatId) => actionCreator("DELETE_CLICKED", chatId),

  forwardClicked: (forwardText) =>
    actionCreator("FORWARD_CLICKED", forwardText),

  onForwardChat: (personId) =>
    actionCreator("FORWARD_TO_PERSON_CLICKED", personId),

  saveClicked: () => actionCreator("SAVE_CLICKED"),

  editCloseClicked: (chatId) => actionCreator("EDIT_CLOSE_CLICKED", chatId),

  onInputChange: (text, whichInput) =>
    actionCreator("INPUT_CHANGED", { text, whichInput }),

  onKeyPress: (e) => actionCreator("ENTER_CLICKED", e),

  closeClicked: () => actionCreator("CLOSE_CLICKED", true),

  onChatMenuClick: () => actionCreator("CHAT_MENU_CLICKED"),

  searchInputState: (value) => actionCreator("SEARCH_CLICKED", value),

  onPersonMenuClick: () => actionCreator("PERSON_MENU_CLICKED"),

  onCloseModalClick: () => actionCreator("CLOSE_MODAL_CLICKED"),

  onLoadComplete: () => actionCreator("LOAD_COMPLETED"),
};
