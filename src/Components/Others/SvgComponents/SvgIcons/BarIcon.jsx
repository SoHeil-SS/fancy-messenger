import { useImport } from "../../../../imports";

function BarIcon({ onPersonMenuClick }) {
  const { svgPath, Svg, Path } = useImport();
  return (
    <Svg
      viewBox="0 0 448 512"
      dataIcon="bars"
      className="svg-inline--fa fa-bars fa-w-14 fa-lg appStatus_pointer__1vehB"
      onClick={onPersonMenuClick}
    >
      <Path path={svgPath.bars} />
    </Svg>
  );
}

export default BarIcon;
