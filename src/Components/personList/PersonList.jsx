import React from "react";

import PersonListItem from "./PersonListItem";

import { handleGetTime } from "../../stateManager/eventHandlers";
import { useDispatch } from "../../stateManager/dispatch";
import { personClicked } from "../../stateManager/actionCreator";

function PersonList({ persons, selectedPersonId }) {
  const dispatch = useDispatch();
  const list = persons.map((personItem) => {
    const { chatTime, self, person } = personItem.chats[
      personItem.chats.length - 1
    ];
    const {
      personId,
      avatar,
      personName,
      draft,
      unreadChatCounter,
    } = personItem.details;
    const condition = personId === selectedPersonId;

    function onClickPerson(dispatch) {
      dispatch(personClicked(personId));
    }

    return (
      <PersonListItem
        key={personId}
        personId={personId}
        selectedPersonId={selectedPersonId}
        condition={condition}
        avatar={avatar}
        personName={personName}
        lastChatText={self ? self : person}
        draft={draft}
        lastChatTime={handleGetTime(chatTime, "getHours", "getMinutes", ":")}
        lastChatDate={handleGetTime(chatTime, "getMonth", "getDate", "/")}
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() => onClickPerson(dispatch)}
      />
    );
  });

  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
