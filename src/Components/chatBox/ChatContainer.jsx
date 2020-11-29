import React from "react";

import ChatInput from "./ChatInput";
import ChatMapper from "./ChatMapper";
import ChatTitleBar from "./ChatTitleBar";
import Editing from "./Editing";

function ChatContainer({
  selectedPerson,
  chatContent,
  isEditing,
  editingChat,
  onEditing,
  onAddChat,
  onKeyPress,
  onChangeInput,
  onCloseChat,
  onDelete,
  onEdit,
  onForward,
}) {
  return (
    <div>
      <ChatTitleBar
        avatar={selectedPerson.details.avatar}
        personName={selectedPerson.details.personName}
        onCloseChat={onCloseChat}
      />
      <div
        style={{ backgroundColor: "lighcyan" }}
        className="chatDetail_chat-box__3peJu"
      >
        <ChatMapper
          chats={selectedPerson.chats}
          onDelete={onDelete}
          onEdit={onEdit}
          onForward={onForward}
        />
        <Editing
          isEditing={isEditing}
          editingChat={editingChat}
          onEditing={onEditing}
        />
        <ChatInput
          isEditing={isEditing}
          chatContent={chatContent}
          onAddChat={onAddChat}
          onEditing={onEditing}
          onKeyPress={onKeyPress}
          onChangeInput={onChangeInput}
        />
      </div>
    </div>
  );
}

export default ChatContainer;
