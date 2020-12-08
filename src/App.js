import React, { useEffect } from "react";
import useThunkReducer from "react-hook-thunk-reducer";
import { tempPersons } from "./stateManager/eventHandlers";
import { reducer } from "./stateManager/reducer";

import DispatchContext from "./stateManager/dispatch";

import SearchBar from "./Components/personList/SearchBar";
import PersonList from "./Components/personList/PersonList";
import ChatContainer from "./Components/chatBox/ChatContainer";
import ContextMenu from "./Components/Others/ContextMenu";

import { menuId } from "./constants";

function App() {
  const [
    { selectedPersonId, persons, chatContent, isEditing, editingChat },
    dispatch,
  ] = useThunkReducer(reducer, {
    selectedPersonId: null,
    persons: tempPersons,
    chatContent: "",
    isEditing: false,
    editingChat: "",
    editingChatId: null,
  });

  useEffect(() => {
    setTimeout(() => {
      alert("Right click on chat item to see options");
    }, 3500);
  }, []);

  return (
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
                  menuId={menuId}
                  persons={persons}
                  chatContent={chatContent}
                  isEditing={isEditing}
                  editingChat={editingChat}
                />
                <ContextMenu menuId={menuId} />
              </>
            )}
          </div>
        </div>
      </div>
    </DispatchContext.Provider>
  );
}

export default App;
