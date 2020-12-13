import { useImport } from "../../imports";
import BarIcon from "../Others/SvgComponents/SvgIcons/BarIcon";

function SearchBar({
  searchMode,
  searchInputText,
  onSearchClick,
  onInputChange,
  onBackSearchClick,
  onPersonMenuClick,
}) {
  const { svgPath, Path, Svg, SearchIcon } = useImport();
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
            <SearchIcon
              text="person search clicked"
              onSearchClick={onSearchClick}
            />
          </div>
        </div>
      ) : (
        <div className="titleBar_title-bar__3W5uP">
          <div className="titleBar_first__PIBdf">
            <Svg
              className="svg-inline--fa fa-arrow-left fa-w-14 fa-lg appStatus_pointer__1vehB"
              dataIcon="arrow-left"
              viewBox="0 0 448 512"
              onClick={onBackSearchClick}
            >
              <Path path={svgPath.backArrow} />
            </Svg>
          </div>
          <div className="titleBar_middle__220jH">
            <div className="appStatus_app-title__3Wu5j">
              <input
                type="text"
                value={searchInputText}
                onChange={onInputChange}
                className="appStatus_search-text__3Fr_f"
              />
            </div>
          </div>
          <div className="titleBar_last__2vQ77"></div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
