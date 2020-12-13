import { useImport } from "../../imports";

import SearchIcon from "../Others/SvgComponents/SearchIcon";

function SearchBar({ searchMode, onSearchClick }) {
  const { React, svgPath, Path, Svg } = useImport();
  return (
    <div>
      {!searchMode ? (
        <div className="titleBar_title-bar__3W5uP">
          <div className="titleBar_first__PIBdf">
            <Svg
              viewBox="0 0 448 512"
              dataIcon="bars"
              className="svg-inline--fa fa-bars fa-w-14 fa-lg appStatus_pointer__1vehB"
            >
              <Path path={svgPath.bars} />
            </Svg>
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
        <div class="titleBar_title-bar__3W5uP">
          <div class="titleBar_first__PIBdf">
            <Svg
              className="svg-inline--fa fa-arrow-left fa-w-14 fa-lg appStatus_pointer__1vehB"
              dataIcon="arrow-left"
              viewBox="0 0 448 512"
              onClick={onSearchClick}
            >
              <Path path={svgPath.backArrow} />
            </Svg>
          </div>
          <div class="titleBar_middle__220jH">
            <div class="appStatus_app-title__3Wu5j">
              <input type="text" class="appStatus_search-text__3Fr_f" />
            </div>
          </div>
          <div class="titleBar_last__2vQ77"></div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
