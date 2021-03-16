import { useImport } from "./Imports/imports";

const App = () => {
  const {
    useThunkReducer,
    useEffect,
    Context,
    AppContainer,

    reducer,
    actionAppLoadComplete,
    tempPersons,
  } = useImport();

  const [
    {
      selectedPersonId,
      persons,
      chatInputText,
      searchInputText,
      selectedChatContent,
      dialogMode,
      notificationState,
      chatMode,
      searchMode,
      loading,
      appDrawerState,
    },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: "parvaneh",
    persons: tempPersons,
    chatInputText: "",
    searchInputText: "",
    selectedChatContent: "",
    dialogMode: "",
    notificationState: "",
    chatMode: null,
    searchMode: "",
    loading: true,
    appDrawerState: false,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(actionAppLoadComplete());
    }, 1);
  }, [dispatch, actionAppLoadComplete]);

  return (
    <Context.Provider
      value={{
        dispatch,
        selectedPersonId,
        persons,
        searchInputText,
        searchMode,
      }}
    >
      <AppContainer
        loading={loading}
        chatMode={chatMode}
        chatInputText={chatInputText}
        selectedChatContent={selectedChatContent}
        notificationState={notificationState}
        appDrawerState={appDrawerState}
        dialogMode={dialogMode}
      />
    </Context.Provider>
  );
};

export default App;
