import { useImport } from "./Imports/imports";

function App() {
  const {
    useThunkReducer,
    useEffect,
    Context,
    Portal,
    PersonContainer,
    ChatContainer,
    Contacts,
    Loader,
    ToastContainer,
    ContextMenu,
    reducer,
    onLoadComplete,
    tempPersons,
    loaderStyle,
    Container,
  } = useImport();

  const [
    {
      selectedPersonId,
      persons,
      chatInputText,
      searchInputText,
      chatContent,
      modalMode,
      chatMode,
      searchMode,
      loading,
    },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: "parvaneh",
    persons: tempPersons,
    chatInputText:
      "textarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icontextarea-icon",
    searchInputText: "",
    chatContent: "",
    chatContentId: "",
    forwardContent: "",
    modalMode: "",
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
          <Contacts modalMode={modalMode} />
        </Portal>
      </Context.Provider>
    </Container>
  );
}

export default App;
