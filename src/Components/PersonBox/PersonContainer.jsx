import { useImport } from "../../Imports/imports";

function PersonContainer() {
  const {
    dispatch,
    SearchBar,
    PersonList,
    actionSearchIconClicked,
    actionInputChange,
    actionPersonMenuBarClicked,
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
          dispatch(actionInputChange(e.target.value, "searchInputText"))
        }
        onSearchIconClick={() => dispatch(actionSearchIconClicked("persons"))}
        onBackArrowIconClick={() => dispatch(actionSearchIconClicked(""))}
        onPersonMenuClick={() => dispatch(actionPersonMenuBarClicked())}
      />
      <PersonList showablePersons={showablePersons} />
    </>
  );
}

export default PersonContainer;
