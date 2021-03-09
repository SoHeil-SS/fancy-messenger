import { createContext, useContext } from "react";

const Context = createContext(() => null);

export default Context;

export function useMyContext() {
  return useContext(Context);
}
