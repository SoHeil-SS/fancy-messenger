import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

import { variables } from "../../Others/variables";

const {
  dialog: {
    Messages: { loadIncomplete, startupMessage },
  },
} = variables;

let selectedChatID = "";

const {
  getStatesAndVariables,
  setSortPersonList,
  getTimeFromMilliseconds,
  setFinallyPersons,
  setFinallyChats,
  setNewPersonChats,
  setDraftChange,
  toaster,
  getFilterDeletedChat,
  setNewPersonDetails,
} = utilsFunctionsAndHooks;

const handlePersonClicked = (state, personId) => {
  const {
    selectedPersonId,
    personIndex,
    prevPersonIndex,
    persons,
    details,
    chats,
    chatInputText,
    loading,
    selectedChatContent,
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
    setDraftChange(prevDetails, chatInputText, selectedChatContent);
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
    selectedChatContent: "",
    chatMode: "",
    persons,
  };
};

const handleAddNewChatClicked = (state) => {
  const {
    selectedChatContent,
    personIndex,
    persons,
    details,
    chats,
    chatInputText,
    dateNow,
  } = getStatesAndVariables(state);

  setNewPersonChats(chats, [chatInputText, selectedChatContent]);
  setNewPersonDetails(details, "", dateNow);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);
  setSortPersonList(persons);

  return {
    ...state,
    persons,
    chatInputText: "",
    selectedChatContent: "",
    chatMode: "",
    forwardContent: "",
  };
};

//TODO forward to utilsFunctions

const handleDeleteChatClicked = (state, chatID) => {
  selectedChatID = chatID;

  return { ...state, dialogMode: "deleteMessage" };
};

//FIXME
const handleConfirmDeleteChatClicked = (state) => {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatMode,
    chatInputText,
  } = getStatesAndVariables(state, selectedChatID);

  setFinallyPersons(
    persons,
    [personIndex],
    [{ details, chats: getFilterDeletedChat(chats, selectedChatID) }]
  );

  return {
    ...state,
    persons,
    chatInputText: chatMode ? details.draft : chatInputText,
    selectedChatContent: null,
    chatMode: null,
    snackState: "messageDeleted",
    dialogMode: "",
  };
};

const handleEditChatClicked = (state, chatID) => {
  const {
    persons,
    personIndex,
    chatInputText,
    details,
    chats,
    chatIndex,
    selectedChatContent,
  } = getStatesAndVariables(state, chatID);
  const content = chats[chatIndex].self;
  // when clicking on non-self edit option. //FIXME contextMenu
  if (!content) return state;

  selectedChatID = chatID;

  setDraftChange(details, chatInputText, selectedChatContent);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    persons,
    chatInputText: content,
    selectedChatContent: content,
    chatMode: "edit",
  };
};

const handleConfirmEditChatClicked = (state) => {
  const {
    persons,
    details,
    chats,
    chatInputText,
    chatContentIndex,
    personIndex,
  } = getStatesAndVariables(state, selectedChatID);

  setFinallyChats(chats, [chatContentIndex], [chatInputText]);
  setFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return {
    ...state,
    persons,
    chatInputText: details.draft,
    selectedChatContent: null,
    chatMode: null,
    snackState: "messageSaved",
  };
};

const handleForwardChatClicked = (state, forwardText) => {
  const {
    selectedChatContent,
    personIndex,
    persons,
    chatInputText,
    details,
    chats,
  } = getStatesAndVariables(state);

  setDraftChange(details, chatInputText, selectedChatContent);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);
  return {
    ...state,
    persons,
    chatInputText: details.draft,
    dialogMode: "forward",
    selectedChatContent: "",
    forwardContent: forwardText,
    chatMode: "",
  };
};

const handleSelectPersonToForwardChatClicked = (state, personId) => {
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
    selectedChatContent: forwardContent,
  };
};

//TODO what is this !!!
const handleChatInputKeyPress = (state) => {
  const { chatMode } = state;

  if (chatMode === "edit") return handleConfirmEditChatClicked(state);
  return handleAddNewChatClicked(state);
};

const handleInputChange = (state, { text, whichInput }) => {
  return {
    ...state,
    [whichInput]: text,
  };
};

const handleChatBoxCloseClicked = (state) => {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatInputText,
    selectedChatContent,
    searchMode,
    searchInputText,
  } = getStatesAndVariables(state);

  const isModeChats = searchMode === "chats";

  setDraftChange(details, chatInputText, selectedChatContent);
  setFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    selectedPersonId: null,
    persons,
    chatInputText: "",
    searchInputText: isModeChats ? "" : searchInputText,
    searchMode: isModeChats ? null : searchMode,
    selectedChatContent: null,
  };
};

const handleCancelEditChatClicked = (state) => {
  const { details } = getStatesAndVariables(state);

  return {
    ...state,
    selectedChatContent: null,
    chatMode: null,
    chatInputText: details.draft,
  };
};

const handleSearchIconClicked = (state, searchMode) => {
  return {
    ...state,
    searchMode,
    searchInputText: "",
  };
};

const handlePersonMenuBarClicked = (state) => {
  return state;
};

const handleChatMenuBarClicked = (state) => {
  return state;
};

const handleCloseDialogClicked = (state) => {
  return {
    ...state,
    searchInputText: "",
    dialogMode: false,
  };
};

const handleAppLoadComplete = (state) => {
  toaster("info", "", startupMessage);
  return {
    ...state,
    loading: false,
  };
};

const handleSelectedPersonDraftChange = (state) => {
  const {
    personIndex,
    persons,
    details,
    chats,
    chatInputText,
    selectedChatContent,
  } = getStatesAndVariables(state);

  setDraftChange(details, chatInputText, selectedChatContent);
  setFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return { ...state, persons };
};

export const stateHandlers = {
  handleAddNewChatClicked,
  handleCancelEditChatClicked,
  handleChatBoxCloseClicked,
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
  handleSelectedPersonDraftChange,
};

// import { personClicked } from "../StateManager/actionCreator";

//  const onClickPerson(personId) {
//   return (dispatch, getState) => {
//     dispatch(personClicked(personId));
//   };
// }
