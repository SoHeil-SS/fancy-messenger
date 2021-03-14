import { stateHandlers } from "../Functions/StateManagers/stateHandlers";
import { stateActions } from "../Functions/StateManagers/stateActions";
import { variables } from "../Others/variables";
import { reactComponentsImports } from "./reactComponentsImports";
import { userComponentsImports } from "./userComponentsImports";
import { reactFunctionsImports } from "./reactFunctionsImports";
import { utilsFunctionsAndHooks } from "../Functions/utilsFunctionsAndHooks";
import { reducer } from "../Functions/StateManagers/reducer";
import { styles } from "../Styles/styles";

export const useImport = () => {
  const { createContext, useContext, useContextMenu } = reactFunctionsImports;
  const { useMyContext } = utilsFunctionsAndHooks;
  const { menuId } = variables;

  const imports = createContext({
    ...useMyContext(),
    ...useContextMenu({
      id: menuId,
    }),
    styles,
    ...stateHandlers,
    ...stateActions,
    reducer,
    ...variables,
    ...utilsFunctionsAndHooks,
    ...userComponentsImports,
    ...reactComponentsImports,
    ...reactFunctionsImports,
  });
  return useContext(imports);
};
