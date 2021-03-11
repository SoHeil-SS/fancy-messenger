import { useImport } from "../../Imports/imports";

function PersonList({ showablePersons }) {
  const {
    dispatch,
    PersonListItem,
    personClicked,
    handleLastChatTime,
    selectedPersonId,
    handleLastChatDetails,
  } = useImport();

  const list = showablePersons.map((personItem) => {
    const { chatTime, self, person } = handleLastChatDetails(personItem);

    const {
      personId,
      avatar,
      personName,
      draft,
      unreadChatCounter,
    } = personItem.details;

    const selectedPersonIsSame = personId === selectedPersonId;

    return (
      <PersonListItem
        key={personId}
        personItemClassName={
          selectedPersonIsSame
            ? "listItem_list-item__1mnZB listItem_selected__3Q6PN  "
            : "listItem_list-item__1mnZB listItem_bg "
        }
        avatar={avatar}
        personName={personName}
        lastChatText={self || person}
        draft={draft}
        lastChatTime={handleLastChatTime(chatTime)}
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() =>
          !selectedPersonIsSame && dispatch(personClicked(personId))
        }
      />
    );
  });

  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
