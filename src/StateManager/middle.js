import { personClicked } from "./actionCreator";

export function onClickPerson(personId) {
  return (dispatch, getState) => {
    console.log(getState());
    // setTimeout(() => {
    //   dispatch(personClicked(personId));
    // }, 1500);
    dispatch(personClicked(personId));
    console.log(getState());
  };
}
