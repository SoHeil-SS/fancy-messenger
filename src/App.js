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
    selectedPersonId: "",
    persons: tempPersons,
    chatInputText: "",
    searchInputText: "",
    chatContent: "",
    modalMode: "",
    chatMode: "",
    searchMode: "",
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(onLoadComplete());
    }, 3000);
  }, [dispatch, onLoadComplete]);

  return (
    <>
      <Context.Provider
        value={{
          dispatch,
          selectedPersonId,
          persons,
          searchInputText,
        }}
      >
        <div className="app_app__3mk8F">
          <div className="app_head__1Nu6Y"></div>
          <div className="app_main__1NOZK  ">
            <div className="chat_layout__2YPVn messenger-box">
              <div className="chat_side__2kvyI">
                <PersonContainer searchMode={searchMode} />
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
            <Contacts modalMode={modalMode} onHide={onCloseModalClick} />
          </Portal>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
