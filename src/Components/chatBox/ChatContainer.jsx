import React from "react";
import { closeClicked } from "../../stateManager/actionCreator";
import { useDispatch } from "../../stateManager/dispatch";

import ChatInput from "./ChatInput";
import ChatMapper from "./ChatMapper";
import ChatTitleBar from "./ChatTitleBar";
import Editing from "./Editing";

function ChatContainer({
  selectedPerson,
  chatContent,
  isEditing,
  editingChat,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <ChatTitleBar
        avatar={selectedPerson.details.avatar}
        personName={selectedPerson.details.personName}
        onCloseChat={() => dispatch(closeClicked())}
      />
      <div
        style={{ backgroundColor: "lighcyan" }}
        className="chatDetail_chat-box__3peJu"
      >
        <ChatMapper chats={selectedPerson.chats} />
        <Editing isEditing={isEditing} editingChat={editingChat} />
        <ChatInput chatContent={chatContent} />
      </div>
    </div>
  );
}

export default ChatContainer;
