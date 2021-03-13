import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

import { variables } from "../../Others/variables";

const {
  dialog: { loadIncomplete, startupMessage },
} = variables;

let deletingChatID = "";

const {
  getStatesAndVariables,
  setSortPersonList,
  getTimeFromMilliseconds,
  setFinallyPersons,
  setFinallyChats,
  setNewChats,
  setDraftChange,
  toaster,
  getFilterDeletedChat,
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
  } = getStatesAndVariables(state, null, personId);

  if (loading) {
    toaster("dark", "", loadIncomplete);
    return state;
  }

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
    setFinallyPersons(persons, [personIndex], [{ details, chats }]);
  } else if (selectedPersonId) {
    setDraftChange(prevDetails, chatInputText, chatContent);
    setFinallyPersons(
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
  } = getStatesAndVariables(state);

  setNewChats(chats, [chatInputText, chatContent]);

  details.lastChatTime = newDate;
  setDraftChange(details, "", null);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);
  setSortPersonList(persons, "lastChatTime");

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
  } = getStatesAndVariables(state, deletingChatID);

  setFinallyPersons(
    persons,
    [personIndex],
    [{ details, chats: getFilterDeletedChat(chats, deletingChatID) }]
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
  } = getStatesAndVariables(state, chatId);
  const content = chats[chatIndex].self;
  // when clicking on non-self edit option. //FIXME contextMenu
  if (!content) return state;

  setDraftChange(details, chatInputText, chatContent);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);

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
  } = getStatesAndVariables(state);

  setFinallyChats(chats, [chatContentIndex], [chatInputText]);
  setFinallyPersons(persons, [personIndex], [{ chats, details }]);

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
  } = getStatesAndVariables(state);

  setDraftChange(details, chatInputText, chatContent);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);
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
  } = getStatesAndVariables(state, null, personId);

  details.unreadChatCounter = "";
  if (!details.showOnList) {
    details.showOnList = true;
  }

  setFinallyPersons(persons, [personIndex], [{ details, chats }]);

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
  } = getStatesAndVariables(state);

  const isModeChats = searchMode === "chats";

  setDraftChange(details, chatInputText, chatContent);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);

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
  const { details } = getStatesAndVariables(state);

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
  toaster("info", "", startupMessage);
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
  getTimeFromMilliseconds,
  handleInputChange,
  handleChatInputKeyPress,
  handlePersonClicked,
  handleConfirmEditChatClicked,
  setSortPersonList,
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
