import React from "react";
import { useContextMenu } from "react-contexify";

import { handleGetTime } from "../../stateManager/eventHandlers";

import ChatItem from "./ChatItem";

import { menuId } from "../../constants";

function ChatList({ chats }) {
  const { show } = useContextMenu({
    id: menuId,
  });
  const chatList = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      chatId={chat.chatId}
      self={chat.self}
      person={chat.person}
      chatTime={handleGetTime(chat.chatTime, "getHours", "getMinutes", ":")}
      chatDate={handleGetTime(chat.chatTime, "getMonth", "getDate", "/")}
      show={show}
    />
  ));
  return (
    <>
      <ul className="chatDetail_messages-panel__3aOw8">{chatList}</ul>
    </>
  );
}

export default ChatList;
