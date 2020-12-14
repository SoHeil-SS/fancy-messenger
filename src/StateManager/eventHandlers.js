import { toast } from "react-toastify";

let editingChatId = null;

export function handlePersonClick(state, personId) {
  const {
    persons,
    details,
    chatInputText,
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
    handleDraftChange(prevDetails, chatInputText);
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
    chatInputText: details.draft,
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
    chatInputText,
    newDate,
  } = objectConstructor(state);

  chats.push({
    self: chatInputText,
    chatTime: newDate,
    chatId: idMaker(),
  });
  details.lastChatTime = newDate;
  handleDraftChange(details, "");

  handleSortPersons(
    handleFinallyPersons(persons, [personIndex], [{ details, chats }]),
    details,
    chats
  );

  return {
    ...state,
    chatInputText: "",
    persons,
  };
}

export function handleCopyChat(state, chatText) {
  console.log(chatText);

  return state;
}

export function handleDeleteChat(state, chatId) {
  const { persons, personIndex, details, chats } = objectConstructor(
    state,
    chatId
  );

  handleFinallyPersons(
    persons,
    [personIndex],
    [{ details, chats: chats.filter((chat) => chat.chatId !== chatId) }]
  );

  return {
    ...state,
    chatInputText: details.draft,
    isEditing: false,
    persons,
  };
}

export function handleEditChat(state, chatId) {
  const {
    persons,
    personIndex,
    chatInputText,
    details,
    chats,
    chatIndex,
  } = objectConstructor(state, chatId);
  const content = chats[chatIndex].self;
  // when clicking on person edit option. //FIXME contextMenu
  if (!content) {
    return state;
  }
  handleDraftChange(details, chatInputText);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  editingChatId = chatId;
  return {
    ...state,
    persons,
    isEditing: true,
    chatInputText: content,
    editingChat: content,
  };
}

export function handleSaveChat(state) {
  const {
    persons,
    details,
    chats,
    chatInputText,
    editingChatIndex,
    personIndex,
  } = objectConstructor(state);
  chats[editingChatIndex].self = chatInputText;

  handleFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return {
    ...state,
    chatInputText: details.draft,
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
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

export function handleKeyPress(state, e) {
  const { chatInputText, isEditing } = state;

  if (chatInputText) {
    if (e.key === "Enter" && !isEditing) return handleAddChat(state);
    if (e.key === "Enter" && isEditing) return handleSaveChat(state);
  }

  return state;
}

export function handleInputChange(state, { text, whichInput }) {
  return {
    ...state,
    [whichInput]: text,
  };
}

export function handleCloseChat(state) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatInputText,
    searchMode,
    searchInputText,
  } = objectConstructor(state);

  const whichSearch = searchMode === "chats";

  handleDraftChange(details, chatInputText);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    persons,
    selectedPersonId: null,
    chatInputText: "",
    searchInputText: whichSearch ? "" : searchInputText,
    searchMode: whichSearch ? null : searchMode,
    isEditing: false,
  };
}

export function handleCancelEdit(state) {
  const { details } = objectConstructor(state);

  return {
    ...state,
    isEditing: false,
    chatInputText: details.draft,
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
  if (!time) return "";
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

export function handleDraftChange(details, draft) {
  details.draft = draft;
}

export function toaster(type, detail, text) {
  toast[type](`${detail} ${text}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function handleSearchClick(state, value) {
  return {
    ...state,
    searchMode: value,
    searchInputText: "",
  };
}

export function handlePersonMenuClick(state) {
  return state;
}

export function handleChatMenuClick(state) {
  return state;
}

export function objectConstructor(
  {
    selectedPersonId,
    chatInputText,
    persons,
    editingChat,
    isEditing,
    searchMode,
    searchInputText,
  },
  chatId,
  personId
) {
  const id = personId ? personId : selectedPersonId;
  const { details, chats } = persons.find(
    (person) => person.details.personId === id
  );

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
    persons: [...persons],
    isEditing,
    editingChat,
    chatInputText,
    searchMode,
    searchInputText,
  };
}

export function handleFilterChats(
  chats,
  searchInputText,
  searchMode,
  selectedPersonId
) {
  return searchMode === "chats" && selectedPersonId
    ? chats.filter((chat) =>
        chat.self
          ? chat.self.toLowerCase().includes(searchInputText.toLowerCase())
          : chat.person.toLowerCase().includes(searchInputText.toLowerCase())
      )
    : chats;
}

export function handleFilterPerson(searchMode, persons, searchInputText) {
  return searchMode === "persons"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons;
}

export function handleSelectedPerson(selectedPersonId, persons) {
  return selectedPersonId
    ? persons.find((person) => person.details.personId === selectedPersonId)
    : {};
}
