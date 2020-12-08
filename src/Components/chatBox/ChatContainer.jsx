import React from "react";
import { closeClicked } from "../../stateManager/actionCreator";
import { useDispatch } from "../../stateManager/dispatch";

import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatTitleBar from "./ChatTitleBar";
import Editing from "./Editing";

function ChatContainer({
  selectedPersonId,
  persons,
  chatContent,
  isEditing,
  editingChat,
}) {
  const dispatch = useDispatch();
  const { details, chats } = persons.find(
    (person) => person.details.personId === selectedPersonId
  );
  return (
    <div>
      <ChatTitleBar
        avatar={details.avatar}
        personName={details.personName}
        onCloseChat={() => dispatch(closeClicked())}
      />
      <div
        style={{ backgroundColor: "lighcyan" }}
        className="chatDetail_chat-box__3peJu"
      >
        <ChatList chats={chats} />
        <Editing isEditing={isEditing} editingChat={editingChat} />
        <ChatInput
          chatContent={chatContent}
          draft={details.draft}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}

export default ChatContainer;
