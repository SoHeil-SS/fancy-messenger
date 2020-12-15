import { useImport } from "./imports";
//TODO lastSeen ,sort persons by name ,contextMenu on persons, pin persons,
function App() {
  const {
    useThunkReducer,
    useEffect,
    toast,
    DispatchContext,
    Portal,
    PersonContainer,
    ChatContainer,
    ForwardModal,
    ToastContainer,
    ContextMenu,
    reducer,
    onCloseModalClick,
    tempPersons,
    menuId,
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
      modalShow,
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
    modalShow: false,
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
              {selectedPersonId ? (
                <ChatContainer
                  selectedPersonId={selectedPersonId}
                  persons={persons}
                  searchInputText={searchInputText}
                  chatInputText={chatInputText}
                  searchMode={searchMode}
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
            <ForwardModal
              searchMode={searchMode}
              persons={persons}
              searchinputtext={searchInputText}
              show={modalShow}
              onHide={onCloseModalClick}
            />
          </Portal>
        </div>
      </DispatchContext.Provider>
    </>
  );
}

export default App;
