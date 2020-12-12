import { toast } from "react-toastify";

export function handlePersonClick(state, personId) {
  const {
    persons,
    details,
    chatContent,
    chats,
    personIndex,
    selectedPersonId,
    prevPersonIndex,
  } = objectConstructor(state, null, personId);

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
    handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  }

  if (selectedPersonId) {
    const prevPerson = { ...persons[prevPersonIndex] };
    const prevDetails = { ...prevPerson.details };
    handleDraftChange(prevDetails, chatContent);
    handleFinallyPersons(
      persons,
      [personIndex, prevPersonIndex],
      [
        { details, chats },
        { ...prevPerson, details: prevDetails },
      ]
    );
  }

  return {
    ...state,
    selectedPersonId: personId,
    chatContent: details.draft,
    isEditing: false,
    persons,
  };
}

export function handleAddChat(state) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatContent,
    newDate,
  } = objectConstructor(state);

  chats.push({
    self: chatContent,
    chatTime: newDate,
    chatId: idMaker(),
  });

  handleDraftChange(details, "");

  handleSortPersons(
    handleFinallyPersons(persons, [personIndex], [{ details, chats }])
  );

  return {
    ...state,
    chatContent: "",
    persons,
  };
}

export function handleCopyChat(state, chatText) {
  console.log(chatText);

  return state;
}

export function handleDeleteChat(state, chatId) {
  const {
    selectedPersonId,
    persons,
    personIndex,
    details,
    chats,
  } = objectConstructor(state, chatId);
  const chatsAfterDelete = chats.filter((chat) => chat.chatId !== chatId);
  const chatsLength = chatsAfterDelete.length;
  if (chatsLength) {
    handleFinallyPersons(
      persons,
      [personIndex],
      [{ details, chats: chatsAfterDelete }]
    );
  } else {
    persons.splice(personIndex, 1);
    toaster("error", details, "removed from list .");
    handleCloseChat();
  }

  return {
    ...state,
    chatContent: details.draft,
    selectedPersonId: chatsLength ? selectedPersonId : null,
    isEditing: false,
    persons,
  };
}

export function handleEditChat(state, chatId) {
  const {
    persons,
    personIndex,
    chatContent,
    details,
    chats,
    chatIndex,
  } = objectConstructor(state, chatId);
  const content = chats[chatIndex].self;
  // when clicking on person edit option. //FIXME contextMenu
  if (!content) {
    return state;
  }
  handleDraftChange(details, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    persons,
    isEditing: true,
    chatContent: content,
    editingChatId: chatId,
    editingChat: content,
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
  chats[editingChatIndex].self = chatContent;

  handleFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return {
    ...state,
    chatContent: details.draft,
    isEditing: false,
    persons,
  };
}

export function handleForwardChat(state, chatId) {
  console.log("forward clicked", chatId);

  return state;
}

export function handleSortPersons(persons) {
  persons.sort(
    (a, b) =>
      new Date(b.chats[b.chats.length - 1].chatTime) -
      new Date(a.chats[a.chats.length - 1].chatTime)
  );
}

export function handleKeyPress(state, e) {
  const { chatContent, isEditing } = state;

  if (chatContent) {
    if (e.key === "Enter" && !isEditing) return handleAddChat(state);
    if (e.key === "Enter" && isEditing) return handleSaveChat(state);
  }

  return state;
}

export function handleInputChange(state, chatContent) {
  return {
    ...state,
    chatContent,
  };
}

export function handleCloseChat(state) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatContent,
  } = objectConstructor(state);

  handleDraftChange(details, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  return {
    ...state,
    selectedPersonId: null,
    persons,
    chatContent: "",
    isEditing: false,
  };
}

export function handleCancelEdit(state) {
  const { details } = objectConstructor(state);

  return {
    ...state,
    isEditing: false,
    chatContent: details.draft,
  };
}

/**
 * @export
 * @param {*} time date by millisecond
 * @param {*} method1 string value like  : "getMonth","getHours",...
 * @param {*} method2 string value like : "getDate","getMinutes",...
 * @param {*} separator time separator like "/" , ":"
 * @return {*}
 */
export function handleGetTime(time, method1, method2, separator) {
  const dateNow = new Date(time);
  const time1 = dateNow[method1]();
  const time2 = dateNow[method2]();

  return `${method1 === "getMonth" ? time1 + 1 : time1}${separator}${time2}`;
}

/**
 *  @param {*} persons
 * @param {*} index array
 * @param {*} person array
 * @return {*} persons in arrays
 */
function handleFinallyPersons(persons, index, person) {
  for (let i = 0; i <= index.length - 1; i++) {
    persons.splice(index[i], 1, person[i]);
  }

  return persons;
}

export function handleDisplayMenu(e, show) {
  show(e, {
    props: { id: Number(e.currentTarget.id), text: e.target.textContent },
  });
}

export function idMaker() {
  return Math.random();
}

function handleDraftChange(details, draft) {
  details.draft = draft;
}

function toaster(type, details, text) {
  toast[type](`${details.personName} ${text}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function objectConstructor(
  {
    selectedPersonId,
    editingChatId,
    chatContent,
    persons,
    editingChat,
    isEditing,
  },
  chatId,
  personId
) {
  const id = personId ? personId : selectedPersonId;
  const { details, chats } = persons.find(
    (person) => person.details.personId === id
  );
  console.log(id);

  return {
    // VARIABLES =>
    details: { ...details },
    chats: [...chats],
    newDate: Date.now(),
    personIndex: persons.findIndex(
      (person) => person.details.personId === details.personId
    ),
    prevPersonIndex: persons.findIndex(
      (person) => person.details.personId === selectedPersonId
    ),
    chatIndex: chats.findIndex((chat) => chat.chatId === chatId),
    editingChatIndex: chats.findIndex((chat) => chat.chatId === editingChatId),

    // STATES =>
    selectedPersonId,
    editingChatId,
    persons: [...persons],
    isEditing,
    editingChat,
    chatContent,
  };
}
