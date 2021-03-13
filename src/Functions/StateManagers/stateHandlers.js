import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

let deletingChatID = "";

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

function handlePersonClicked(state, personId) {
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

function handleAddNewChatClicked(state) {
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
function handleCopyChatClicked(state, chatText) {
  navigator.clipboard.writeText(chatText);

  return state;
}

function handleDeleteChatClicked(state, chatID) {
  deletingChatID = chatID;

  return { ...state, dialogMode: "deleteMessage" };
}

//FIXME
function handleConfirmDeleteChatClicked(state) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatMode,
    chatInputText,
  } = statesAndVariables(state, deletingChatID);

  handleFinallyPersons(
    persons,
    [personIndex],
    [{ details, chats: handleFilterDeletedChat(chats, deletingChatID) }]
  );

  return {
    ...state,
    persons,
    chatInputText: chatMode ? details.draft : chatInputText,
    chatContent: null,
    chatMode: null,
    snackState: "messageDeleted",
    dialogMode: "",
  };
}

function handleEditChatClicked(state, chatId) {
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

function handleConfirmEditChatClicked(state) {
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
    snackState: "messageSaved",
  };
}

function handleForwardChatClicked(state, forwardText) {
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

function handleSelectPersonToForwardChatClicked(state, personId) {
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
function handleChatInputKeyPress(state) {
  const { chatInputText, chatContent } = state;

  if (chatInputText) {
    if (!chatContent) return handleAddNewChatClicked(state);
    if (chatContent) return handleConfirmEditChatClicked(state);
  }

  return state;
}

function handleInputChange(state, { text, whichInput }) {
  return {
    ...state,
    [whichInput]: text,
  };
}

function handleChatBoxCloseClicked(state) {
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

function handleCancelEditChatClicked(state) {
  const { details } = statesAndVariables(state);

  return {
    ...state,
    chatContent: null,
    chatMode: null,
    chatInputText: details.draft,
  };
}

function handleSearchIconClicked(state, searchMode) {
  return {
    ...state,
    searchMode,
    searchInputText: "",
  };
}

function handlePersonMenuBarClicked(state) {
  return state;
}

function handleChatMenuBarClicked(state) {
  return state;
}

function handleCloseDialogClicked(state) {
  return {
    ...state,
    searchInputText: "",
    dialogMode: false,
  };
}

function handleAppLoadComplete(state) {
  toaster(
    "info",
    "",
    `برای مدیریت هر چت کافیه که روی چت و یا کنارش کلیک راست کنی 😊 `
  );
  return {
    ...state,
    loading: false,
  };
}

export const stateHandlers = {
  handleAddNewChatClicked,
  handleCancelEditChatClicked,
  handleChatBoxCloseClicked,
  handleCopyChatClicked,
  handleConfirmDeleteChatClicked,
  handleEditChatClicked,
  handleSelectPersonToForwardChatClicked,
  handleForwardChatClicked,
  handleGetTime,
  handleInputChange,
  handleChatInputKeyPress,
  handlePersonClicked,
  handleConfirmEditChatClicked,
  handleSortPersons,
  handleChatMenuBarClicked,
  handleSearchIconClicked,
  handlePersonMenuBarClicked,
  handleCloseDialogClicked,
  toaster,
  handleAppLoadComplete,
  handleDeleteChatClicked,
};

// import { personClicked } from "../StateManager/actionCreator";

//  function onClickPerson(personId) {
//   return (dispatch, getState) => {
//     dispatch(personClicked(personId));
//   };
// }
