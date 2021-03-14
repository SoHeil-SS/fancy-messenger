import { stateHandlers } from "./stateHandlers";

const {
  handlePersonClicked,
  handleAddNewChatClicked,
  handleEditChatClicked,
  handleConfirmEditChatClicked,
  handleCancelEditChatClicked,
  handleForwardChatClicked,
  handleSelectPersonToForwardChatClicked,
  handleConfirmDeleteChatClicked,
  handleDeleteChatClicked,
  handleChatBoxCloseClicked,
  handleInputChange,
  handleChatMenuBarClicked,
  handleSearchIconClicked,
  handlePersonMenuBarClicked,
  handleCloseDialogClicked,
  handleAppLoadComplete,
  handleCloseNotificationClicked,
  handleSelectedPersonDraftChange,
} = stateHandlers;

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PERSON_CLICKED":
      return handlePersonClicked(state, payload);

    case "ADD_NEW_CHAT_CLICKED":
      return handleAddNewChatClicked(state);

    case "EDIT_CHAT_CLICKED":
      return handleEditChatClicked(state, payload);

    case "CANCEL_EDIT_CHAT_CLICKED":
      return handleCancelEditChatClicked(state);

    case "CONFIRM_EDIT_CHAT_CLICKED":
      return handleConfirmEditChatClicked(state);

    case "FORWARD_CHAT_CLICKED":
      return handleForwardChatClicked(state, payload);

    case "SELECT_PERSON_TO_FORWARD_CHAT_CLICKED":
      return handleSelectPersonToForwardChatClicked(state, payload);

    case "DELETE_CHAT_CLICKED":
      return handleDeleteChatClicked(state, payload);

    case "CONFIRM_DELETE_CHAT_CLICKED":
      return handleConfirmDeleteChatClicked(state);

    case "INPUT_CHANGE":
      return handleInputChange(state, payload);

    case "CHAT_BOX_CLOSE_CLICKED":
      return handleChatBoxCloseClicked(state, payload);

    case "CHAT_MENU_BAR_CLICKED":
      return handleChatMenuBarClicked(state);

    case "SEARCH_ICON_CLICKED":
      return handleSearchIconClicked(state, payload);

    case "PERSON_MENU_BAR_CLICKED":
      return handlePersonMenuBarClicked(state);

    case "CLOSE_DIALOG_CLICKED":
      return handleCloseDialogClicked(state);

    case "APP_LOAD_COMPLETED":
      return handleAppLoadComplete(state);

    case "CLOSE_NOTIFICATION_CLICKED":
      return handleCloseNotificationClicked(state);

    case "SELECTED_PERSON_DRAFT_CHANGE":
      return handleSelectedPersonDraftChange(state, payload);

    default:
      return state;
  }
};
