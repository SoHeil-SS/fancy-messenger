import { stateHandlers } from "../Functions/StateManagers/stateHandlers";
import { stateActions } from "../Functions/StateManagers/stateActions";
import { constants } from "../Others/constants";
import { reactComponentsImports } from "./reactComponentsImports";
import { userComponentsImports } from "./userComponentsImports";
import { reactFunctionsImports } from "./reactFunctionsImports";
import { utilsFunctions } from "../Functions/utilsFunctions";
import { reducer } from "../Functions/StateManagers/reducer";

export function useImport() {
  const { createContext, useContext, useContextMenu } = reactFunctionsImports;
  const { useMyContext } = utilsFunctions;
  const { menuId } = constants;

  const imports = createContext({
    ...useMyContext(),
    ...useContextMenu({
      id: menuId,
    }),
    ...stateHandlers,
    ...stateActions,
    reducer,
    ...constants,
    ...utilsFunctions,
    ...userComponentsImports,
    ...reactComponentsImports,
    ...reactFunctionsImports,
  });
  return useContext(imports);
}
