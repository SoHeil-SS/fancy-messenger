import { useImport } from "../../Imports/imports";

const SearchBar = ({
  searchMode,
  onSearchIconClick,
  onInputChange,
  onBackArrowIconClick,
  onPersonMenuClick,
}) => {
  const {
    TextField,
    searchInputText,
    Box,
    SearchIcon,
    IconButton,
    MenuIcon,
    ArrowBackIcon,
    Paper,
    classNames: {
      defaultIconSize,
      searchBarContainer,
      searchBarBox,
      searchBarInput,
      searchBarInputBox,
    },
  } = useImport();

  return (
    <Paper className={searchBarContainer}>
      <Box m={1} p={1} className={searchBarBox}>
        <Box>
          {searchMode ? (
            <IconButton onClick={onBackArrowIconClick}>
              <ArrowBackIcon className={defaultIconSize} />
            </IconButton>
          ) : (
            <IconButton onClick={onPersonMenuClick}>
              <MenuIcon className={defaultIconSize} />
            </IconButton>
          )}
        </Box>
        <Box className={searchBarInputBox}>
          {searchMode ? (
            <TextField
              id="standard-search"
              type="search"
              value={searchInputText}
              onChange={onInputChange}
              className={searchBarInput}
              label={
                searchMode === "chats"
                  ? "Type to search chats..."
                  : "Type to search persons..."
              }
            />
          ) : (
            <h4>Fancy Messenger</h4>
          )}
        </Box>
        <Box>
          <IconButton onClick={onSearchIconClick}>
            <SearchIcon className={defaultIconSize} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchBar;
