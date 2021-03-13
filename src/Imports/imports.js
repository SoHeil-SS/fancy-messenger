import { stateHandlers } from "../Functions/StateManagers/stateHandlers";
import { stateActions } from "../Functions/StateManagers/stateActions";
import { constants } from "../Others/constants";
import { reactComponentsImports } from "./reactComponentsImports";
import { userComponentsImports } from "./userComponentsImports";
import { reactFunctionsImports } from "./reactFunctionsImports";
import { utilsFunctionsAndHooks } from "../Functions/utilsFunctionsAndHooks";
import { reducer } from "../Functions/StateManagers/reducer";
import { styles } from "../Styles/styles";

export function useImport() {
  const { createContext, useContext, useContextMenu } = reactFunctionsImports;
  const { useMyContext } = utilsFunctionsAndHooks;
  const { menuId } = constants;

  const imports = createContext({
    ...useMyContext(),
    ...useContextMenu({
      id: menuId,
    }),
    styles,
    ...stateHandlers,
    ...stateActions,
    reducer,
    ...constants,
    ...utilsFunctionsAndHooks,
    ...userComponentsImports,
    ...reactComponentsImports,
    ...reactFunctionsImports,
  });
  return useContext(imports);
}
