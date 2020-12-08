import React from "react";
import { handleGetTime } from "../../stateManager/eventHandlers";
import { useDispatch } from "../../stateManager/dispatch";
import {
  deleteClicked,
  editClicked,
  forwardClicked,
} from "../../stateManager/actionCreator";
import { useContextMenu } from "react-contexify";

import ChatItem from "./ChatItem";

function ChatList({ chats, menuId }) {
  const dispatch = useDispatch();
  const { show } = useContextMenu({
    id: menuId,
  });
  function displayMenu(e) {
    show(e, { props: { id: Number(e.currentTarget.id) } });
  }

  // function handleItemClick({ event, props, data, triggerEvent }) {
  //   switch (event.currentTarget.id) {
  //     case "remove":
  //       console.log(props.id);
  //       break;
  //     case "share":
  //       break;
  //     case "email":
  //       break;
  //     case "sponsor":
  //       break;
  //     default:
  //       console.log("what the heck ???");
  //   }
  // }

  const chatList = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      id={chat.chatId}
      onContextMenu={displayMenu}
      self={chat.self}
      person={chat.person}
      chatTime={handleGetTime(chat.chatTime, "getHours", "getMinutes", ":")}
      chatDate={handleGetTime(chat.chatTime, "getMonth", "getDate", "/")}
      onDelete={() => dispatch(deleteClicked(chat.chatId))}
      onEdit={() => dispatch(editClicked(chat.chatId))}
      onForward={() => dispatch(forwardClicked(chat.chatId))}
    />
  ));
  return (
    <>
      <ul className="chatDetail_messages-panel__3aOw8">{chatList}</ul>
    </>
  );
}

export default ChatList;
