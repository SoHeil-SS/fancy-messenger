import { useImport } from "../../imports";

function PersonList({ persons, selectedPersonId }) {
  const {
    dispatch,
    PersonListItem,
    handleGetTime,
    personClicked,
  } = useImport();

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
    //TODO ?????
    function onClickPerson(dispatch) {
      dispatch(personClicked(personId));
    }

    return (
      <PersonListItem
        key={personId}
        personItemClassName={
          condition
            ? "listItem_list-item__1mnZB listItem_selected__3Q6PN  "
            : "listItem_list-item__1mnZB listItem_bg "
        }
        avatar={avatar}
        personName={personName}
        lastChatText={self ? self : person}
        draft={draft}
        lastChatTime={
          Date.now() - chatTime > 86400000
            ? handleGetTime(chatTime, "getMonth", "getDate", "/")
            : handleGetTime(chatTime, "getHours", "getMinutes", ":")
        }
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() => !condition && onClickPerson(dispatch)}
      />
    );
  });

  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
