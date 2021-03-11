import { useImport } from "../../Imports/imports";

function PersonContainer() {
  const {
    dispatch,
    SearchBar,
    PersonList,
    searchInputState,
    onInputChange,
    onPersonMenuClick,
    handleShowablePersons,
    useMemo,
    searchInputText,
    persons,
    searchMode,
  } = useImport();

  const showablePersons = useMemo(
    () => handleShowablePersons(searchMode, persons, searchInputText),
    [searchMode, persons, searchInputText, handleShowablePersons]
  );

  return (
    <>
      <SearchBar
        searchMode={searchMode}
        onInputChange={(e) =>
          dispatch(onInputChange(e.target.value, "searchInputText"))
        }
        onSearchIconClick={() => dispatch(searchInputState("persons"))}
        onBackArrowIconClick={() => dispatch(searchInputState(""))}
        onPersonMenuClick={() => dispatch(onPersonMenuClick())}
      />
      <PersonList showablePersons={showablePersons} />
    </>
  );
}

export default PersonContainer;
