export function handleGetTime(time) {
  const dateNow = new Date(time);
  const getHours = dateNow.getHours();
  const getMinutes = dateNow.getMinutes();
  return `${getHours}:${getMinutes}`;
}

export function handleGetDate(time) {
  const dateNow = new Date(time);
  const getMonth = dateNow.getMonth();
  const getDay = dateNow.getDay();
  return `${getMonth + 1}/${getDay + 22}`;
}

export function idMaker() {
  // let counter = 0;
  // return function id() {
  //   return (counter = counter + 1);
  // };
  return Math.random();
}

// this is temporary .
export const tempPersons = [
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/soheila.jpg",
      personName: "Soheila",
      lastChatText: "so excited.>!",
      lastChatTime: 1606577774127,
      unreadChatCounter: 10,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1606577174127,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1606577274127,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606577374127,
        chatId: idMaker(),
      },
      {
        me: "so excited.>!",
        chatTime: 1606577774127,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/parvaneh.jpg",
      personName: "Parvaneh",
      lastChatText: "thanks...",
      lastChatTime: 1606444467412,
      unreadChatCounter: 10,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1606444167412,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1606444267412,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606444367412,
        chatId: idMaker(),
      },
      {
        me: "thanks...",
        chatTime: 1606444467412,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/kitty.jpg",
      personName: "Kitty",
      lastChatText: "thanks...",
      lastChatTime: 1606333362326,
      unreadChatCounter: 2,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1606333062326,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1606333162326,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606333262326,
        chatId: idMaker(),
      },
      {
        me: "thanks...",
        chatTime: 1606333362326,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/love.jpg",
      personName: "Love",
      lastChatText: "not good ... :(",
      lastChatTime: 1606222261324,
      unreadChatCounter: 4,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1606222211324,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1606222221324,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606222231324,
        chatId: idMaker(),
      },
      {
        me: "not good ... :(",
        chatTime: 1606222261324,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/nahid.jpg",
      personName: "Nahid",
      lastChatText: "dont ask ...",
      lastChatTime: 1606111165489,
      unreadChatCounter: 10,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1606111115489,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1606111125489,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1606111135489,
        chatId: idMaker(),
      },
      {
        me: "dont ask ...",
        chatTime: 1606111165489,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/sahar.jpg",
      personName: "Sahar",
      lastChatText: "uuuuh i dont know !",
      lastChatTime: 1506999998654,
      unreadChatCounter: 10,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1506999918654,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1506999928654,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1506999938654,
        chatId: idMaker(),
      },
      {
        me: "uuuuh i dont know !",
        chatTime: 1506999998654,
        chatId: idMaker(),
      },
    ],
  },
  {
    details: {
      personId: idMaker(),
      avatar: "./personPictures/sajad.jpg",
      personName: "Sajad",
      lastChatText: "yey im good!",
      lastChatTime: 1506888860258,
      unreadChatCounter: 10,
    },
    chats: [
      {
        me: "Hello there...",
        chatTime: 1506888810258,
        chatId: idMaker(),
      },
      {
        me: "nock.. nock...",
        chatTime: 1506888820258,
        chatId: idMaker(),
      },
      {
        person: "Hi :) how are u... ?",
        chatTime: 1506888830258,
        chatId: idMaker(),
      },
      {
        me: "yey im good!",
        chatTime: 1506888860258,
        chatId: idMaker(),
      },
    ],
  },
];
