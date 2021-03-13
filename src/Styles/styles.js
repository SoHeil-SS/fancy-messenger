import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();

export const styles = {
  personListItem: {
    container: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
      width: "100%",
      position: "relative",
      // left: "-1%",
    },
    paperItem: {
      margin: `${theme.spacing(0.4)}px auto`,
    },
    listItem: { padding: theme.spacing(2.5, 2) },
    unreadBadge: {
      float: "right",
    },
  },
  searchBar: {
    box: {
      display: "flex",
      minWidth: "300px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    container: {
      position: "relative",
      width: "92%",
      minWidth: "300px",
      margin: "auto",
    },
    searchInput: {
      width: "100%",
    },
    searchInputBox: {
      width: "100%",
      textAlign: "center",
    },
  },
  icons: {
    defaultStyle: { fontSize: "30px" },
    searchIcon: { fontSize: "35px" },
    menuIcon: { fontSize: "35px" },
    arrowBackIcon: { fontSize: "35px" },
  },
  textarea: {
    overflow: "hidden",
  },
  avatarStyle: {
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
  chatTitleBar: {
    container: { width: "97%", margin: "auto" },
  },
  chatInput: {
    container: { width: "97%" },
  },
};
