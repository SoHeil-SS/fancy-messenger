import { useImport } from "./Imports/imports";

function App() {
  const {
    useThunkReducer,
    useEffect,
    Context,
    Portal,
    PersonContainer,
    ChatContainer,
    ContactsDialog,
    Loader,
    ToastContainer,
    ContextMenu,
    reducer,
    actionAppLoadComplete,
    tempPersons,
    loaderStyle,
    Container,
    DeleteDialog,
    SuccessSnack,
    DeletedMessageSnack,
  } = useImport();

  const [
    {
      selectedPersonId,
      persons,
      chatInputText,
      searchInputText,
      chatContent,
      dialogMode,
      snackState,
      chatMode,
      searchMode,
      loading,
    },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: "parvaneh",
    persons: tempPersons,
    chatInputText: "",
    searchInputText: "",
    chatContent: "",
    chatContentId: "",
    forwardContent: "",
    dialogMode: "",
    snackState: "",
    chatMode: "",
    searchMode: "",
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(actionAppLoadComplete());
    }, 1);
  }, [dispatch, actionAppLoadComplete]);

  return (
    <Container maxWidth="xl">
      <Context.Provider
        value={{
          dispatch,
          selectedPersonId,
          persons,
          searchInputText,
          searchMode,
        }}
      >
        <div className="app-bg-top"></div>
        <div className="app-box">
          <div className="messenger-box">
            <div className="person-container">
              <PersonContainer />
            </div>
            {loading && <Loader style={loaderStyle.main} />}
            {selectedPersonId ? (
              <ChatContainer
                chatMode={chatMode}
                chatInputText={chatInputText}
                chatContent={chatContent}
              />
            ) : (
              <div className="forBackground"></div>
            )}
          </div>
        </div>
        <Portal>
          <ToastContainer />
          <ContextMenu />
          {dialogMode === ("forward" || "contacts") && (
            <ContactsDialog dialogMode={!!dialogMode} />
          )}
          {dialogMode === "deleteMessage" && (
            <DeleteDialog dialogMode={!!dialogMode} />
          )}
          {snackState === "messageDeleted" && (
            <DeletedMessageSnack snackState={!!snackState} />
          )}
          {snackState === "messageSaved" && (
            <SuccessSnack snackState={!!snackState} />
          )}
        </Portal>
      </Context.Provider>
    </Container>
  );
}

export default App;
