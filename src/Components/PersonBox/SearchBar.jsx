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
    styles,
    SearchIcon,
    IconButton,
    MenuIcon,
    ArrowBackIcon,
    Paper,
  } = useImport();

  const {
    icons: { defaultStyle },
    searchBar: { box, container, searchInput, searchInputBox },
  } = styles();

  return (
    <Paper style={container}>
      <Box m={1} p={1.39} style={box}>
        <Box>
          {searchMode ? (
            <IconButton onClick={onBackArrowIconClick}>
              <ArrowBackIcon style={defaultStyle} />
            </IconButton>
          ) : (
            <IconButton onClick={onPersonMenuClick}>
              <MenuIcon style={defaultStyle} />
            </IconButton>
          )}
        </Box>
        <Box style={searchInputBox}>
          {searchMode ? (
            <TextField
              id="standard-search"
              type="search"
              value={searchInputText}
              onChange={onInputChange}
              style={searchInput}
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
            <SearchIcon style={defaultStyle} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchBar;
