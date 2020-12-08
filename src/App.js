// import useThunkReducer from "react-hook-thunk-reducer";
import React, { useReducer, useEffect } from "react";
import { tempPersons } from "./stateManager/eventHandlers";
import { reducer } from "./stateManager/reducer";
import { ToastContainer, toast } from "react-toastify";
import DispatchContext from "./stateManager/dispatch";

import SearchBar from "./Components/personList/SearchBar";
import PersonList from "./Components/personList/PersonList";
import ChatContainer from "./Components/chatBox/ChatContainer";
import ContextMenu from "./Components/Others/ContextMenu";
import Portal from "./Components/Others/Portal";

import { menuId } from "./constants";

function App() {
  const [
    { selectedPersonId, persons, chatContent, isEditing, editingChat },
    dispatch,
  ] = useReducer(reducer, {
    selectedPersonId: null,
    persons: tempPersons,
    chatContent: "",
    isEditing: false,
    editingChat: "",
    editingChatId: null,
  });

  useEffect(() => {
    toast.info(
      `با کلیک راست روی هرکدوم از چت ها و یا کنارشون یه منو جدید باز میشه که باهاش میتونی اونارو مدیریت کنی 😊 `,
      {
        position: "top-right",
        closeOnClick: true,
        autoClose: 8800,
      }
    );
  }, []);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <div className="app_app__3mk8F">
          <div className="app_head__1Nu6Y"></div>
          <div className="app_main__1NOZK">
            <div className="chat_layout__2YPVn">
              <div className="chat_side__2kvyI">
                <SearchBar />
                <PersonList
                  selectedPersonId={selectedPersonId}
                  persons={persons}
                />
              </div>
              {selectedPersonId && (
                <>
                  <ChatContainer
                    selectedPersonId={selectedPersonId}
                    persons={persons}
                    chatContent={chatContent}
                    isEditing={isEditing}
                    editingChat={editingChat}
                  />
                </>
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
