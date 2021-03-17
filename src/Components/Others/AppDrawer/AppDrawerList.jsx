import { useImport } from "../../../Imports/imports";

function AppDrawerList({ appDrawerListItems }) {
  const { List, ListItem, ListItemText, ListItemIcon, Divider } = useImport();
  return (
    <>
      <List>
        {appDrawerListItems.map((item) => (
          <ListItem button key={item.id.toString()}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
}

export default AppDrawerList;
