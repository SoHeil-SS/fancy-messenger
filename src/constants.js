import { idMaker } from "./stateManager/eventHandlers";

export const menuId = "customContextMenu";

export const svgPath = {
  send:
    "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
  pin:
    "M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z",
  times:
    "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
  ellipsis:
    "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",
  bars:
    "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
  search:
    "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
};
export const tempPersons = [
  {
    details: {
      personId: "soheila",
      avatar: "./personPictures/soheila.jpg",
      personName: "Soheila",
      lastChatText: "so excited.>!",
      draft: "",
      lastChatTime: 1606577774127,
      unreadChatCounter: 7,
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
      unreadChatCounter: 1,
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
      unreadChatCounter: 2,
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
      unreadChatCounter: 9,
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
      unreadChatCounter: 3,
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

export function objectConstructor(
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