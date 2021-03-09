import { useImport } from "../../../../Imports/imports";

function BarIcon({ onClick }) {
  const { svgPath, Svg, Path } = useImport();
  return (
    <Svg
      viewBox="0 0 448 512"
      dataIcon="bars"
      className="svg-inline--fa fa-bars fa-w-14 fa-lg appStatus_pointer__1vehB"
      onClick={onClick}
    >
      <Path path={svgPath.bars} />
    </Svg>
  );
}

export default BarIcon;
