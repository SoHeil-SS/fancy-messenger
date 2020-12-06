import React, { useReducer } from "react";

import { tempPersons } from "./stateManager/eventHandlers";

import SearchBar from "./Components/personList/SearchBar";
import PersonList from "./Components/personList/PersonList";
import ChatContainer from "./Components/chatBox/ChatContainer";
import { reducer } from "./stateManager/reducer";

import DispatchContext from "./stateManager/dispatch";

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
              <ChatContainer
                selectedPersonId={selectedPersonId}
                persons={persons}
                chatContent={chatContent}
                isEditing={isEditing}
                editingChat={editingChat}
              />
            )}
          </div>
        </div>
      </div>
    </DispatchContext.Provider>
  );
}

export default App;
