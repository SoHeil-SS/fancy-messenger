import { utilsFunctions } from "../utilsFunctions";

const {
  objectConstructor,
  handleSortPersons,
  handleGetTime,
  handleFinallyPersons,
  handleFinallyChats,
  handleChatMaker,
  handleDraftChange,
  toaster,
} = utilsFunctions;

function handlePersonClick(state, personId) {
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
  } else if (selectedPersonId) {
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
    chatMode: null,
    persons,
  };
}

function handleAddChat(state) {
  const {
    chatContent,
    personIndex,
    persons,
    details,
    chats,
    chatInputText,
    newDate,
  } = objectConstructor(state);

  handleChatMaker(chats, [chatInputText, chatContent]);

  details.lastChatTime = newDate;
  handleDraftChange(details, "", null);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  handleSortPersons(persons, "lastChatTime");

  return {
    ...state,
    chatInputText: "",
    chatContent: "",
    chatMode: null,
    persons,
    forwardContent: "",
  };
}

//TODO forward to utilsFunctions
function handleCopyChat(state, chatText) {
  navigator.clipboard.writeText(chatText);

  return state;
}

function handleDeleteChat(state, chatId) {
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
    chatMode: null,
    persons,
  };
}

function handleEditChat(state, chatId) {
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

  return {
    ...state,
    persons,
    chatInputText: content,
    chatContent: content,
    chatMode: "edit",
    chatContentId: chatId,
  };
}

function handleSaveChat(state) {
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
  return {
    ...state,
    persons,
    chatInputText: details.draft,
    chatContent: null,
    chatMode: null,
    chatContentId: "",
  };
}

function handleForwardClick(state, forwardText) {
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
  return {
    ...state,
    persons,
    chatInputText: details.draft,
    modalMode: "forward",
    chatContent: null,
    forwardContent: forwardText,
  };
}

function handleForwardChat(state, personId) {
  const {
    persons,
    details,
    chats,
    personIndex,
    forwardContent,
  } = objectConstructor(state, null, personId);

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
    modalMode: false,
    chatMode: "forward",
    chatContent: forwardContent,
  };
}

//TODO what is this !!!
function handleKeyPress(state, e) {
  const { chatInputText, chatContent } = state;

  if (chatInputText) {
    if (e.key === "Enter" && !chatContent) return handleAddChat(state);
    if (e.key === "Enter" && chatContent) return handleSaveChat(state);
  }

  return state;
}

function handleInputChange(state, { text, whichInput }) {
  return {
    ...state,
    [whichInput]: text,
  };
}

function handleCloseChat(state) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatInputText,
    chatContent,
    searchMode,
    searchInputText,
  } = objectConstructor(state);

  const isModeChats = searchMode === "chats";

  handleDraftChange(details, chatInputText, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    selectedPersonId: null,
    persons,
    chatInputText: "",
    searchInputText: isModeChats ? "" : searchInputText,
    searchMode: isModeChats ? null : searchMode,
    chatContent: null,
  };
}

function handleCancelEdit(state) {
  const { details } = objectConstructor(state);

  return {
    ...state,
    chatContent: null,
    chatMode: null,
    chatInputText: details.draft,
  };
}

function handleSearchClick(state, searchMode) {
  return {
    ...state,
    searchMode,
    searchInputText: "",
  };
}

function handlePersonMenuClick(state) {
  return state;
}

function handleChatMenuClick(state) {
  return state;
}

function handleCloseModalClick(state) {
  return {
    ...state,
    searchInputText: "",
    modalMode: false,
  };
}

function handleLoadComplete(state) {
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

export const stateHandlers = {
  handleAddChat,
  handleCancelEdit,
  handleCloseChat,
  handleCopyChat,
  handleDeleteChat,
  handleEditChat,
  handleForwardChat,
  handleForwardClick,
  handleGetTime,
  handleInputChange,
  handleKeyPress,
  handlePersonClick,
  handleSaveChat,
  handleSortPersons,
  handleChatMenuClick,
  handleSearchClick,
  handlePersonMenuClick,
  handleCloseModalClick,
  toaster,
  handleLoadComplete,
};

// import { personClicked } from "../StateManager/actionCreator";

//  function onClickPerson(personId) {
//   return (dispatch, getState) => {
//     dispatch(personClicked(personId));
//   };
// }
