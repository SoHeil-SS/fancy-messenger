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

  return (
    <>
      <SearchBar
        searchMode={searchMode}
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
