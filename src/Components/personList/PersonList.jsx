import React from "react";

import PersonListItem from "./PersonListItem";

import { handleGetTime } from "../../stateManager/eventHandlers";
import { useDispatch } from "../../stateManager/dispatch";
import { personClicked } from "../../stateManager/actionCreator";

function PersonList({ persons, selectedPersonId }) {
  const dispatch = useDispatch();
  const list = persons.map((person) => {
    const {
      personId,
      avatar,
      personName,
      lastChatText,
      draft,
      lastChatTime,
      unreadChatCounter,
    } = person.details;

    function onClickPerson(dispatch) {
      dispatch(personClicked(personId));
    }

    return (
      <PersonListItem
        key={personId}
        personId={personId}
        selectedPersonId={selectedPersonId}
        avatar={avatar}
        personName={personName}
        lastChatText={lastChatText}
        draft={draft}
        lastChatTime={handleGetTime(
          lastChatTime,
          "getHours",
          "getMinutes",
          ":"
        )}
        lastChatDate={handleGetTime(lastChatTime, "getMonth", "getDate", "/")}
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() => onClickPerson(dispatch)}
      />
    );
  });

  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
