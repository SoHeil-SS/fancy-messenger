import { createPortal } from "react-dom";

function Portal({ children }) {
  return createPortal(children, document.querySelector("#root"));
}

export default Portal;
