import { reactFunctionsImports } from "../Imports/reactFunctionsImports";

const { toast, createContext, useContext } = reactFunctionsImports;

const getLastChatDetails = (personItem) =>
  personItem.chats.length > 0
    ? personItem.chats[personItem.chats.length - 1]
    : {};

function getStateAction(type, payload) {
  return { type, payload };
}

const Context = createContext(() => null);

function useMyContext() {
  return useContext(Context);
}

function setSortPersonList(persons) {
  persons.sort(
    (a, b) =>
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

function idMaker() {
  return Math.random();
}

function setDisplayMenu(e, show, chatId, content) {
  show(e, {
    props: { id: Number(chatId), text: content },
  });
}

/**
 * @
 * @param {*} time date by millisecond
 * @param {*} method1 string value like  : "getMonth","getHours",...
 * @param {*} method2 string value like : "getDate","getMinutes",...
 * @param {*} separator time separator like "/" , ":"
 * @return {*}
 */
function getTimeFromMilliseconds(time, method1, method2, separator) {
  if (!time) return "";
  const dateNow = new Date(time);
  const time1 = dateNow[method1]();
  const time2 = dateNow[method2]();

  return `${method1 === "getMonth" ? time1 + 1 : time1}${separator}${time2}`;
}

/**
 *  @param {*} persons
 * @param {*} index array
 * @param {*} person array
 * @return {*} persons in arrays
 */
function setFinallyPersons(persons, index, person) {
  for (let i = 0; i < index.length; i++) {
    persons.splice(index[i], 1, person[i]);
  }
}

function toaster(type, detail, text) {
  toast[type](`${detail} ${text}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

function setDraftChange(details, draft, chatContent) {
  if (!chatContent) details.draft = draft;
}

function getShowableChats(chats, searchInputText, searchMode) {
  return searchMode === "chats"
    ? chats.filter((chat) =>
        (chat.self || chat.person)
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : chats;
}

const getShowablePersons = (searchMode, persons, searchInputText) =>
  searchMode === "persons"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons.filter((person) => person.details.showOnList === true);

function setFinallyChats(chats, chatIndex, newChatContent) {
  for (let i = 0; i < chatIndex.length; i++) {
    const chat = {
      ...chats[chatIndex[i]],
    };
    chat.self = newChatContent[i];
    chats.splice(chatIndex[i], 1, chat);
  }
}

function getSelectedPersonItems(selectedPersonId, persons) {
  return persons.find((person) => person.details.personId === selectedPersonId);
}

function setNewChats(chats, newChats) {
  for (let i = 0; i < newChats.length; i++) {
    const chat = newChats[i];
    if (!chat) continue;
    chats.push({
      self: chat,
      chatTime: Date.now(),
      chatId: idMaker(),
    });
  }
}

function getFilterDeletedChat(chats, chatId) {
  return chats.filter((chat) => chat.chatId !== chatId);
}

const getLastChatTime = (chatTime) =>
  Date.now() - chatTime > 86400000
    ? getTimeFromMilliseconds(chatTime, "getMonth", "getDate", "/")
    : getTimeFromMilliseconds(chatTime, "getHours", "getMinutes", ":");

/**
 * @
 * @param {*} state
 * @param {*} chatId
 * @param {*} personId
 * @return {*}
 */
function getStatesAndVariables(
  { persons, selectedPersonId, chatContentId, ...state },
  chatId,
  personId
) {
  const id = personId || selectedPersonId;
  const { details, chats } = persons.find(
    (person) => person.details.personId === id
  );
  const prevPersonIndex = persons.findIndex(
    (person) => person.details.personId === selectedPersonId
  );
  const prevPerson = { ...persons[prevPersonIndex] };
  const prevDetails = { ...prevPerson.details };
  const chatIndex = chats.findIndex((chat) => chat.chatId === chatId);
  const chatContentIndex = chats.findIndex(
    (chat) => chat.chatId === chatContentId
  );
  const personIndex = persons.findIndex(
    (person) => person.details.personId === details.personId
  );

  return {
    details: { ...details },
    chats: [...chats],
    newDate: Date.now(),
    persons: [...persons],
    personIndex,
    prevPersonIndex,
    prevPerson,
    prevDetails,
    chatIndex,
    chatContentIndex,
    selectedPersonId,
    chatContentId,
    ...state,
  };
}

function getDialogActionInitializer(text, color, autoFocus, onClick) {
  const temp = [];
  for (let i = 0; i < text.length; i++) {
    temp.push({
      text: text[i],
      color: color[i],
      autoFocus: autoFocus[i],
      onClick: onClick[i],
    });
  }
  return temp;
}

export const utilsFunctionsAndHooks = {
  getLastChatDetails,
  Context,
  getDialogActionInitializer,
  getStatesAndVariables,
  useMyContext,
  getStateAction,
  idMaker,
  setSortPersonList,
  getTimeFromMilliseconds,
  setFinallyPersons,
  toaster,
  setDisplayMenu,
  setDraftChange,
  getShowableChats,
  getShowablePersons,
  setFinallyChats,
  getSelectedPersonItems,
  setNewChats,
  getLastChatTime,
  getFilterDeletedChat,
};
