import { useImport } from "../../imports";

function Portal({ children }) {
  const { createPortal } = useImport();
  return createPortal(children, document.querySelector("#portalContainer"));
}

export default Portal;
