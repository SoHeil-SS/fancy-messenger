import { createMuiTheme, makeStyles } from "@material-ui/core";

const theme = createMuiTheme();

export const useStyles = makeStyles((theme) => ({
  ...appContainer,
  ...personContainer,
  ...searchBar,
  ...personList,
  ...personListItem,
  ...avatarStyle,
  ...iconStyles,
  ...ChatContainer,
  ...textareaStyles,
  ...chatTitleBar,
  ...chatList,
  ...chatItem,
  ...chatDetailPanel,
  ...loader,
}));

const personContainer = {
  personContainerGridContainer: {
    paddingRight: "1%",
  },
};

const searchBar = {
  searchBarContainer: {
    position: "relative",
    width: "100%",
    minWidth: "300px",
    margin: "auto",
  },
  searchBarBox: {
    display: "flex",
    minWidth: "300px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 1),
    margin: theme.spacing(1, 1),
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
  personListList: {
    overflowY: "scroll",
    height: "88vh",
    "&::-webkit-scrollbar ": { display: "none" },
  },
};

const personListItem = {
  personListItemContainer: {
    padding: theme.spacing(0.1, 0),
  },
  personListItemPaper: {
    margin: `${theme.spacing(0.4)}px auto`,
    "&:hover": {
      boxShadow: theme.shadows[5],
    },
  },
  personListItemListItem: { padding: theme.spacing(2.5, 2) },
  personListItemUnreadBadge: {
    float: "right",
  },
  personListItemDraftTypography: {
    color: "red",
  },
  personListItemContents: {
    justify: "space-between",
    wrap: "nowrap",
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

const iconStyles = {
  defaultIconSize: {
    fontSize: "35px",
  },
};

const ChatContainer = {
  chatInputContainer: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    padding: theme.spacing(1, 0.5),
  },
  chatContainerChatListPaper: {
    backgroundColor: "lightGray",
    margin: theme.spacing(3, 0),
    overflowY: "scroll",
    height: "77vh",
    wordWarp: "break-word",
    "&::-webkit-scrollbar ": { display: "none" },
  },
};

const textareaStyles = {
  textarea: {
    overflow: "scroll",
    width: "100%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
};

const chatTitleBar = {
  chatTitleBarPaper: { width: "100%", marginTop: "0.6%" },
  chatTitleBarLastSeen: {
    fontSize: "16px",
  },
  chatTitleBarBoxContainer: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(0.5, 0),
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatTitleBarPersonDetailsBox: {
    display: "flex",
    flexDirection: "row",
  },
  chatTitleBarPersonDetailsBoxAvatar: {
    marginRight: "10px",
  },
};

const chatList = {
  chatListChatsGrid: {
    // height: "78vh",
    overflowY: "scroll",
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
    margin: "0.5% 10px 0",
    display: "block",
    wordWarp: "break-word",
  },
};

const chatDetailPanel = {
  chatDetailPanelContainer: {
    width: "100%",
    backgroundColor: "#2f2f2f",
    height: "4.5rem",
  },
  chatDetailPanelEditingMessageHeader: {
    marginRight: "auto",
    paddingLeft: "25px",
    color: "wheat",
    fontSize: "27px",
    textTransform: "capitalize",
  },
  chatDetailPanelEditingMessageText: {
    paddingLeft: "40px",
    color: "lightsalmon",
    fontSize: "25px",
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
    padding: "20px",
    minWidth: "1000px",
  },
};

const loader = {
  appLoader: {
    width: "250px",
    height: "250px",
  },
};
