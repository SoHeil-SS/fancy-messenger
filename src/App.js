import React, { useReducer } from "react";

import { tempPersons } from "./modules";

import SearchBar from "./Components/personList/SearchBar";
import PersonList from "./Components/personList/PersonList";
import ChatContainer from "./Components/chatBox/ChatContainer";
import { reducer } from "./stateManager/reducer";

import DispatchContext from "./stateManager/dispatch";

function App() {
  const [
    { chatContent, persons, selectedPerson, editingChat, isEditing },
    dispatch,
  ] = useReducer(reducer, {
    chatContent: "",
    persons: tempPersons,
    selectedPerson: null,
    editingChat: "",
    isEditing: false,
  });
  const SelectedPersonId = selectedPerson
    ? selectedPerson.details.personId
    : "/*person not selected*/";

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className="app_app__3mk8F">
        <div className="app_head__1Nu6Y"></div>
        <div className="app_main__1NOZK">
          <div className="chat_layout__2YPVn">
            <div className="chat_side__2kvyI">
              <SearchBar />
              <PersonList
                SelectedPersonId={SelectedPersonId}
                persons={persons}
              />
            </div>
            {selectedPerson && (
              <ChatContainer
                selectedPerson={selectedPerson}
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
