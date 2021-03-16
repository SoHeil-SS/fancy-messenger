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
    Grid,
    classNames: { personContainerGridContainer },
  } = useImport();

  const showablePersons = useMemo(
    () => getShowablePersons(searchMode, persons, searchInputText),
    [searchMode, persons, searchInputText, getShowablePersons]
  );

  return (
    <Grid item xs={4} className={personContainerGridContainer}>
      <Grid item>
        <SearchBar
          searchMode={searchMode}
          onInputChange={(e) =>
            dispatch(actionInputChange(e.target.value, "searchInputText"))
          }
          onSearchIconClick={() => dispatch(actionSearchIconClicked("persons"))}
          onBackArrowIconClick={() => dispatch(actionSearchIconClicked(""))}
          onPersonMenuClick={() => dispatch(actionPersonMenuBarClicked())}
        />
      </Grid>
      <Grid>
        <PersonList showablePersons={showablePersons} />
      </Grid>
    </Grid>
  );
};

export default PersonContainer;
