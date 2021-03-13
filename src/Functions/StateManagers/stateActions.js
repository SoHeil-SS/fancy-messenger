import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

const { actionCreator } = utilsFunctionsAndHooks;

const actionPersonClicked = (personId) =>
  actionCreator("PERSON_CLICKED", personId);

const actionAddNewChatClicked = () => actionCreator("ADD_NEW_CHAT_CLICKED");

const actionCopyChatClicked = (chatText) =>
  actionCreator("COPY_CHAT_CLICKED", chatText);

const actionEditChatClicked = (chatId) =>
  actionCreator("EDIT_CHAT_CLICKED", chatId);

const actionDeleteChatClicked = (chatId) =>
  actionCreator("DELETE_CHAT_CLICKED", chatId);
const actionConfirmDeleteChatClicked = () =>
  actionCreator("CONFIRM_DELETE_CHAT_CLICKED");

const actionForwardChatClicked = (forwardText) =>
  actionCreator("FORWARD_CHAT_CLICKED", [forwardText]);

const actionSelectPersonToForwardChatClicked = (personId) =>
  actionCreator("SELECT_PERSON_TO_FORWARD_CHAT_CLICKED", personId);

const actionConfirmEditChatClicked = () =>
  actionCreator("CONFIRM_EDIT_CHAT_CLICKED");

const actionCancelEditChatClicked = (chatId) =>
  actionCreator("CANCEL_EDIT_CHAT_CLICKED", chatId);

const actionInputChange = (text, whichInput) =>
  actionCreator("INPUT_CHANGE", { text, whichInput });

const actionChatInputKeyPress = () => actionCreator("CHAT_INPUT_KEY_PRESS");

const actionChatBoxCloseClicked = () =>
  actionCreator("CHAT_BOX_CLOSE_CLICKED", true);

const actionChatMenuBarClicked = () => actionCreator("CHAT_MENU_BAR_CLICKED");

const actionPersonMenuBarClicked = () =>
  actionCreator("PERSON_MENU_BAR_CLICKED");

const actionSearchIconClicked = (value) =>
  actionCreator("SEARCH_ICON_CLICKED", value);

const actionCloseNotificationClicked = () =>
  actionCreator("CLOSE_NOTIFICATION_CLICKED");

const actionCloseDialogClicked = () => actionCreator("CLOSE_DIALOG_CLICKED");

const actionAppLoadComplete = () => actionCreator("APP_LOAD_COMPLETED");

export const stateActions = {
  actionPersonClicked,
  actionAddNewChatClicked,
  actionCopyChatClicked,
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
