import { useImport } from "../../Imports/imports";

const PersonList = ({ showablePersons }) => {
  const {
    dispatch,
    PersonListItem,
    actionPersonClicked,
    getLastChatTime,
    selectedPersonId,
    getLastChatDetails,
    List,
    classNames: { personListList },
  } = useImport();

  const list = showablePersons.map((personItem) => {
    const { chatTime, self, person } = getLastChatDetails(personItem);

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
        lastChatTime={getLastChatTime(chatTime)}
        unreadChatCounter={unreadChatCounter}
        onPersonClick={() =>
          !selectedPersonIsSame && dispatch(actionPersonClicked(personId))
        }
      />
    );
  });

  return <List className={personListList}>{list}</List>;
};

export default PersonList;
