import { actionImports } from "./actionImports";
import { asyncHandlerImports } from "./asyncHandlerImports";
import { componentImports } from "./componentImports";
import { handlerImports } from "./handlerImports";
import { otherImports } from "./otherImports";

export function useImport() {
  const {
    useMyContext,
    menuId,
    useContextMenu,
    createContext,
    useContext,
  } = otherImports;
  const {
    dispatch,
    selectedPersonId,
    searchInputText,
    persons,
  } = useMyContext();
  const { show } = useContextMenu({
    id: menuId,
  });

  const imports = createContext({
    dispatch,
    selectedPersonId,
    searchInputText,
    persons,
    show,
    ...otherImports,
    ...handlerImports,
    ...componentImports,
    ...asyncHandlerImports,
    ...actionImports,
  });
  return useContext(imports);
}
