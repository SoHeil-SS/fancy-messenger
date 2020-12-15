import { useImport } from "../../../../Imports/imports";

function SearchIcon({ onSearchClick }) {
  const { svgPath, Svg, Path } = useImport();
  return (
    <Svg
      viewBox="0 0 512 512"
      dataIcon="search"
      onClick={onSearchClick}
      className="svg-inline--fa fa-search fa-w-16 fa-lg appStatus_pointer__1vehB"
    >
      <Path path={svgPath.search} />
    </Svg>
  );
}

export default SearchIcon;
