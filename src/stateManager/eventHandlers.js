export function handlePersonClick(state, personId) {
  const {
    persons,
    details,
    chatContent,
    chats,
    personIndex,
    prevPersonIndex,
  } = objectConstructor(state, null, personId);
  let personDraft = persons[personIndex].details.draft;
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
    chatContent: personDraft,
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
    persons.splice(personIndex, 1);
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
    else if (e.key === "Enter" && isEditing) {
      return handleSaveChat(state);
    }
  }

  return state;
}

export function handleInputChange(state, chatContent) {
  const { persons, personIndex, details, chats } = objectConstructor(state);
  details.draft = chatContent;
  persons.splice(personIndex, 1, { details, chats });
  return {
    ...state,
    persons,
    chatContent,
  };
}

export function handleCloseChat(state) {
  return {
    ...state,
    selectedPersonId: null,
    chatContent: "",
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

function idMaker() {
  // let counter = 0;
  // return function id() {
  //   return (counter = counter + 1);
  // };
  return Math.random();
}

/**
 * @export
 * @param {*} time is a present date by millisecond
 * @param {*} method1 can be string value like this : "getMonth" or "getHours"
 * @param {*} method2 can be string value like this : "getDate" or "getMinutes"
 * @param {*} type can be : "/" for date or ":" for time
 * @return {*}
 */
export function handleGetTime(time, method1, method2, type) {
  const dateNow = new Date(time);
  const time1 = dateNow[method1]();
  const time2 = dateNow[method2]();

  return `${method1 === "getMonth" ? time1 + 1 : time1}${type}${time2}`;
}

function objectConstructor(
  {
    selectedPersonId,
    editingChatId,
    chatContent,
    persons,
    editingChat,
    isEditing,
  },
  chatId,
  personId
) {
  const id = personId ? personId : selectedPersonId;
  const { details, chats } = persons.find(
    (person) => person.details.personId === id
  );

  return {
    // VARIABLES =>
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
    editingChatIndex: chats.findIndex((chat) => chat.chatId === editingChatId),

    // STATES =>
    selectedPersonId,
    editingChatId,
    persons: [...persons],
    isEditing,
    editingChat,
    chatContent,
  };
}

/**
 *  @param {*} persons
 * @param {*} index array
 * @param {*} person array
 * @return {*} persons in arrays
 */
function handleFinallyPersons(persons, index, person) {
  for (let i = 0; i <= index.length - 1; i++) {
    persons.splice(index[i], 1, person[i]);
  }

  return persons;
}

export const tempPersons = [
  {
    details: {
      personId: "soheila",
      avatar: "./personPictures/soheila.jpg",
      personName: "Soheila",
      lastChatText: "so excited.>!",
      draft: "",
      lastChatTime: 1606577774127,
      unreadChatCounter: 10,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1606577174127,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1606577274127,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606577374127,
        chatId: idMaker(),
      },
      {
        self: "so excited.>!",
        chatTime: 1606577774127,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: "parvaneh",
      avatar: "./personPictures/parvaneh.jpg",
      personName: "Parvaneh",
      lastChatText: "thanks...",
      draft: "",
      lastChatTime: 1606444467412,
      unreadChatCounter: 10,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1606444167412,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1606444267412,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606444367412,
        chatId: idMaker(),
      },
      {
        self: "thanks...",
        chatTime: 1606444467412,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: "kitty",
      avatar: "./personPictures/kitty.jpg",
      personName: "Kitty",
      lastChatText: "thanks...",
      draft: "",
      lastChatTime: 1606333362326,
      unreadChatCounter: 2,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1606333062326,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1606333162326,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606333262326,
        chatId: idMaker(),
      },
      {
        self: "thanks...",
        chatTime: 1606333362326,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: "love",
      avatar: "./personPictures/love.jpg",
      personName: "Love",
      lastChatText: "not good ... :(",
      draft: "",
      lastChatTime: 1606222261324,
      unreadChatCounter: 4,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1606222211324,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1606222221324,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606222231324,
        chatId: idMaker(),
      },
      {
        self: "not good ... :(",
        chatTime: 1606222261324,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: "nahid",
      avatar: "./personPictures/nahid.jpg",
      personName: "Nahid",
      lastChatText: "dont ask ...",
      draft: "",
      lastChatTime: 1606111165489,
      unreadChatCounter: 10,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1606111115489,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1606111125489,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606111135489,
        chatId: idMaker(),
      },
      {
        self: "dont ask ...",
        chatTime: 1606111165489,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: "sahar",
      avatar: "./personPictures/sahar.jpg",
      personName: "Sahar",
      lastChatText: "uuuuh i dont know !",
      draft: "",
      lastChatTime: 1506999998654,
      unreadChatCounter: 10,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1506999918654,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1506999928654,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1506999938654,
        chatId: idMaker(),
      },
      {
        self: "uuuuh i dont know !",
        chatTime: 1506999998654,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: "sajjad",
      avatar: "./personPictures/sajad.jpg",
      personName: "Sajjad",
      lastChatText: "yey im good!",
      draft: "",
      lastChatTime: 1506888860258,
      unreadChatCounter: 10,
    },
    chats: [
      {
        self: "Hello there...",
        chatTime: 1506888810258,
        chatId: idMaker(),
      },
      {
        self: "nock.. nock...",
        chatTime: 1506888820258,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1506888830258,
        chatId: idMaker(),
      },
      {
        self: "yey im good!",
        chatTime: 1506888860258,
        chatId: idMaker(),
      },
    ],
  },
];
