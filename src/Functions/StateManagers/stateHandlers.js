import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

const {
  statesAndVariables,
  handleSortPersons,
  handleGetTime,
  handleFinallyPersons,
  handleFinallyChats,
  handleChatMaker,
  handleDraftChange,
  toaster,
  handleFilterDeletedChat,
} = utilsFunctionsAndHooks;

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
    prevPerson,
    prevDetails,
  } = statesAndVariables(state, null, personId);

  if (loading) {
    toaster("dark", "", "لطفا تا کامل شدن بارگذاری صبر کنید ");
    return state;
  }

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
    handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  } else if (selectedPersonId) {
    handleDraftChange(prevDetails, chatInputText, chatContent);
    handleFinallyPersons(
      persons,
      [prevPersonIndex],
      [{ ...prevPerson, details: prevDetails }]
    );
  }

  return {
    ...state,
    selectedPersonId: personId,
    chatInputText: details.draft,
    chatContent: "",
    chatMode: "",
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
  } = statesAndVariables(state);

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
//FIXME
function handleDeleteChat(state, chatId) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatMode,
    chatInputText,
  } = statesAndVariables(state, chatId);

  return {
    ...state,
    dialogMode: "deleteMessage",
  };

  // handleFinallyPersons(
  //   persons,
  //   [personIndex],
  //   [{ details, chats: handleFilterDeletedChat(chats, chatId) }]
  // );

  // return {
  //   ...state,
  //   chatInputText: chatMode ? details.draft : chatInputText,
  //   chatContent: null,
  //   chatMode: null,
  //   persons,
  // };
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
  } = statesAndVariables(state, chatId);
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
  const {
    persons,
    details,
    chats,
    chatInputText,
    chatContentIndex,
    personIndex,
  } = statesAndVariables(state);

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
  } = statesAndVariables(state);

  handleDraftChange(details, chatInputText, chatContent);
  handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  return {
    ...state,
    persons,
    chatInputText: details.draft,
    dialogMode: "forward",
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
  } = statesAndVariables(state, null, personId);

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
    dialogMode: false,
    chatMode: "forward",
    chatContent: forwardContent,
  };
}

//TODO what is this !!!
function handleKeyPress(state) {
  const { chatInputText, chatContent } = state;

  if (chatInputText) {
    if (!chatContent) return handleAddChat(state);
    if (chatContent) return handleSaveChat(state);
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
  } = statesAndVariables(state);

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
  const { details } = statesAndVariables(state);

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
    dialogMode: false,
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
