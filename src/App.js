import { useImport } from "./Imports/imports";

const App = () => {
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
      selectedChatContent,
      dialogMode,
      notificationState,
      chatMode,
      searchMode,
      loading,
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
              selectedChatContent={selectedChatContent}
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
        {notificationState === "messageDeleted" && (
          <DeletedMessageSnack notificationState={!!notificationState} />
        )}
        {notificationState === "messageSaved" && (
          <SuccessSnack notificationState={!!notificationState} />
        )}
      </Portal>
    </Context.Provider>
  );
};

export default App;
