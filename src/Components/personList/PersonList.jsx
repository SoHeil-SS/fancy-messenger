import React from "react";

import PersonListItem from "./PersonListItem";

import { handleGetDate, handleGetTime } from "../../modules";
import { useDispatch } from "../../stateManager/dispatch";
import { personClicked } from "../../stateManager/actionCreator";

function PersonList({ persons, SelectedPersonId }) {
  const dispatch = useDispatch();

  const list = persons.map((person) => {
    return (
      <PersonListItem
        key={person.details.personId}
        personId={person.details.personId}
        SelectedPersonId={SelectedPersonId}
        avatar={person.details.avatar}
        personName={person.details.personName}
        lastChatText={person.details.lastChatText}
        lastChatTime={handleGetTime(person.details.lastChatTime)}
        lastChatDate={handleGetDate(person.details.lastChatTime)}
        unreadChatCounter={person.details.unreadChatCounter}
        onPersonClick={() => dispatch(personClicked(person.details.personId))}
      />
    );
  });
  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
