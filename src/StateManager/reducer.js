import {
  handlePersonClick,
  handleAddChat,
  handleCopyChat,
  handleEditChat,
  handleSaveChat,
  handleCancelEdit,
  handleForwardClick,
  handleForwardChat,
  handleDeleteChat,
  handleCloseChat,
  handleInputChange,
  handleKeyPress,
  handleChatMenuClick,
  handleSearchClick,
  handlePersonMenuClick,
  handleCloseModalClick,
  handleLoadComplete,
} from "./eventHandlers";

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "PERSON_CLICKED":
      return handlePersonClick(state, payload);

    case "ADD_CLICKED":
      return handleAddChat(state);

    case "COPY_CLICKED":
      return handleCopyChat(state, payload);

    case "EDIT_CLICKED":
      return handleEditChat(state, payload);

    case "EDIT_CLOSE_CLICKED":
      return handleCancelEdit(state);

    case "SAVE_CLICKED":
      return handleSaveChat(state);

    case "FORWARD_CLICKED":
      return handleForwardClick(state, payload);

    case "FORWARD_TO_PERSON_CLICKED":
      return handleForwardChat(state, payload);

    case "DELETE_CLICKED":
      return handleDeleteChat(state, payload);

    case "INPUT_CHANGED":
      return handleInputChange(state, payload);

    case "ENTER_CLICKED":
      return handleKeyPress(state, payload);

    case "CLOSE_CLICKED":
      return handleCloseChat(state, payload);

    case "CHAT_MENU_CLICKED":
      return handleChatMenuClick(state);

    case "SEARCH_CLICKED":
      return handleSearchClick(state, payload);

    case "PERSON_MENU_CLICKED":
      return handlePersonMenuClick(state);

    case "CLOSE_MODAL_CLICKED":
      return handleCloseModalClick(state);

    case "LOAD_COMPLETED":
      return handleLoadComplete(state);

    default:
      return state;
  }
}
