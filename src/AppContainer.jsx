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
    DeleteNotify,
    SuccessNotify,
    AppDrawer,
    Grid,
    notifyMessage,
    classNames: {
      appContainerGridContainer,
      appContainerChatContainerBackground,
      loaderDefaultStyle,
    },
  } = useImport();

  //TODO CLEANUP VARIABLES
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
        {notificationState === "delete" && (
          <DeleteNotify
            deleteMessage={notifyMessage}
            notificationState={!!notificationState}
          />
        )}
        {notificationState === "success" && (
          <SuccessNotify
            successMessage={notifyMessage}
            notificationState={!!notificationState}
          />
        )}
        <AppDrawer appDrawerState={appDrawerState} />
      </Portal>
    </>
  );
}

export default AppContainer;
