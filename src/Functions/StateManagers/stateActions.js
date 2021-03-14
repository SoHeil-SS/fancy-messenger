import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

const { getStateAction } = utilsFunctionsAndHooks;

const actionPersonClicked = (personId) =>
  getStateAction("PERSON_CLICKED", personId);

const actionAddNewChatClicked = () => getStateAction("ADD_NEW_CHAT_CLICKED");

const actionEditChatClicked = (chatId) =>
  getStateAction("EDIT_CHAT_CLICKED", chatId);

const actionDeleteChatClicked = (chatId) =>
  getStateAction("DELETE_CHAT_CLICKED", chatId);
const actionConfirmDeleteChatClicked = () =>
  getStateAction("CONFIRM_DELETE_CHAT_CLICKED");

const actionForwardChatClicked = (forwardText) =>
  getStateAction("FORWARD_CHAT_CLICKED", [forwardText]);

const actionSelectPersonToForwardChatClicked = (personId) =>
  getStateAction("SELECT_PERSON_TO_FORWARD_CHAT_CLICKED", personId);

const actionConfirmEditChatClicked = () =>
  getStateAction("CONFIRM_EDIT_CHAT_CLICKED");

const actionCancelEditChatClicked = (chatId) =>
  getStateAction("CANCEL_EDIT_CHAT_CLICKED", chatId);

const actionInputChange = (text, whichInput) =>
  getStateAction("INPUT_CHANGE", { text, whichInput });

const actionChatInputKeyPress = () => getStateAction("CHAT_INPUT_KEY_PRESS");

const actionChatBoxCloseClicked = () =>
  getStateAction("CHAT_BOX_CLOSE_CLICKED", true);

const actionChatMenuBarClicked = () => getStateAction("CHAT_MENU_BAR_CLICKED");

const actionPersonMenuBarClicked = () =>
  getStateAction("PERSON_MENU_BAR_CLICKED");

const actionSearchIconClicked = (value) =>
  getStateAction("SEARCH_ICON_CLICKED", value);

const actionCloseNotificationClicked = () =>
  getStateAction("CLOSE_NOTIFICATION_CLICKED");

const actionCloseDialogClicked = () => getStateAction("CLOSE_DIALOG_CLICKED");

const actionAppLoadComplete = () => getStateAction("APP_LOAD_COMPLETED");

export const stateActions = {
  actionPersonClicked,
  actionAddNewChatClicked,
  actionEditChatClicked,
  actionDeleteChatClicked,
  actionForwardChatClicked,
  actionSelectPersonToForwardChatClicked,
  actionConfirmEditChatClicked,
  actionCancelEditChatClicked,
  actionInputChange,
  actionChatInputKeyPress,
  actionChatBoxCloseClicked,
  actionChatMenuBarClicked,
  actionSearchIconClicked,
  actionPersonMenuBarClicked,
  actionCloseDialogClicked,
  actionAppLoadComplete,
  actionConfirmDeleteChatClicked,
  actionCloseNotificationClicked,
};
