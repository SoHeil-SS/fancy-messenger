import { useImport } from "../../../../Imports/imports";

function ThreeDotIcon({ onClick }) {
  const { svgPath, Svg, Path } = useImport();
  return (
    <Svg
      viewBox="0 0 192 512"
      className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-lg pointer"
      dataIcon="ellipsis - v"
      onClick={onClick}
    >
      <Path path={svgPath.ellipsis} />
    </Svg>
  );
}

export default ThreeDotIcon;
