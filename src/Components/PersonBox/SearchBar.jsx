import { useImport } from "../../Imports/imports";

function SearchBar({
  searchInputPlaceHolder,
  searchInputText,
  isSearchOn,
  onSearchClick,
  onInputChange,
  onBackSearchClick,
  onPersonMenuClick,
}) {
  const { SearchIcon, BackArrow, BarIcon } = useImport();

  return (
    <div>
      <div className="titleBar_title-bar__3W5uP">
        <div className="titleBar_first__PIBdf">
          {isSearchOn ? (
            <BackArrow onBackSearchClick={onBackSearchClick} />
          ) : (
            <BarIcon onPersonMenuClick={onPersonMenuClick} />
          )}
        </div>
        <div className="titleBar_middle__220jH">
          <div className="appStatus_app-title__3Wu5j">
            {isSearchOn ? (
              <input
                type="text"
                placeholder={searchInputPlaceHolder}
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
          <SearchIcon onSearchClick={onSearchClick} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
