import { useImport } from "../../imports";
function Path({ path }) {
  const { React } = useImport();
  return <path fill="currentColor" d={path}></path>;
}

export default Path;
