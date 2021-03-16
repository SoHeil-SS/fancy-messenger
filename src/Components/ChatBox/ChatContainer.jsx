import { useImport } from "../../Imports/imports";

let selectedPersonDraftChange = "";

const ChatContainer = ({ chatMode, chatInputText, selectedChatContent }) => {
  const {
    ChatTitleBar,
    ChatList,
    useEffect,
    ChatInput,
    AttachFileIcon,
    ChatDetailPanel,
    dispatch,
    actionChatBoxCloseClicked,
    actionChatMenuBarClicked,
    actionSearchIconClicked,
    actionInputChange,
    getSelectedPersonItems,
    getShowableChats,
    setScrollTo,
    actionCancelEditChatClicked,
    actionAddNewChatClicked,
    actionConfirmEditChatClicked,
    actionSelectedPersonDraftChange,
    selectedPersonId,
    searchInputText,
    persons,
    useMemo,
    searchMode,
    TelegramIcon,
    Paper,
    MicNoneIcon,
    IconButton,
    Grid,
    classNames: {
      chatInputContainer,
      chatContainerChatListPaper,
      chatContainerGridContainer,
    },
  } = useImport();

  const { details, chats } = useMemo(
    () => getSelectedPersonItems(selectedPersonId, persons),
    [selectedPersonId, persons, getSelectedPersonItems]
  );

  const showableChats = useMemo(
    () => getShowableChats(chats, searchInputText, searchMode),
    [chats, searchInputText, searchMode, getShowableChats]
  );

  useEffect(() => {
    const timeout = chatInputText === "" ? 0 : 2000;
    if (chatMode !== "edit") {
      //FIXME clearTimeOut ID need to fix .
      clearTimeout(selectedPersonDraftChange);
      selectedPersonDraftChange = setTimeout(
        () =>
          dispatch(
            actionSelectedPersonDraftChange({ chatInputText, selectedPersonId })
          ),
        timeout
      );
    }
  }, [
    chatInputText,
    selectedPersonId,
    actionSelectedPersonDraftChange,
    chatMode,
    dispatch,
  ]);

  useEffect(() => {
    setScrollTo("chat-list");
  }, [chats, setScrollTo]);

  const condition = chatInputText || selectedChatContent;
  const { avatar, personName } = details;

  return (
    <Grid className={chatContainerGridContainer} item container xs={8}>
      <ChatTitleBar
        avatar={avatar}
        personName={personName}
        onCloseChat={() => dispatch(actionChatBoxCloseClicked())}
        onChatMenuClick={() => dispatch(actionChatMenuBarClicked())}
        onSearchIconClick={() => dispatch(actionSearchIconClicked("chats"))}
      />

      <Grid item xs={12}>
        <Paper id="chat-list" className={chatContainerChatListPaper}>
          <ChatList showableChats={showableChats} />
        </Paper>
      </Grid>

      {chatMode && (
        <ChatDetailPanel
          chatMode={chatMode}
          selectedChatContent={selectedChatContent}
          editCloseClicked={() => dispatch(actionCancelEditChatClicked())}
        />
      )}

      <Paper className={chatInputContainer}>
        <IconButton onClick={() => console.log("Pin Clicked")}>
          <AttachFileIcon />
        </IconButton>

        <ChatInput
          chatInputText={chatInputText}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              chatInputText &&
                dispatch(
                  chatMode === "edit"
                    ? actionConfirmEditChatClicked()
                    : actionAddNewChatClicked()
                );
            }
          }}
          onInputChange={(e) =>
            dispatch(actionInputChange(e.target.value, "chatInputText"))
          }
        />

        {condition ? (
          <IconButton
            onClick={() =>
              dispatch(
                chatMode === "edit"
                  ? actionConfirmEditChatClicked()
                  : actionAddNewChatClicked()
              )
            }
          >
            <TelegramIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton onClick={() => console.log("Mic Clicked")}>
            <MicNoneIcon />
          </IconButton>
        )}
      </Paper>
    </Grid>
  );
};

export default ChatContainer;
