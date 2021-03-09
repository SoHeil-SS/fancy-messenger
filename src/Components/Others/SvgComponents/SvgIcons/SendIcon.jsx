import { useImport } from "../../../../Imports/imports";

function SendIcon({ onClick }) {
  const { Svg, svgPath, Path } = useImport();
  return (
    <Svg
      viewBox="0 0 448 512"
      className="svg-inline--fa fa-paperclip fa-w-14 fa-lg chatDetail_send__1Gwlf chatDetail_pointer__1gYpZ"
      dataIcon="paperclip"
      onClick={onClick}
    >
      <Path path={svgPath.send} />
    </Svg>
  );
}

export default SendIcon;
