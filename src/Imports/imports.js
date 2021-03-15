import { stateHandlers } from "../Functions/StateManagers/stateHandlers";
import { stateActions } from "../Functions/StateManagers/stateActions";
import { variables } from "../Others/variables";
import { reactComponentsImports } from "./reactComponentsImports";
import { userComponentsImports } from "./userComponentsImports";
import { reactFunctionsImports } from "./reactFunctionsImports";
import { utilsFunctionsAndHooks } from "../Functions/utilsFunctionsAndHooks";
import { reducer } from "../Functions/StateManagers/reducer";
import { useStyles } from "../Styles/useStyles";

export const useImport = () => {
  const { createContext, useContext, useContextMenu } = reactFunctionsImports;
  const { useMyContext } = utilsFunctionsAndHooks;
  const { menuId } = variables;
  const classNames = useStyles();

  const imports = createContext({
    ...useMyContext(),
    ...useContextMenu({
      id: menuId,
    }),
    classNames,
    useStyles,
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
