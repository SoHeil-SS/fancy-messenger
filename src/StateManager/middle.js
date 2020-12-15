import { personClicked } from "./actionCreator";

export function onClickPerson(personId) {
  return (dispatch, getState) => {
    dispatch(personClicked(personId));
  };
}
