import { useImport } from "../../../imports";

function Svg({ children, className, dataIcon, onClick, viewBox }) {
  const { React } = useImport();
  return (
    <svg
      onClick={onClick && onClick}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon={dataIcon}
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      color="#009588"
    >
      {children}
    </svg>
  );
}

export default Svg;
