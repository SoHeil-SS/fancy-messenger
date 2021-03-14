import { useImport } from "../../Imports/imports";

const PersonContainer = () => {
  const {
    dispatch,
    SearchBar,
    PersonList,
    actionSearchIconClicked,
    actionInputChange,
    actionPersonMenuBarClicked,
    getShowablePersons,
    useMemo,
    searchInputText,
    persons,
    searchMode,
  } = useImport();

  const showablePersons = useMemo(
    () => getShowablePersons(searchMode, persons, searchInputText),
    [searchMode, persons, searchInputText, getShowablePersons]
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
};

export default PersonContainer;
