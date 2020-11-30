import { idMaker } from "../modules";

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
    // case "FORWARD_CLICKED":
    //   return handleForwardChat(state, payload);
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
  const { persons } = state;
  const copiedPersons = [...persons];
  const index = copiedPersons.findIndex(
    (person) => person.details.personId === personId
  );
  const details = { ...copiedPersons[index].details };
  const chats = [...copiedPersons[index].chats];

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
  }
  const newPerson = { details, chats };
  copiedPersons.splice(index, 1, newPerson);

  return {
    ...state,
    selectedPerson: newPerson,
    chatContent: "",
    persons: copiedPersons,
  };
}

function handleAddChat(state) {
  const { persons, selectedPerson, chatContent } = state;
  const copiedPersons = [...persons];
  const details = { ...selectedPerson.details };
  const chats = [...selectedPerson.chats];
  const index = copiedPersons.findIndex(
    (p) => p.details.personId === selectedPerson.details.personId
  );
  const newDate = Date.now();
  details.lastChatTime = newDate;
  details.lastChatText = chatContent;
  chats.push({
    me: chatContent,
    chatTime: newDate,
    chatId: idMaker(),
  });
  copiedPersons.splice(index, 1, { details, chats });
  return {
    ...state,
    chatContent: "",
    persons: handleSortPersons(copiedPersons),
    selectedPerson: { details, chats },
  };
}

function handleDeleteChat(state, chatId) {
  let newPerson = null;
  const { persons, selectedPerson } = state;
  const copiedPersons = [...persons];
  const details = { ...selectedPerson.details };
  const chats = selectedPerson.chats.filter((chat) => chat.chatId !== chatId);
  const personIndex = copiedPersons.findIndex(
    (p) => p.details.personId === selectedPerson.details.personId
  );

  if (chats.length) {
    const chatsLastIndex = chats.length - 1;

    details.lastChatTime = chats[chatsLastIndex].chatTime;
    chats[chatsLastIndex].me
      ? (details.lastChatText = chats[chatsLastIndex].me)
      : (details.lastChatText = chats[chatsLastIndex].person);
    newPerson = { details, chats };
    copiedPersons.splice(personIndex, 1, newPerson);
  } else {
    copiedPersons.splice(personIndex, 1);
    handleCloseChat();
  }
  return {
    ...state,
    chatContent: "",
    selectedPerson: newPerson,
    persons: copiedPersons,
  };
}

function handleEditChat(state, chatId) {
  const { persons, selectedPerson, isEditing, chatContent } = state;
  const copiedPersons = [...persons];
  const chats = [...selectedPerson.chats];
  const chatIndex = chats.findIndex((chat) => chat.chatId === chatId);
  if (!isEditing) {
    const text = chats[chatIndex].me;
    return {
      ...state,
      isEditing: true,
      chatContent: text,
      editingChat: text,
    };
  } else {
    const details = { ...selectedPerson.details };
    const personIndex = copiedPersons.findIndex(
      (person) => person.details.personId === selectedPerson.details.personId
    );
    chats[chatIndex].me = chatContent;
    copiedPersons.splice(personIndex, 1, { chats, details });
    return {
      ...state,
      isEditing: false,
      persons: copiedPersons,
    };
  }
}

function handleForwardChat(state, chatId) {
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
    handleAddChat(state);
    return handleAddChat(state);
  } else if (chatContent && e.key === "Enter" && isEditing) {
    return handleEditChat(state);
  }
  return state;
}

function handleInputChange(state, payload) {
  return {
    ...state,
    chatContent: payload,
  };
}

function handleCloseChat(state) {
  return {
    ...state,
    chatContent: "",
    selectedPerson: null,
  };
}
