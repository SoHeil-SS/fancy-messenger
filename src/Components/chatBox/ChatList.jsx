import React from "react";
import { useContextMenu } from "react-contexify";

import { handleGetTime } from "../../stateManager/eventHandlers";

import ChatItem from "./ChatItem";

function ChatList({ chats, menuId }) {
  const { show } = useContextMenu({
    id: menuId,
  });

  function displayMenu(e) {
    show(e, {
      props: { id: Number(e.currentTarget.id), text: e.target.textContent },
    });
  }

  const chatList = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      chatId={chat.chatId}
      displayMenu={displayMenu}
      self={chat.self}
      person={chat.person}
      chatTime={handleGetTime(chat.chatTime, "getHours", "getMinutes", ":")}
      chatDate={handleGetTime(chat.chatTime, "getMonth", "getDate", "/")}
    />
  ));
  return (
    <>
      <ul className="chatDetail_messages-panel__3aOw8">{chatList}</ul>
    </>
  );
}

export default ChatList;
