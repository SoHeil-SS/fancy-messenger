import { utilsFunctionsAndHooks } from "../Functions/utilsFunctionsAndHooks";

import { theme } from "react-contexify";

const { idMaker } = utilsFunctionsAndHooks;

const avatarUrl = "./Assets/Pictures/PersonPictures";

const menuId = "customContextMenu";
const tempPersons = [
  {
    details: {
      personId: "soheila",
      showOnList: true,
      avatar: `${avatarUrl}/soheila.jpg`,
      personName: "Soheila",
      lastActivity: 1606577774127,
      draft: "",
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
      showOnList: true,
      avatar: `${avatarUrl}/parvaneh.jpg`,
      personName: "Parvaneh",
      lastActivity: 1606444467412,

      draft: "how u doing ?",
      unreadChatCounter: "",
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
      showOnList: true,
      avatar: `${avatarUrl}/kitty.jpg`,
      personName: "Kitty",
      lastActivity: 1606333362326,
      draft: "",
      unreadChatCounter: "",
    },
    chats: [
      // {
      //   self: "Hello there...",
      //   chatTime: 1606333062326,
      //   chatId: idMaker(),
      // },
      // {
      //   self: "nock.. nock...",
      //   chatTime: 1606333162326,
      //   chatId: idMaker(),
      // },
      // {
      //   person: "Hi :) how are u... ?",
      //   chatTime: 1606333262326,
      //   chatId: idMaker(),
      // },
      // {
      //   self: "thanks...",
      //   chatTime: 1606333362326,
      //   chatId: idMaker(),
      // },
    ],
  },
  {
    details: {
      personId: "love",
      showOnList: true,
      avatar: `${avatarUrl}/love.jpg`,
      personName: "Love",
      lastActivity: 1606222261324,
      draft: "",
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
      showOnList: false,
      avatar: `${avatarUrl}/nahid.jpg`,
      personName: "Nahid",
      lastActivity: 1606111165489,
      draft: "",
      unreadChatCounter: "",
    },
    chats: [],
  },
  {
    details: {
      personId: "sahar",
      showOnList: true,
      avatar: `${avatarUrl}/sahar.jpg`,
      personName: "Sahar",
      lastActivity: 1506999998654,
      draft: "",
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
      showOnList: false,
      avatar: `${avatarUrl}/sajad.jpg`,
      personName: "Sajjad",
      lastActivity: 1506888860258,
      draft: "",
      unreadChatCounter: "",
    },
    chats: [],
  },
];

const dialog = {
  messages: {
    deleteMessage: "Are you sure to Delete this message?",
    startupMessage: "برای مدیریت چت ها کانتکست منیو در نظر گرفته شده 😊 ",
    loadIncomplete: "لطفا تا کامل شدن بارگذاری صبر کنید ",
  },
};

const notificationMessage = {
  successEdit: "Message edited successfully.",
  deleteMessage: "Message deleted successfully.",
};

export const variables = {
  menuId,
  theme,
  tempPersons,
  dialog,
  notificationMessage,
};
