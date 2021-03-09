import { useImport } from "./Imports/imports";

function App() {
  const {
    useThunkReducer,
    useEffect,
    toast,
    DispatchContext,
    Portal,
    PersonContainer,
    ChatContainer,
    Contacts,
    Loader,
    ToastContainer,
    ContextMenu,
    reducer,
    onCloseModalClick,
    onLoadComplete,
    tempPersons,
    menuId,
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
    selectedPersonId: null,
    persons: tempPersons,
    chatInputText: "",
    searchInputText: "",
    chatContent: "",
    modalMode: false,
    chatMode: null,
    searchMode: null,
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(onLoadComplete());
    }, 3000);
  }, [toast, dispatch, onLoadComplete]);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <div className="app_app__3mk8F">
          <div className="app_head__1Nu6Y"></div>
          <div className="app_main__1NOZK  ">
            <div className="chat_layout__2YPVn messenger-box">
              <div className="chat_side__2kvyI">
                <PersonContainer
                  selectedPersonId={selectedPersonId}
                  searchInputText={searchInputText}
                  searchMode={searchMode}
                  persons={persons}
                />
              </div>
              {loading && (
                <Loader
                  style={{
                    margin: "33%",
                    width: "250px",
                    height: "250px",
                  }}
                />
              )}
              {selectedPersonId ? (
                <ChatContainer
                  chatMode={chatMode}
                  selectedPersonId={selectedPersonId}
                  persons={persons}
                  searchInputText={searchInputText}
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
            <ContextMenu menuId={menuId} />
            <Contacts
              modalMode={modalMode}
              persons={persons}
              searchinputtext={searchInputText}
              onHide={onCloseModalClick}
            />
          </Portal>
        </div>
      </DispatchContext.Provider>
    </>
  );
}

export default App;
