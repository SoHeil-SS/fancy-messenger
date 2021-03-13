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
        avatar={avatar}
        personName={personName}
        lastChatText={self || person}
        draft={draft}
        selected={!!selectedPersonIsSame}
        lastChatTime={handleLastChatTime(chatTime)}
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() =>
          !selectedPersonIsSame && dispatch(personClicked(personId))
        }
      />
    );
  });

  return <>{list}</>;
}

export default PersonList;
