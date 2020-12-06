import {
  handleAddChat,
  handleDeleteChat,
  handlePersonClick,
  handleCancelEdit,
  handleCloseChat,
  handleEditChat,
  handleForwardChat,
  handleInputChange,
  handleKeyPress,
  handleSaveChat,
} from "./eventHandlers";

export function reducer(state, action) {
  const payload = action.payload;

  switch (action.type) {
    case "PERSON_CLICKED":
      return handlePersonClick(state, payload);
    case "ADD_CLICKED":
      return handleAddChat(state);
    case "DELETE_CLICKED":
      return handleDeleteChat(state, payload);
    case "EDIT_CLICKED":
      return handleEditChat(state, payload);
    case "SAVE_CLICKED":
      return handleSaveChat(state);
    case "FORWARD_CLICKED":
      return handleForwardChat(state, payload);
    case "EDIT_CLOSE_CLICKED":
      return handleCancelEdit(state);
    case "INPUT_CHANGED":
      return handleInputChange(state, payload);
    case "ENTER_CLICKED":
      return handleKeyPress(state, payload);
    case "CLOSE_CLICKED":
      return handleCloseChat(state);

    default:
      return state;
  }
}
