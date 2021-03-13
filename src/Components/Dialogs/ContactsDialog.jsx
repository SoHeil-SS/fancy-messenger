import { useImport } from "../../Imports/imports";

function ContactsDialog({ dialogMode }) {
  const {
    dispatch,
    PersonListItem,
    SearchIcon,
    onInputChange,
    onForwardChat,
    persons,
    searchInputText,
    useMemo,
    onCloseModalClick,
    handleShowablePersons,
    DialogTemplate,
    dialogActionInitializer,
  } = useImport();

  const filteredPersonsToForward = useMemo(
    () => handleShowablePersons("persons", persons, searchInputText),
    [persons, searchInputText, handleShowablePersons]
  );

  const Title = (
    <>
      <span style={{ color: "wheat" }}>Choose a recipient...</span>
      <div>
        <SearchIcon />
        <input
          type="text"
          placeholder="Type to search persons..."
          value={searchInputText}
          onChange={(e) =>
            dispatch(onInputChange(e.target.value, "searchInputText"))
          }
          className="forward-input"
        />
      </div>
    </>
  );

  const actionContent = dialogActionInitializer(
    ["Cancel"],
    ["secondary"],
    [true],
    [() => dispatch(onCloseModalClick())]
  );

  const list = filteredPersonsToForward.map((person) => {
    const { personId, avatar, personName } = person.details;

    return (
      <PersonListItem
        key={personId}
        avatar={avatar}
        personName={personName}
        onPersonClick={() => dispatch(onForwardChat(personId))}
      />
    );
  });

  return (
    <>
      <DialogTemplate
        dialogMode={dialogMode}
        mainContent={list}
        titleContent={Title}
        actionContent={actionContent}
      />
    </>
  );
}

export default ContactsDialog;
