import { useImport } from "../../imports";

function SearchBar({
  searchMode,
  searchInputText,
  onSearchClick,
  onInputChange,
  onBackSearchClick,
  onPersonMenuClick,
}) {
  const { SearchIcon, BackArrow, BarIcon } = useImport();
  const searchInputPlaceHolder =
    searchMode === "chats"
      ? "Type to search chats..."
      : "Type to search persons ...";

  return (
    //TODO cleanup
    <div>
      {!searchMode ? (
        <div className="titleBar_title-bar__3W5uP">
          <div className="titleBar_first__PIBdf">
            <BarIcon onPersonMenuClick={onPersonMenuClick} />
          </div>
          <div className="titleBar_middle__220jH">
            <div className="appStatus_app-title__3Wu5j">Fancy Messenger</div>
          </div>
          <div className="titleBar_last__2vQ77">
            <SearchIcon onSearchClick={onSearchClick} />
          </div>
        </div>
      ) : (
        <div className="titleBar_title-bar__3W5uP">
          <div className="titleBar_first__PIBdf">
            <BackArrow onBackSearchClick={onBackSearchClick} />
          </div>
          <div className="titleBar_middle__220jH">
            <div className="appStatus_app-title__3Wu5j">
              <input
                type="text"
                placeholder={searchInputPlaceHolder}
                value={searchInputText}
                onChange={onInputChange}
                className="appStatus_search-text__3Fr_f"
              />
            </div>
          </div>
          <div className="titleBar_last__2vQ77">
            <SearchIcon onSearchClick={onSearchClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
