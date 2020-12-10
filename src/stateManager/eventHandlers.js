import { toast } from "react-toastify";
import { objectConstructor } from "../constants";

export function handlePersonClick(state, personId) {
  const {
    persons,
    details,
    chatContent,
    chats,
    personIndex,
    prevPersonIndex,
  } = objectConstructor(state, null, personId);
  const draft = persons[personIndex].details.draft;

  if (details.unreadChatCounter) {
    details.unreadChatCounter = "";
  }
  if (chatContent) {
    const prevPerson = { ...persons[prevPersonIndex] };
    const prevDetails = { ...prevPerson.details };
    prevDetails.draft = chatContent;
    handleFinallyPersons(
      persons,
      [personIndex, prevPersonIndex],
      [
        { details, chats },
        { ...prevPerson, details: prevDetails },
      ]
    );
  } else {
    handleFinallyPersons(persons, [personIndex], [{ details, chats }]);
  }

  return {
    ...state,
    selectedPersonId: personId,
    chatContent: draft,
    isEditing: false,
    persons,
  };
}

export function handleAddChat(state) {
  const {
    persons,
    personIndex,
    details,
    chats,
    chatContent,
    newDate,
  } = objectConstructor(state);

  details.lastChatTime = newDate;
  details.lastChatText = chatContent;
  details.draft = "";
  chats.push({
    self: chatContent,
    chatTime: newDate,
    chatId: idMaker(),
  });

  handleSortPersons(
    handleFinallyPersons(persons, [personIndex], [{ details, chats }])
  );

  return {
    ...state,
    chatContent: "",
    persons,
  };
}

export function handleCopyChat(state, chatText) {
  console.log(chatText);

  return state;
}

export function handleDeleteChat(state, chatId) {
  const {
    selectedPersonId,
    persons,
    personIndex,
    details,
    chats,
  } = objectConstructor(state, chatId);
  const chatsAfterDelete = chats.filter((chat) => chat.chatId !== chatId);
  const chatsLength = chatsAfterDelete.length;

  if (chatsLength) {
    const lastChat = chatsAfterDelete[chatsLength - 1];
    details.lastChatTime = lastChat.chatTime;
    details.lastChatText = lastChat.self ? lastChat.self : lastChat.person;
    handleFinallyPersons(
      persons,
      [personIndex],
      [{ details, chats: chatsAfterDelete }]
    );
  } else {
    handleFinallyPersons(persons, [personIndex]);
    toast.error(`${details.personName} removed .`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    handleCloseChat();
  }

  return {
    ...state,
    selectedPersonId: chatsLength ? selectedPersonId : null,
    isEditing: false,
    chatContent: persons[personIndex].details.draft,
    persons,
  };
}

export function handleEditChat(state, chatId) {
  const { chats, chatIndex } = objectConstructor(state, chatId);
  const content = chats[chatIndex].self;

  if (!content) {
    return state;
  }

  return {
    ...state,
    isEditing: true,
    chatContent: content,
    editingChatId: chatId,
    editingChat: content,
  };
}

export function handleSaveChat(state) {
  const {
    persons,
    details,
    chats,
    chatContent,
    editingChatIndex,
    personIndex,
  } = objectConstructor(state);
  chats[editingChatIndex].self = chatContent;

  if (chats.length - 1 === editingChatIndex) {
    details.lastChatText = chatContent;
  }
  handleFinallyPersons(persons, [personIndex], [{ chats, details }]);

  return {
    ...state,
    chatContent: "",
    isEditing: false,
    persons,
  };
}

export function handleForwardChat(state, chatId) {
  console.log("forward clicked", chatId);

  return state;
}

export function handleSortPersons(persons) {
  return persons.sort(
    (a, b) =>
      new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
  );
}

export function handleKeyPress(state, e) {
  const { chatContent, isEditing } = state;

  if (chatContent) {
    if (e.key === "Enter" && !isEditing) return handleAddChat(state);
    if (e.key === "Enter" && isEditing) return handleSaveChat(state);
  }

  return state;
}

export function handleInputChange(state, chatContent) {
  return {
    ...state,
    chatContent,
  };
}

export function handleCloseChat(state) {
  return {
    ...state,
    selectedPersonId: null,
    chatContent: "",
    isEditing: false,
  };
}

export function handleCancelEdit(state) {
  const { persons, personIndex } = objectConstructor(state);

  return {
    ...state,
    isEditing: false,
    chatContent: persons[personIndex].details.draft,
  };
}

/**
 * @export
 * @param {*} time date by millisecond
 * @param {*} method1 string value like  : "getMonth","getHours",...
 * @param {*} method2 string value like : "getDate","getMinutes",...
 * @param {*} separator time separator like "/" , ":"
 * @return {*}
 */
export function handleGetTime(time, method1, method2, separator) {
  const dateNow = new Date(time);
  const time1 = dateNow[method1]();
  const time2 = dateNow[method2]();

  return `${method1 === "getMonth" ? time1 + 1 : time1}${separator}${time2}`;
}

/**
 *  @param {*} persons
 * @param {*} index array
 * @param {*} newPerson array
 * @return {*} persons in arrays
 */
function handleFinallyPersons(persons, index, newPerson) {
  for (let i = 0; i <= index.length - 1; i++) {
    persons.splice(index[i], 1, newPerson && newPerson[i]);
  }

  return persons;
}

export function handleDisplayMenu(e, show) {
  show(e, {
    props: { id: Number(e.currentTarget.id), text: e.target.textContent },
  });
}

export function idMaker() {
  return Math.random();
}
