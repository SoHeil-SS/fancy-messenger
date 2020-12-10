import React from "react";
import { closeClicked } from "../../stateManager/actionCreator";
import { useDispatch } from "../../stateManager/dispatch";
import ChatTitleBar from "./ChatTitleBar";

import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import Editing from "./Editing";

function ChatContainer({
  details,
  chats,
  chatContent,
  isEditing,
  editingChat,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      <ChatTitleBar
        avatar={details.avatar}
        personName={details.personName}
        onCloseChat={() => dispatch(closeClicked())}
      />
      <div className="chatDetail_chat-box__3peJu">
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
