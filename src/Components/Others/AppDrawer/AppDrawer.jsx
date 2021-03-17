import { useImport } from "../../../Imports/imports";

function AppDrawer({ appDrawer: { drawerState, drawerPosition } }) {
  const {
    Drawer,
    AppDrawerList,
    appDrawerLists,
    clsx,
    actionAppDrawerStateChange,
    dispatch,
    classNames: { fullList, list },
  } = useImport();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    } else {
      dispatch(actionAppDrawerStateChange());
    }
  };

  return (
    <Drawer
      anchor={drawerPosition}
      open={drawerState}
      onClose={(e) => toggleDrawer(e)}
    >
      <div
        className={clsx(list, {
          [fullList]: drawerPosition === "top" || drawerPosition === "bottom",
        })}
        role="presentation"
        onClick={(e) => toggleDrawer(e)}
        onKeyDown={(e) => toggleDrawer(e)}
      >
        {appDrawerLists.map((appDrawerListItem, index) => (
          <AppDrawerList key={index} appDrawerListItems={appDrawerListItem} />
        ))}
      </div>
    </Drawer>
  );
}

export default AppDrawer;
