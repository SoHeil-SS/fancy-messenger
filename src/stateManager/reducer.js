import { idMaker, objectConstructor } from "../modules";

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

function handlePersonClick(state, personId) {
  let { persons, details, chats, personIndex, newPerson } = objectConstructor(
    state,
    null,
    personId
  );

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
  }
  newPerson = { details, chats };
  persons.splice(personIndex, 1, newPerson);

  return {
    ...state,
    selectedPerson: newPerson,
    chatContent: "",
    persons: persons,
  };
}

function handleAddChat(state) {
  let {
    persons,
    personIndex,
    details,
    chats,
    chatContent,
    newDate,
    newPerson,
  } = objectConstructor(state);

  details.lastChatTime = newDate;
  details.lastChatText = chatContent;
  chats.push({
    me: chatContent,
    chatTime: newDate,
    chatId: idMaker(),
  });
  newPerson = { details, chats };
  persons.splice(personIndex, 1, newPerson);

  return {
    ...state,
    chatContent: "",
    persons: handleSortPersons(persons),
    selectedPerson: newPerson,
  };
}

function handleDeleteChat(state, chatId) {
  let {
    persons,
    personIndex,
    details,
    chatsAfterDelete,
    chatsLastIndex,
    newPerson,
  } = objectConstructor(state, chatId);

  if (chatsAfterDelete.length) {
    details.lastChatTime = chatsAfterDelete[chatsLastIndex].chatTime;
    chatsAfterDelete[chatsLastIndex].me
      ? (details.lastChatText = chatsAfterDelete[chatsLastIndex].me)
      : (details.lastChatText = chatsAfterDelete[chatsLastIndex].person);
    newPerson = { details, chats: chatsAfterDelete };
    persons.splice(personIndex, 1, newPerson);
  } else {
    persons.splice(personIndex, 1);
    handleCloseChat();
  }

  return {
    ...state,
    chatContent: "",
    selectedPerson: newPerson,
    persons,
  };
}

function handleEditChat(state, chatId) {
  const { chats, chatIndex } = objectConstructor(state, chatId);
  const newText = chats[chatIndex].me;

  return {
    ...state,
    isEditing: true,
    editingChatId: chatId,
    chatContent: newText,
    editingChat: newText,
  };
}

function handleSaveChat(state) {
  const {
    persons,
    details,
    chats,
    chatContent,
    editingChatIndex,
    personIndex,
  } = objectConstructor(state);

  chats[editingChatIndex].me = chatContent;
  if (chats.length - 1 === editingChatIndex) {
    details.lastChatText = chatContent;
  }
  persons.splice(personIndex, 1, { chats, details });

  return {
    ...state,
    chatContent: "",
    isEditing: false,
    persons,
  };
}

function handleForwardChat(state, chatId) {
  console.log("forward clicked");
  return state;
}

function handleSortPersons(copiedPersons) {
  return copiedPersons.sort(
    (a, b) =>
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

function handleKeyPress(state, e) {
  const { chatContent, isEditing } = state;
  if (chatContent && e.key === "Enter" && !isEditing) {
    return handleAddChat(state);
  } else if (e.key === "Enter" && isEditing) {
    return handleSaveChat(state);
  }
  return state;
}

function handleInputChange(state, chatContent) {
  return {
    ...state,
    chatContent,
  };
}

function handleCloseChat(state) {
  return {
    ...state,
    chatContent: "",
    selectedPerson: null,
  };
}

function handleCancelEdit(state) {
  return {
    ...state,
    isEditing: false,
    chatContent: "",
  };
}
