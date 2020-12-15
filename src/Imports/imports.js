import { actionImports } from "./actionImports";
import { asyncHandlerImports } from "./asyncHandlerImports";
import { componentImports } from "./componentImports";
import { handlerImports } from "./handlerImports";
import { otherImports } from "./otherImports";

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
