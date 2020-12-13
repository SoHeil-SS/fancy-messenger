import { useImport } from "../../imports";

function SearchIcon({ text, onClick, style }) {
  const { svgPath, Svg, Path } = useImport();
  return (
    <Svg
      viewBox="0 0 512 512"
      dataIcon="search"
      onClick={() => console.log(text)}
      className="svg-inline--fa fa-search fa-w-16 fa-lg appStatus_pointer__1vehB"
      style={style}
    >
      <Path path={svgPath.search} />
    </Svg>
  );
}

export default SearchIcon;
