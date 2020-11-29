import React, { useState } from "react";

import { idMaker, tempPersons } from "./modules";

import SearchBar from "./Components/personList/SearchBar";
import PersonList from "./Components/personList/PersonList";
import ChatContainer from "./Components/chatBox/ChatContainer";

function App() {
  const [chatContent, setChatContent] = useState("");
  const [persons, setPersons] = useState(tempPersons);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [editingChat, setEditingChat] = useState("");
  const [isEditing, setisEditing] = useState(false);

  const SelectedPersonId = selectedPerson
    ? selectedPerson.details.personId
    : "/*person not selected*/";

  function handlePersonClick(personId) {
    const copiedPersons = [...persons];
    const index = copiedPersons.findIndex(
      (person) => person.details.personId === personId
    );
    const details = { ...copiedPersons[index].details };
    const chats = [...copiedPersons[index].chats];

    if (details.unreadChatCounter) {
      details.unreadChatCounter = "";
    }
    const newPerson = { details, chats };
    copiedPersons.splice(index, 1, newPerson);

    setChatContent("");
    setPersons(copiedPersons);
    setSelectedPerson(newPerson);
  }

  function handleAddChat() {
    const copiedPersons = [...persons];
    const details = { ...selectedPerson.details };
    const chats = [...selectedPerson.chats];
    const index = copiedPersons.findIndex(
      (p) => p.details.personId === selectedPerson.details.personId
    );
    const newDate = Date.now();
    details.lastChatTime = newDate;
    details.lastChatText = chatContent;
    chats.push({
      me: chatContent,
      chatTime: newDate,
      chatId: idMaker(),
    });
    copiedPersons.splice(index, 1, { details, chats });
    setChatContent("");
    setPersons(handleSortPersons(copiedPersons));
    setSelectedPerson({ details, chats });
  }

  function handleDeleteChat(chatId) {
    const copiedPersons = [...persons];
    const details = { ...selectedPerson.details };
    const chats = selectedPerson.chats.filter((chat) => chat.chatId !== chatId);
    const personIndex = copiedPersons.findIndex(
      (p) => p.details.personId === selectedPerson.details.personId
    );

    if (chats.length) {
      const chatsLastIndex = chats.length - 1;
      details.lastChatTime = chats[chatsLastIndex].chatTime;

      chats[chatsLastIndex].me
        ? (details.lastChatText = chats[chatsLastIndex].me)
        : (details.lastChatText = chats[chatsLastIndex].person);

      const newPerson = { details, chats };
      copiedPersons.splice(personIndex, 1, newPerson);
      setSelectedPerson(newPerson);
    } else {
      copiedPersons.splice(personIndex, 1);
      handleCloseChat();
    }
    setChatContent("");
    setPersons(copiedPersons);
  }

  function handleEdit(chatId) {
    const copiedPersons = [...persons];
    const chats = [...selectedPerson.chats];
    const chatIndex = chats.findIndex((chat) => chat.chatId === chatId);
    if (isEditing) {
      setisEditing(false);
      setChatContent(chats[chatIndex].me);
      setEditingChat(chatContent);
    } else {
      const details = { ...selectedPerson.details };
      const personIndex = copiedPersons.findIndex(
        (person) => person.details.personId === selectedPerson.details.personId
      );
      chats[chatIndex].me = chatContent;
      setisEditing(true);
      copiedPersons.splice(personIndex, 1, { chats, details });
      setPersons(copiedPersons);
    }
  }

  function handleForward(chatId) {}

  function handleSortPersons(copiedPersons) {
    return copiedPersons.sort(
      (a, b) =>
        new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
    );
  }

  function handleKeyPress(e) {
    if (chatContent && e.key === "Enter" && !isEditing) {
      handleAddChat();
    } else handleEdit();
  }

  function handleChangeInput(e) {
    setChatContent(e.target.value);
  }

  function handleCloseChat() {
    setChatContent("");
    setSelectedPerson(null);
  }

  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <PersonList
              SelectedPersonId={SelectedPersonId}
              persons={persons}
              onPersonClick={handlePersonClick}
            />
          </div>
          {selectedPerson && (
            <ChatContainer
              selectedPerson={selectedPerson}
              chatContent={chatContent}
              isEditing={isEditing}
              editingChat={editingChat}
              onEditing={handleEdit}
              onAddChat={handleAddChat}
              onKeyPress={handleKeyPress}
              onChangeInput={handleChangeInput}
              onCloseChat={handleCloseChat}
              onDelete={handleDeleteChat}
              onEdit={handleEdit}
              onForward={handleForward}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
