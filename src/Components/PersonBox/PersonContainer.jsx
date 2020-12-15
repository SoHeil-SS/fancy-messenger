import { useImport } from "../../Imports/imports";

function PersonContainer({
  selectedPersonId,
  persons,
  searchMode,
  searchInputText,
}) {
  const {
    dispatch,
    SearchBar,
    PersonList,
    onSearchClick,
    onInputChange,
    onPersonMenuClick,
    handleFilterPersons,
  } = useImport();

  const filteredPersons = handleFilterPersons(
    searchMode,
    persons.filter((person) => person.details.showOnList === true),
    searchInputText
  );

  const searchInputPlaceHolder =
    searchMode === "chats"
      ? "Type to search chats..."
      : "Type to search persons ...";
  const isSearchOn = searchMode === "chats" || searchMode === "persons";

  return (
    <>
      <SearchBar
        isSearchOn={isSearchOn}
        searchInputPlaceHolder={searchInputPlaceHolder}
        searchInputText={searchInputText}
        onInputChange={(e) =>
          dispatch(onInputChange(e.target.value, "searchInputText"))
        }
        onSearchClick={() => dispatch(onSearchClick("persons"))}
        onBackSearchClick={() => dispatch(onSearchClick(null))}
        onPersonMenuClick={() => dispatch(onPersonMenuClick())}
      />
      <PersonList
        selectedPersonId={selectedPersonId}
        persons={filteredPersons}
      />
    </>
  );
}

export default PersonContainer;
