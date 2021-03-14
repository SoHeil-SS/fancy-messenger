import { useImport } from "../../Imports/imports";

const Portal = ({ children }) => {
  const { createPortal } = useImport();
  return createPortal(children, document.querySelector("#portalContainer"));
};

export default Portal;
