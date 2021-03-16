import { useImport } from "./Imports/imports";

const App = () => {
  const {
    useThunkReducer,
    useEffect,
    Context,
    AppContainer,
    Grid,
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
      notifyMessage,
    },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: "",
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
    notifyMessage: "",
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(actionAppLoadComplete());
    }, 0);
  }, [dispatch, actionAppLoadComplete]);

  return (
    <Context.Provider
      value={{
        dispatch,
        selectedPersonId,
        persons,
        searchInputText,
        searchMode,
        notifyMessage,
      }}
    >
      <Grid container>
        <AppContainer
          loading={loading}
          chatMode={chatMode}
          chatInputText={chatInputText}
          selectedChatContent={selectedChatContent}
          notificationState={notificationState}
          appDrawerState={appDrawerState}
          dialogMode={dialogMode}
        />
      </Grid>
    </Context.Provider>
  );
};

export default App;
