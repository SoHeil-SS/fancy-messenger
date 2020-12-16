import { toast } from "react-toastify";
//TODO forward panel
let editingChatId = null;
let forwardContent = null;

export function handlePersonClick(state, personId) {
  const {
    selectedPersonId,
    isEditing,
    personIndex,
    prevPersonIndex,
    persons,
    details,
    chats,
    chatInputText,
  } = objectConstructor(state, null, personId);

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
    handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  }

  if (selectedPersonId) {
    const prevPerson = { ...persons[prevPersonIndex] };
    const prevDetails = { ...prevPerson.details };
    handleDraftChange(prevDetails, chatInputText, isEditing);
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
    isEditing,
    searchMode,
    personIndex,
    persons,
    details,
    chats,
    chatInputText,
    newDate,
  } = objectConstructor(state);

  handleChatMaker(
    chats,
    forwardContent && details.draft
      ? [chatInputText, details.draft]
      : [chatInputText]
  );

  details.lastChatTime = newDate;
  handleDraftChange(details, "", isEditing);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  handleSortPersons(persons, "lastChatTime");
  return {
    ...state,
    chatInputText: "",
    persons,
  };
}

export function handleCopyChat(state, chatText) {
  navigator.clipboard.writeText(chatText);
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
    isEditing,
  } = objectConstructor(state, chatId);
  const content = chats[chatIndex].self;
  // when clicking on person edit option. //FIXME contextMenu
  if (!content) return state;

  handleDraftChange(details, chatInputText, isEditing);
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
  //TODO state test
  chats[editingChatIndex].self = chatInputText;

  handleFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return {
    ...state,
    chatInputText: details.draft,
    isEditing: false,
    persons,
  };
}

export function handleForwardClick(state, forwardText) {
  const {
    isEditing,
    personIndex,
    persons,
    chatInputText,
    details,
    chats,
  } = objectConstructor(state);

  forwardContent = forwardText;
  handleDraftChange(details, chatInputText, isEditing);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    persons,
    chatInputText: details.draft,
    searchMode: "forward",
    modalShow: true,
    isEditing: false,
  };
}

export function handleForwardChat(state, personId) {
  const { persons, details, chats, personIndex } = objectConstructor(
    state,
    null,
    personId
  );

  details.unreadChatCounter = "";
  if (!details.showOnList) {
    details.showOnList = true;
  }

  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  console.log(details.draft);
  return {
    ...state,
    selectedPersonId: personId,
    persons,
    searchInputText: "",
    searchMode: null,
    chatInputText: forwardContent,
    modalShow: false,
  };
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
    isEditing,
    searchMode,
    searchInputText,
  } = objectConstructor(state);

  const whichSearch = searchMode === "chats";

  handleDraftChange(details, chatInputText, isEditing);
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
  for (let i = 0; i < index.length; i++) {
    persons.splice(index[i], 1, person[i]);
  }

  return persons;
}

export function handleDisplayMenu(e, show, chatId, content) {
  show(e, {
    props: { id: Number(chatId), text: content },
  });
}

export function idMaker() {
  return Math.random();
}

export function handleDraftChange(details, draft, isEditing) {
  if (!isEditing) details.draft = draft;
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

export function handleFilterPersons(searchMode, persons, searchInputText) {
  return searchMode === "persons"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons;
}

export function handleFilterForwardPersons(
  searchMode,
  persons,
  searchInputText
) {
  return searchMode === "forward"
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

export function handleCloseModalClick(state) {
  return {
    ...state,
    searchInputText: "",
    searchMode: null,
    modalShow: false,
  };
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

export function handleChatMaker(chats, chatContent) {
  forwardContent = null;
  for (let i = 0; i < chatContent.length; i++) {
    chats.push({
      self: chatContent[i],
      chatTime: Date.now(),
      chatId: idMaker(),
    });
  }
}
