import React from "react";

import PersonListItem from "./PersonListItem";

import { handleGetDate, handleGetTime } from "../../modules";
import { useDispatch } from "../../stateManager/dispatch";
import { personClicked } from "../../stateManager/actionCreator";

function PersonList({ persons, SelectedPersonId }) {
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

    return (
      <PersonListItem
        key={personId}
        personId={personId}
        SelectedPersonId={SelectedPersonId}
        avatar={avatar}
        personName={personName}
        lastChatText={lastChatText}
        draft={draft}
        lastChatTime={handleGetTime(lastChatTime)}
        lastChatDate={handleGetDate(lastChatTime)}
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() => dispatch(personClicked(personId))}
      />
    );
  });

  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
