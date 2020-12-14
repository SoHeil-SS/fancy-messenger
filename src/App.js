import { useImport } from "./imports";

function App() {
  const {
    useThunkReducer,
    useEffect,
    toast,
    DispatchContext,
    PersonContainer,
    ChatContainer,
    Portal,
    menuId,
    ToastContainer,
    ContextMenu,
    reducer,
    tempPersons,
    handleFilterChats,
    handleFilterPerson,
    handleSelectedPerson,
  } = useImport();

  const [
    {
      selectedPersonId,
      persons,
      chatInputText,
      searchInputText,
      isEditing,
      editingChat,
      searchMode,
    },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: null,
    persons: tempPersons,
    chatInputText: "",
    searchInputText: "",
    isEditing: false,
    editingChat: "",
    searchMode: false,
  });

  useEffect(() => {
    toast.dark(
      `برای مدیریت هر چت کافیه که روی چت و یا کنارش کلیک راست کنی 😊 `,
      {
        position: "top-right",
        closeOnClick: true,
        autoClose: 8800,
      }
    );
  }, [toast]);

  const { details, chats } = handleSelectedPerson(selectedPersonId, persons);

  const filteredChats = handleFilterChats(
    chats,
    searchInputText,
    searchMode,
    selectedPersonId
  );

  const filteredPersons = handleFilterPerson(
    searchMode,
    persons,
    searchInputText
  );

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
                  persons={filteredPersons}
                />
              </div>
              {selectedPersonId ? (
                <ChatContainer
                  details={details}
                  chats={filteredChats}
                  chatInputText={chatInputText}
                  isEditing={isEditing}
                  editingChat={editingChat}
                />
              ) : (
                <div className="forBackground"></div>
              )}
            </div>
          </div>
          <Portal>
            <ToastContainer />
            <ContextMenu menuId={menuId} />
          </Portal>
        </div>
      </DispatchContext.Provider>
    </>
  );
}

export default App;
