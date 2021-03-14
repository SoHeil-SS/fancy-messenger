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
