import { createContext, useContext } from "react";

const handlePersonItems = (personItem) =>
  personItem.chats.length > 0
    ? personItem.chats[personItem.chats.length - 1]
    : {};

function actionCreator(type, payload) {
  return { type, payload };
}

const Context = createContext(() => null);

function useMyContext() {
  return useContext(Context);
}

function idMaker() {
  return Math.random();
}

export const utilsFunctions = {
  handlePersonItems,
  Context,
  useMyContext,
  actionCreator,
  idMaker,
};
