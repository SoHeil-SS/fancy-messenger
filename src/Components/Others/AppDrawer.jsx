import { makeStyles } from "@material-ui/core/styles";
import { useImport } from "../../Imports/imports";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function AppDrawer({ appDrawerState }) {
  const {
    List,
    ListItem,
    MailIcon,
    ListItemIcon,
    clsx,
    InboxIcon,
    ListItemText,
    Divider,
    Drawer,
    actionPersonMenuBarClicked,
    dispatch,
  } = useImport();

  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={() => dispatch(actionPersonMenuBarClicked("left", false))}
      onKeyDown={() => dispatch(actionPersonMenuBarClicked("left", false))}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor="left"
        open={appDrawerState}
        onClose={() => dispatch(actionPersonMenuBarClicked("left", false))}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}

export default AppDrawer;
