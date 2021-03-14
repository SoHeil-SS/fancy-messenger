import { reactFunctionsImports } from "../Imports/reactFunctionsImports";

const { toast, createContext, useContext } = reactFunctionsImports;

const dateNow = () => Date.now();

const getLastChatDetails = (personItem) =>
  personItem.chats.length > 0
    ? personItem.chats[personItem.chats.length - 1]
    : {};

const getStateAction = (type, payload) => {
  return { type, payload };
};

const Context = createContext(() => null);

const useMyContext = () => {
  return useContext(Context);
};

const setSortPersonList = (persons) => {
  persons.sort(
    (a, b) =>
      new Date(b.details.lastActivity) - new Date(a.details.lastActivity)
  );
};

const idMaker = () => {
  return Math.random();
};

const setDisplayMenu = (e, show, chatId, content) => {
  show(e, {
    props: { id: Number(chatId), text: content },
  });
};

/**
 * @
 * @param {*} time date by millisecond
 * @param {*} method1 string value like  : "getMonth","getHours",...
 * @param {*} method2 string value like : "getDate","getMinutes",...
 * @param {*} separator time separator like "/" , ":"
 * @return {*}
 */
const getTimeFromMilliseconds = (time, method1, method2, separator) => {
  if (!time) return "";
  const dateNow = new Date(time);
  const time1 = dateNow[method1]();
  const time2 = dateNow[method2]();

  return `${method1 === "getMonth" ? time1 + 1 : time1}${separator}${time2}`;
};

/**
 *  @param {*} persons
 * @param {*} index array
 * @param {*} person array
 * @return {*} persons in arrays
 */
const setFinallyPersons = (persons, index, person) => {
  for (let i = 0; i < index.length; i++) {
    persons.splice(index[i], 1, person[i]);
  }
};

const toaster = (type, detail, text) => {
  toast[type](`${detail} ${text}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const setDraftChange = (details, chatInputText, chatMode) => {
  if (!chatMode) details.draft = chatInputText;
};

const getShowableChats = (chats, searchInputText, searchMode) => {
  return searchMode === "chats"
    ? chats.filter((chat) =>
        (chat.self || chat.person)
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : chats;
};

const getShowablePersons = (searchMode, persons, searchInputText) =>
  searchMode === "persons"
    ? persons.filter((person) =>
        person.details.personName
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      )
    : persons.filter((person) => person.details.showOnList === true);

const setEditedChats = (chats, chatIndex, newChatContent) => {
  for (let i = 0; i < chatIndex.length; i++) {
    const chat = {
      ...chats[chatIndex[i]],
    };
    chat.self = newChatContent[i];
    chats.splice(chatIndex[i], 1, chat);
  }
};

const getSelectedPersonItems = (selectedPersonId, persons) => {
  return persons.find((person) => person.details.personId === selectedPersonId);
};

const setNewPersonChats = (chats, newChats) => {
  for (let i = 0; i < newChats.length; i++) {
    const chat = newChats[i];
    if (!chat) continue;
    chats.push({
      self: chat,
      chatTime: dateNow(),
      chatId: idMaker(),
    });
  }
};

const setNewPersonDetails = (details, draft, dateNow) => {
  details.lastActivity = dateNow;
};

const getFilterDeletedChat = (chats, chatId) => {
  return chats.filter((chat) => chat.chatId !== chatId);
};

const getLastChatTime = (chatTime) =>
  dateNow() - chatTime > 86400000
    ? getTimeFromMilliseconds(chatTime, "getMonth", "getDate", "/")
    : getTimeFromMilliseconds(chatTime, "getHours", "getMinutes", ":");

/**
 * @
 * @param {*} state
 * @param {*} chatId
 * @param {*} personId
 * @return {*}
 */
const getStatesAndVariables = (
  { persons, selectedPersonId, ...state },
  chatID,
  personId
) => {
  const id = personId || selectedPersonId;
  const { details, chats } = persons.find(
    (person) => person.details.personId === id
  );
  const prevPersonIndex = persons.findIndex(
    (person) => person.details.personId === selectedPersonId
  );
  const prevPerson = { ...persons[prevPersonIndex] };
  const prevDetails = { ...prevPerson.details };
  const chatIndex = chats.findIndex((chat) => chat.chatId === chatID);
  const chatContentIndex = chats.findIndex((chat) => chat.chatId === chatID);
  const personIndex = persons.findIndex(
    (person) => person.details.personId === details.personId
  );

  return {
    ...state,
    details: { ...details },
    chats: [...chats],
    persons: [...persons],
    personIndex,
    prevPersonIndex,
    prevPerson,
    prevDetails,
    chatIndex,
    chatContentIndex,
    selectedPersonId,
    dateNow: dateNow(),
  };
};

const getDialogActionInitializer = (text, color, autoFocus, onClick) => {
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
};

const setCopyChatClicked = (chatText) => {
  navigator.clipboard.writeText(chatText);
};

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
  setEditedChats,
  getSelectedPersonItems,
  setNewPersonChats,
  getLastChatTime,
  getFilterDeletedChat,
  setCopyChatClicked,
  setNewPersonDetails,
};
