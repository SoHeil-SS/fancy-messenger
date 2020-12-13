import { useImport } from "./imports";

function App() {
  const {
    useThunkReducer,
    useEffect,
    toast,
    DispatchContext,
    PersonList,
    ChatContainer,
    SearchBar,
    Portal,
    menuId,
    ToastContainer,
    ContextMenu,
    reducer,
    tempPersons,
  } = useImport();
  const [
    { selectedPersonId, persons, chatInputText, isEditing, editingChat },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: null,
    persons: tempPersons,
    chatInputText: "",
    isEditing: false,
    editingChat: "",
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

  const { details, chats } = selectedPersonId
    ? persons.find((person) => person.details.personId === selectedPersonId)
    : {};

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <div className="app_app__3mk8F">
          <div className="app_head__1Nu6Y"></div>
          <div className="app_main__1NOZK  ">
            <div className="chat_layout__2YPVn messenger-box">
              <div className="chat_side__2kvyI">
                <SearchBar />
                <PersonList
                  selectedPersonId={selectedPersonId}
                  persons={persons}
                />
              </div>
              {selectedPersonId ? (
                <ChatContainer
                  details={details}
                  chats={chats}
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
