import { useImport } from "../../Imports/imports";

function PersonList({ showablePersons }) {
  const {
    dispatch,
    PersonListItem,
    onClickPerson,
    handleGetTime,
    selectedPersonId,
    handlePersonItems,
  } = useImport();

  const list = showablePersons.map((personItem) => {
    const { chatTime, self, person } = handlePersonItems(personItem);

    const {
      personId,
      avatar,
      personName,
      draft,
      unreadChatCounter,
    } = personItem.details;

    const condition = personId === selectedPersonId;

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
        lastChatText={self || person}
        draft={draft}
        lastChatTime={
          Date.now() - chatTime > 86400000
            ? handleGetTime(chatTime, "getMonth", "getDate", "/")
            : handleGetTime(chatTime, "getHours", "getMinutes", ":")
        }
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() => !condition && dispatch(onClickPerson(personId))}
      />
    );
  });

  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
