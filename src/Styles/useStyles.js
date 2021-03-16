import { createMuiTheme, makeStyles } from "@material-ui/core";

const theme = createMuiTheme();

export const useStyles = makeStyles((theme) => ({
  ...appContainer,
  ...searchBar,
  ...personList,
  ...personListItem,
  ...avatarStyle,
  ...iconSizes,
  ...ChatContainerChatInputContainer,
  ...textareaStyles,
  ...chatTitleBar,
  ...chatList,
  ...chatItem,
  ...loader,
}));

const searchBar = {
  searchBarContainer: {
    position: "relative",
    width: "92%",
    minWidth: "300px",
    margin: "auto",
  },
  searchBarBox: {
    display: "flex",
    minWidth: "300px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBarInput: {
    width: "100%",
  },
  searchBarInputBox: {
    width: "100%",
    textAlign: "center",
  },
};

const personList = {
  personListUl: {
    overflowY: "scroll",
    height: "88vh",
    "&::-webkit-scrollbar ": { display: "none" },
  },
};

const personListItem = {
  personListItemContainer: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    width: "100%",
    position: "relative",
  },
  personListItemPaper: {
    margin: `${theme.spacing(0.4)}px auto`,
  },
  personListItemListItem: { padding: theme.spacing(2.5, 2) },
  personListItemUnreadBadge: {
    float: "right",
  },
};

const avatarStyle = {
  avatarSmallSize: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  avatarLargeSize: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
};

const iconSizes = {
  defaultIconSize: {
    fontSize: "35px",
  },
};

const ChatContainerChatInputContainer = {
  chatInputContainer: {
    width: "97%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
  },
};

const textareaStyles = {
  textarea: {
    overflow: "hidden",
    width: "100%",
  },
};

const chatTitleBar = {
  chatTitleBarContainer: { width: "98%", marginTop: "0.6%" },
};

const chatList = {
  chatListList: {
    height: "80vh",
    // flexDirection: "column",
    overflowY: "scroll",
    padding: " 0 25px",
    marginTop: "5px",

    "&::-webkit-scrollbar ": { display: "none" },
  },
};

const chatItem = {
  chatItemPaper: {
    cursor: "pointer",
    width: "auto",
    maxWidth: "60%",
    padding: "10px",
    height: "fit-content",
    marginTop: "0.5%",
    display: "block",
  },
};

const appContainer = {
  appContainerChatContainerBackground: {
    backgroundImage: 'url("./Assets/Pictures/Backgrounds/chatBox-BG.svg")',
    //  backgroundImage: 'url("../Assets/Pictures/Backgrounds/Facebook_Messenger_logo_2013.svg")',
    backgroundSize: " 25%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  appContainerGridContainer: {
    backgroundColor: "rgb(235, 232, 232)",
    borderRadius: "5px",
    overflowY: "hidden",
    top: "200px",
    margin: "auto",
    minWidth: "1000px",
  },
};

const loader = {
  loaderDefaultStyle: {
    margin: "33%",
    width: "250px",
    height: "250px",
  },
};
