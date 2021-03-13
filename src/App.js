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
    onLoadComplete,
    tempPersons,
    loaderStyle,
    Container,
    DeleteDialog,
  } = useImport();

  const [
    {
      selectedPersonId,
      persons,
      chatInputText,
      searchInputText,
      chatContent,
      dialogMode,
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
    chatMode: "",
    searchMode: "",
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(onLoadComplete());
    }, 1);
  }, [dispatch, onLoadComplete]);

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
        </Portal>
      </Context.Provider>
    </Container>
  );
}

export default App;
