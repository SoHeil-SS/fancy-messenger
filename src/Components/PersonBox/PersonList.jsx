import { useImport } from "../../imports";

function PersonList({ persons, selectedPersonId }) {
  const {
    dispatch,
    PersonListItem,
    handleGetTime,
    personClicked,
  } = useImport();

  //TODO cleanup

  const list = persons.map((personItem) => {
    const { chatTime, self, person } =
      personItem.chats.length > 0
        ? personItem.chats[personItem.chats.length - 1]
        : {};

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
