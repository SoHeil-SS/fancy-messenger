import { useImport } from "./Imports/imports";

function AppContainer({
  loading,
  chatMode,
  chatInputText,
  selectedChatContent,
  notificationState,
  appDrawerState,
  dialogMode,
}) {
  const {
    Portal,
    PersonContainer,
    ChatContainer,
    selectedPersonId,
    ContactsDialog,
    Loader,
    ToastContainer,
    ContextMenu,
    DeleteDialog,
    SuccessSnack,
    DeletedMessageSnack,
    AppDrawer,
    Grid,
    classNames: {
      appContainerGridContainer,
      appContainerChatContainerBackground,
      loaderDefaultStyle,
    },
  } = useImport();

  return (
    <>
      <Grid item container xs={12} className={appContainerGridContainer}>
        <PersonContainer />
        {!selectedPersonId && loading && (
          <Loader className={loaderDefaultStyle} />
        )}
        {selectedPersonId ? (
          <>
            <ChatContainer
              chatMode={chatMode}
              chatInputText={chatInputText}
              selectedChatContent={selectedChatContent}
            />
          </>
        ) : (
          <div className={appContainerChatContainerBackground}></div>
        )}
      </Grid>
      <Portal>
        <ToastContainer />
        <ContextMenu />
        {dialogMode === ("forward" || "contacts") && (
          <ContactsDialog dialogMode={!!dialogMode} />
        )}
        {dialogMode === "deleteMessage" && (
          <DeleteDialog dialogMode={!!dialogMode} />
        )}
        {notificationState === "messageDeleted" && (
          <DeletedMessageSnack notificationState={!!notificationState} />
        )}
        {notificationState === "messageSaved" && (
          <SuccessSnack notificationState={!!notificationState} />
        )}
        <AppDrawer appDrawerState={appDrawerState} />
      </Portal>
    </>
  );
}

export default AppContainer;
