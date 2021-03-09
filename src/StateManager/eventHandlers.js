import { toast } from "react-toastify";
//TODO forward panel
let chatContentId,
  forwardContent = null;

export function handlePersonClick(state, personId) {
  const {
    selectedPersonId,
    personIndex,
    prevPersonIndex,
    persons,
    details,
    chats,
    chatInputText,
    loading,
    chatContent,
  } = objectConstructor(state, null, personId);

  if (loading) {
    toaster("dark", "", "لطفا تا کامل شدن بارگذاری صبر کنید ");
    return state;
  }

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
    handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  }

  if (selectedPersonId) {
    const prevPerson = { ...persons[prevPersonIndex] };
    const prevDetails = { ...prevPerson.details };
    handleDraftChange(prevDetails, chatInputText, chatContent);
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
    chatContent: null,
    mode: null,
    persons,
  };
}

export function handleAddChat(state) {
  const {
    chatContent,
    personIndex,
    persons,
    details,
    chats,
    chatInputText,
    newDate,
  } = objectConstructor(state);

  handleChatMaker(
    chats,
    forwardContent && (details.draft || chatInputText)
      ? [chatContent, details.draft || chatInputText]
      : [chatInputText]
  );
  details.draft = "";
  details.lastChatTime = newDate;
  handleDraftChange(details, "", chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  handleSortPersons(persons, "lastChatTime");

  return {
    ...state,
    chatInputText: "",
    chatContent: "",
    mode: null,
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
    chatContent: null,
    mode: null,
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
    chatContent,
  } = objectConstructor(state, chatId);
  const content = chats[chatIndex].self;
  // when clicking on non-self edit option. //FIXME contextMenu
  if (!content) return state;

  handleDraftChange(details, chatInputText, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  chatContentId = chatId;
  return {
    ...state,
    persons,
    chatInputText: content,
    chatContent: content,
    mode: "edit",
  };
}

export function handleSaveChat(state) {
  let {
    persons,
    details,
    chats,
    chatInputText,
    chatContentIndex,
    personIndex,
  } = objectConstructor(state);

  handleFinallyChats(chats, [chatContentIndex], [chatInputText]);
  handleFinallyPersons(persons, [personIndex], [{ chats, details }]);
  chatContentId = null;

  return {
    ...state,
    chatInputText: details.draft,
    chatContent: null,
    mode: null,
    persons,
  };
}

export function handleForwardClick(state, forwardText) {
  const {
    chatContent,
    personIndex,
    persons,
    chatInputText,
    details,
    chats,
  } = objectConstructor(state);

  handleDraftChange(details, chatInputText, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  forwardContent = forwardText;

  return {
    ...state,
    persons,
    chatInputText: details.draft,
    mode: "forward",
    chatContent: null,
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

  return {
    ...state,
    selectedPersonId: personId,
    persons,
    chatInputText: details.draft,
    searchInputText: "",
    mode: "forwardContentToPanel",
    chatContent: forwardContent,
  };
}

export function handleSortPersons(persons) {
  persons.sort(
    (a, b) =>
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

export function handleKeyPress(state, e) {
  const { chatInputText, chatContent } = state;

  if (chatInputText) {
    if (e.key === "Enter" && !chatContent) return handleAddChat(state);
    if (e.key === "Enter" && chatContent) return handleSaveChat(state);
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
    chatContent,
    mode,
    searchInputText,
  } = objectConstructor(state);

  const isModeChats = mode === "chats";

  handleDraftChange(details, chatInputText, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    selectedPersonId: null,
    persons,
    chatInputText: "",
    searchInputText: isModeChats ? "" : searchInputText,
    mode: isModeChats ? null : mode,
    chatContent: null,
  };
}

export function handleCancelEdit(state) {
  const { details } = objectConstructor(state);

  return {
    ...state,
    chatContent: null,
    mode: null,
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
}

export function handleDisplayMenu(e, show, chatId, content) {
  show(e, {
    props: { id: Number(chatId), text: content },
  });
}

export function idMaker() {
  return Math.random();
}

export function handleDraftChange(details, draft, chatContent) {
  if (!chatContent) details.draft = draft;
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

export function handleSearchClick(state, searchMode) {
  const {
    details,
    chats,
    mode,
    chatInputText,
    persons,
    personIndex,
  } = objectConstructor(state);
  console.log(mode);
  if (mode !== "edit") details.draft = chatInputText;

  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    mode: searchMode,
    persons,
    searchInputText: "",
    chatInputText: details.draft ? details.draft : chatInputText,
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
  mode,
  selectedPersonId
) {
  return mode === "chats" && selectedPersonId
    ? chats.filter((chat) =>
        chat.self
          ? chat.self.toLowerCase().includes(searchInputText.toLowerCase())
          : chat.person.toLowerCase().includes(searchInputText.toLowerCase())
      )
    : chats;
}

export function handleFilterPersons(mode, persons, searchInputText) {
  return mode === "persons"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons;
}

export function handleFinallyChats(chats, chatIndex, newChatContent) {
  for (let i = 0; i < chatIndex.length; i++) {
    const chat = {
      ...chats[chatIndex[i]],
    };
    chat.self = newChatContent[i];
    chats.splice(chatIndex[i], 1, chat);
  }
}

export function handleFilterForwardPersons(mode, persons, searchInputText) {
  return mode === "forward"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons;
}

export function handleSelectedPerson(selectedPersonId, persons) {
  return persons.find((person) => person.details.personId === selectedPersonId);
}

export function handleCloseModalClick(state) {
  return {
    ...state,
    searchInputText: "",
    mode: null,
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

export function handleLoadComplete(state) {
  toaster(
    "dark",
    "",
    `برای مدیریت هر چت کافیه که روی چت و یا کنارش کلیک راست کنی 😊 `
  );
  return {
    ...state,
    loading: false,
  };
}

export function stateTest(state, others) {
  console.log(others);
  console.log(state);
}

/**
 * @export
 * @param {*} state
 * @param {*} chatId
 * @param {*} personId
 * @return {*}
 */
export function objectConstructor(
  {
    selectedPersonId,
    chatInputText,
    persons,
    chatContent,
    mode,
    searchInputText,
    loading,
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
    chatContentIndex: chats.findIndex((chat) => chat.chatId === chatContentId),

    // STATES =>
    selectedPersonId,
    persons: [...persons],
    chatContent,
    chatInputText,
    mode,
    searchInputText,
    loading,
  };
}
