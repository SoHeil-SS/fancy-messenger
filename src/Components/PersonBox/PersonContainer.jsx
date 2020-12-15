import { useImport } from "../../imports";

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
  } = useImport();

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
      <PersonList selectedPersonId={selectedPersonId} persons={persons} />
    </>
  );
}

export default PersonContainer;
