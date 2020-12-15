import { personClicked } from "../StateManager/actionCreator";

export function onClickPerson(personId) {
  return (dispatch, getState) => {
    dispatch(personClicked(personId));
  };
}
