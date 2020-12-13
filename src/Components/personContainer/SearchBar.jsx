import { useImport } from "../../imports";
import SearchIcon from "../Others/SearchIcon";

function SearchBar() {
  const { React, svgPath, Path, Svg } = useImport();
  return (
    <div>
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
          <SearchIcon text="person search clicked" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
