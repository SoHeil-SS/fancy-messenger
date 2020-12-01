import { idMaker, objectConstructor } from "../modules";

export function handlePersonClick(state, personId) {
  let {
    persons,
    details,
    chatContent,
    chats,
    personIndex,
    newPerson,
    prevPersonIndex,
    prevPerson,
  } = objectConstructor(state, null, personId);

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
  }
  if (chatContent) {
    prevPerson = { ...persons[prevPersonIndex] };
    const prevDetails = { ...prevPerson.details };
    const prevChats = [...prevPerson.chats];
    prevDetails.draft = chatContent;
    prevPerson = { details: prevDetails, chats: prevChats };
    newPerson = { details, chats };
    persons.splice(personIndex, 1, newPerson);
    persons.splice(prevPersonIndex, 1, prevPerson);
  } else {
    newPerson = { details, chats };
    persons.splice(personIndex, 1, newPerson);
  }

  return {
    ...state,
    prevPersonId: personId,
    selectedPerson: newPerson,
    draftContent: prevPerson ? prevPerson.details.draft : "",
    chatContent: "",
    prevPerson,
    persons: persons,
  };
}

export function handleAddChat(state) {
  let {
    persons,
    personIndex,
    details,
    chats,
    chatContent,
    draftContent,
    newDate,
    newPerson,
  } = objectConstructor(state);

  details.lastChatTime = newDate;
  details.lastChatText = draftContent ? draftContent : chatContent;
  details.draft = "";
  chats.push({
    me: draftContent ? draftContent : chatContent,
    chatTime: newDate,
    chatId: idMaker(),
  });
  newPerson = { details, chats };
  persons.splice(personIndex, 1, newPerson);

  return {
    ...state,
    chatContent: "",
    draftContent: "",
    persons: handleSortPersons(persons),
    selectedPerson: newPerson,
  };
}

export function handleDeleteChat(state, chatId) {
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

export function handleEditChat(state, chatId) {
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

export function handleSaveChat(state) {
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

export function handleForwardChat(state) {
  console.log("forward clicked");
  return state;
}

export function handleSortPersons(copiedPersons) {
  return copiedPersons.sort(
    (a, b) =>
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

export function handleKeyPress(state, e) {
  const { chatContent, draftContent, isEditing } = state;
  if (chatContent || draftContent) {
    if (e.key === "Enter" && !isEditing) return handleAddChat(state);
    else if (e.key === "Enter" && isEditing) {
      return handleSaveChat(state);
    }
  }
  return state;
}

export function handleInputChange(state, chatContent) {
  return {
    ...state,
    chatContent,
  };
}

export function handleDraftChange(state, draftContent) {
  return {
    ...state,
    draftContent,
  };
}

export function handleCloseChat(state) {
  return {
    ...state,
    chatContent: "",
    selectedPerson: null,
  };
}

export function handleCancelEdit(state) {
  return {
    ...state,
    isEditing: false,
    chatContent: "",
  };
}
