import { useImport } from "../../../../Imports/imports";

function BackArrow({ onClick }) {
  const { svgPath, Svg, Path } = useImport();

  return (
    <Svg
      className="svg-inline--fa fa-arrow-left fa-w-14 fa-lg appStatus_pointer__1vehB"
      dataIcon="arrow-left"
      viewBox="0 0 448 512"
      onClick={onClick}
    >
      <Path path={svgPath.backArrow} />
    </Svg>
  );
}

export default BackArrow;
