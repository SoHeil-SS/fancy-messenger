import React from "react";

import { handleGetDate, handleGetTime } from "../../modules";
import { useDispatch } from "../../stateManager/dispatch";
import {
  deleteClicked,
  editClicked,
  forwardClicked,
} from "../../stateManager/actionCreator";

import ChatItem from "./ChatItem";

function ChatMapper({ chats }) {
  const dispatch = useDispatch();

  const chatList = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      me={chat.me}
      person={chat.person}
      chatTime={handleGetTime(chat.chatTime)}
      chatDate={handleGetDate(chat.chatTime)}
      onDelete={() => dispatch(deleteClicked(chat.chatId))}
      onEdit={() => dispatch(editClicked(chat.chatId))}
      onForward={() => dispatch(forwardClicked(chat.chatId))}
    />
  ));
  return <ul className="chatDetail_messages-panel__3aOw8">{chatList}</ul>;
}

export default ChatMapper;
