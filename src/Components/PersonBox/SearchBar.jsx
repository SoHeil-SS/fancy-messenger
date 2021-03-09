import { useImport } from "../../Imports/imports";

function SearchBar({
  searchInputText,
  searchMode,
  onSearchIconClick,
  onInputChange,
  onBackArrowIconClick,
  onPersonMenuClick,
}) {
  const { SearchIcon, BackArrow, BarIcon } = useImport();

  return (
    <div>
      <div className="titleBar_title-bar__3W5uP">
        <div className="titleBar_first__PIBdf">
          {searchMode ? (
            <BackArrow onClick={onBackArrowIconClick} />
          ) : (
            <BarIcon onPersonMenuClick={onPersonMenuClick} />
          )}
        </div>
        <div className="titleBar_middle__220jH">
          <div className="appStatus_app-title__3Wu5j">
            {searchMode ? (
              <input
                type="text"
                placeholder={
                  searchMode === "chats"
                    ? "Type to search chats..."
                    : "Type to search persons ..."
                }
                value={searchInputText}
                onChange={onInputChange}
                className="appStatus_search-text__3Fr_f"
              />
            ) : (
              "Fancy Messenger"
            )}
          </div>
        </div>
        <div className="titleBar_last__2vQ77">
          <SearchIcon onClick={onSearchIconClick} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
