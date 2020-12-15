import { actionImports } from "./Imports/actionImports";
import { asyncHandlerImports } from "./Imports/asyncHandlerImports";
import { componentImports } from "./Imports/componentImports";
import { handlerImports } from "./Imports/handlerImports";
import { otherImports } from "./Imports/otherImports";

export function useImport() {
  const {
    useDispatch,
    menuId,
    useContextMenu,
    createContext,
    useContext,
  } = otherImports;
  const dispatch = useDispatch();
  const { show } = useContextMenu({
    id: menuId,
  });

  const imports = createContext({
    dispatch,
    show,
    ...otherImports,
    ...handlerImports,
    ...componentImports,
    ...asyncHandlerImports,
    ...actionImports,
  });
  return useContext(imports);
}
