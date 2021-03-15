import { createMuiTheme, makeStyles } from "@material-ui/core";

const theme = createMuiTheme();

export const useStyles = makeStyles((theme) => ({
  ...searchBar,
  ...personListItem,
  ...avatarStyle,
  ...iconSizes,
  ...ChatContainerChatInputContainer,
  ...textareaStyles,
  ...chatTitleBar,
  ...chatList,
  ...chatItem,
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
  chatTitleBarContainer: { width: "97%", margin: "auto" },
};

const chatList = {
  chatListList: {
    flex: "1 1",
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
    overflowY: "auto",
    padding: " 0 25px",
    marginTop: "5px",
  },
};

const chatItem = {
  chatItemPaper: {
    width: "40%",
    position: "relative",
    backgroundColor: "red",
    margin: theme.spacing(2, 2),
    "&:hover": {
      cursor: "pointer",
    },
  },
};
