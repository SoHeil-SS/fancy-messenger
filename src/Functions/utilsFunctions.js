import { reactFunctionsImports } from "../Imports/reactFunctionsImports";

const { toast, createContext, useContext } = reactFunctionsImports;

const handleLastChatDetails = (personItem) =>
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

function handleSortPersons(persons) {
  persons.sort(
    (a, b) =>
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

function idMaker() {
  return Math.random();
}

function handleDisplayMenu(e, show, chatId, content) {
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
function handleGetTime(time, method1, method2, separator) {
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
function handleFinallyPersons(persons, index, person) {
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

function handleDraftChange(details, draft, chatContent) {
  if (!chatContent) details.draft = draft;
}

function handleShowableChats(chats, searchInputText, searchMode) {
  return searchMode === "chats"
    ? chats.filter((chat) =>
        (chat.self || chat.person)
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : chats;
}

const handleShowablePersons = (searchMode, persons, searchInputText) =>
  searchMode === "persons"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons.filter((person) => person.details.showOnList === true);

function handleFinallyChats(chats, chatIndex, newChatContent) {
  for (let i = 0; i < chatIndex.length; i++) {
    const chat = {
      ...chats[chatIndex[i]],
    };
    chat.self = newChatContent[i];
    chats.splice(chatIndex[i], 1, chat);
  }
}

function handleSelectedPersonItems(selectedPersonId, persons) {
  return persons.find((person) => person.details.personId === selectedPersonId);
}

function handleChatMaker(chats, newChats) {
  for (let i = 0; i < newChats.length; i++) {
    if (!newChats[i]) continue;
    chats.push({
      self: newChats[i],
      chatTime: Date.now(),
      chatId: idMaker(),
    });
  }
}

const handleLastChatTime = (chatTime) =>
  Date.now() - chatTime > 86400000
    ? handleGetTime(chatTime, "getMonth", "getDate", "/")
    : handleGetTime(chatTime, "getHours", "getMinutes", ":");

/**
 * @
 * @param {*} state
 * @param {*} chatId
 * @param {*} personId
 * @return {*}
 */
function statesAndVariables(
  { persons, selectedPersonId, chatContentId, ...state },
  chatId,
  personId
) {
  const id = personId || selectedPersonId;
  const { details, chats } = persons.find(
    (person) => person.details.personId === id
  );

  return {
    ...state,
    details: { ...details },
    chats: [...chats],
    newDate: Date.now(),
    personIndex: persons.findIndex(
      (person) => person.details.personId === details.personId
    ),
    prevPersonIndex: persons.findIndex(
      (person) => person.details.personId === selectedPersonId
    ),
    chatIndex: chats.findIndex((chat) => chat.chatId === chatId),
    chatContentIndex: chats.findIndex((chat) => chat.chatId === chatContentId),
    persons: [...persons],
  };
}

export const utilsFunctions = {
  handleLastChatDetails,
  Context,
  statesAndVariables,
  useMyContext,
  actionCreator,
  idMaker,
  handleSortPersons,
  handleGetTime,
  handleFinallyPersons,
  toaster,
  handleDisplayMenu,
  handleDraftChange,
  handleShowableChats,
  handleShowablePersons,
  handleFinallyChats,
  handleSelectedPersonItems,
  handleChatMaker,
  handleLastChatTime,
};
