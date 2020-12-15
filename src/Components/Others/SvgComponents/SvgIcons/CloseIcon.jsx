import { useImport } from "../../../../Imports/imports";

function CloseIcon({ onCloseChat }) {
  const { svgPath, Svg, Path } = useImport();

  return (
    <Svg
      viewBox="0 0 448 512"
      className=" hoverClose svg-inline--fa fa-times fa-w-11 chatDetail_pointer__1gYpZ fa-lg pointer"
      dataIcon="times"
      onClick={onCloseChat}
    >
      <Path path={svgPath.times} />
    </Svg>
  );
}

export default CloseIcon;
