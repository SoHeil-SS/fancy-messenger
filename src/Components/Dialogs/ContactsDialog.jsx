import { useImport } from "../../Imports/imports";

const ContactsDialog = ({ dialogMode }) => {
  const {
    dispatch,
    PersonListItem,
    SearchIcon,
    actionInputChange,
    actionSelectPersonToForwardChatClicked,
    persons,
    searchInputText,
    useMemo,
    actionCloseDialogClicked,
    getShowablePersons,
    DialogTemplate,
    getDialogActionInitializer,
  } = useImport();

  const filteredPersonsToForward = useMemo(
    () => getShowablePersons("persons", persons, searchInputText),
    [persons, searchInputText, getShowablePersons]
  );

  //TODO cleanup

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
            dispatch(actionInputChange(e.target.value, "searchInputText"))
          }
          className=""
        />
      </div>
    </>
  );

  const actionContent = getDialogActionInitializer(
    ["Cancel"],
    ["secondary"],
    [true],
    [() => dispatch(actionCloseDialogClicked())]
  );

  const list = filteredPersonsToForward.map((person) => {
    const { personId, avatar, personName } = person.details;

    return (
      <PersonListItem
        key={personId}
        avatar={avatar}
        personName={personName}
        onPersonClick={() =>
          dispatch(actionSelectPersonToForwardChatClicked(personId))
        }
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
};

export default ContactsDialog;
