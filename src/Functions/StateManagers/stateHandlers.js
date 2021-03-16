import { utilsFunctionsAndHooks } from "../utilsFunctionsAndHooks";

import { variables } from "../../Others/variables";

const {
  dialog: {
    messages: { loadIncomplete, startupMessage },
  },
  notificationMessage: { deleteMessage, successEdit },
} = variables;

let editingChatID,
  deletingChatID = "";

const {
  getStatesAndVariables,
  setSortPersonList,
  getTimeFromMilliseconds,
  setFinallyPersons,
  setEditedChats,
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
    chatMode,
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
    setDraftChange(prevDetails, chatMode ? prevDetails.draft : chatInputText);
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
    chatMode: null,
    persons,
  };
};

//TODO scroll window to last chat .
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
  };
};

const handleDeleteChatClicked = (state, chatID) => {
  deletingChatID = chatID;

  return { ...state, dialogMode: "deleteMessage" };
};

const handleConfirmDeleteChatClicked = (state) => {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatMode,
    chatInputText,
    selectedChatContent,
  } = getStatesAndVariables(state, deletingChatID);

  setFinallyPersons(
    persons,
    [personIndex],
    [{ details, chats: getFilterDeletedChat(chats, deletingChatID) }]
  );

  const chatIDsEquality = editingChatID === deletingChatID;

  return {
    ...state,
    persons,
    chatInputText: chatIDsEquality ? details.draft : chatInputText,
    selectedChatContent: chatIDsEquality ? "" : selectedChatContent,
    chatMode: chatIDsEquality ? "" : chatMode,
    notificationState: "delete",
    notifyMessage: deleteMessage,
    dialogMode: "",
  };
};

const handleEditChatClicked = (state, chatID) => {
  const { chats, chatIndex } = getStatesAndVariables(state, chatID);
  const content = chats[chatIndex].self;
  // when clicking on non-self edit option. //FIXME contextMenu
  if (!content) return state;
  // use clipboard for copy text .
  editingChatID = chatID;

  return {
    ...state,
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
  } = getStatesAndVariables(state, editingChatID);

  setEditedChats(chats, [chatContentIndex], [chatInputText]);
  setFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return {
    ...state,
    persons,
    chatInputText: details.draft,
    selectedChatContent: "",
    chatMode: "",
    notificationState: "success",
    notifyMessage: successEdit,
  };
};

const handleForwardChatClicked = (state, forwardText) => {
  return {
    ...state,
    dialogMode: "forward",
    selectedChatContent: forwardText,
    chatMode: "",
  };
};

const handleSelectPersonToForwardChatClicked = (state, personId) => {
  const { persons, details, chats, personIndex } = getStatesAndVariables(
    state,
    null,
    personId
  );

  details.unreadChatCounter = "";
  if (!details.showOnList) {
    details.showOnList = true;
  }

  setFinallyPersons(persons, [personIndex], [{ details, chats }]);

  return {
    ...state,
    persons,
    selectedPersonId: personId,
    chatInputText: details.draft,
    searchInputText: "",
    dialogMode: "",
    chatMode: "forward",
  };
};

const handleInputChange = (state, { text, whichInput }) => {
  return {
    ...state,
    [whichInput]: text,
  };
};

//TODO Cleanup close box clicked
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
    searchMode: isModeChats ? "" : searchMode,
    selectedChatContent: "",
  };
};

//TODO draft need fix .
const handleCancelEditChatClicked = (state) => {
  const { details } = getStatesAndVariables(state);

  return {
    ...state,
    selectedChatContent: "",
    chatMode: "",
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
  return { ...state, appDrawerState: !state.appDrawerState };
};

const handleChatMenuBarClicked = (state) => {
  return state;
};
//TODO name change
const handleCloseDialogClicked = (state) => {
  return {
    ...state,
    searchInputText: "",
    dialogMode: "",
  };
};

const handleAppLoadComplete = (state) => {
  toaster("info", "", startupMessage);
  return {
    ...state,
    loading: false,
  };
};

const handleSelectedPersonDraftChange = (
  state,
  { chatInputText, selectedPersonId }
) => {
  const { personIndex, persons, details, chats } = getStatesAndVariables(
    state,
    null,
    selectedPersonId
  );

  setDraftChange(details, chatInputText);
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
