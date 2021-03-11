import { useImport } from "../../Imports/imports";

function ChatContainer({ chatMode, chatInputText, chatContent }) {
  const {
    ChatTitleBar,
    ChatList,
    ChatInput,
    SendIcon,
    PinIcon,
    ChatDetailPanel,
    dispatch,
    closeClicked,
    onChatMenuClick,
    searchInputState,
    onInputChange,
    onKeyPress,
    handleShowableChats,
    handleSelectedPersonItems,
    editCloseClicked,
    addClicked,
    saveClicked,
    selectedPersonId,
    searchInputText,
    persons,
    useMemo,
    searchMode,
  } = useImport();

  const { details, chats } = useMemo(
    () => handleSelectedPersonItems(selectedPersonId, persons),
    [selectedPersonId, persons, handleSelectedPersonItems]
  );

  const showableChats = useMemo(
    () => handleShowableChats(chats, searchInputText, searchMode),
    [chats, searchInputText, searchMode, handleShowableChats]
  );

  const condition = chatInputText || chatContent;
  const { avatar, personName, draft } = details;

  return (
    <div>
      <ChatTitleBar
        avatar={avatar}
        personName={personName}
        onCloseChat={() => dispatch(closeClicked())}
        onChatMenuClick={() => dispatch(onChatMenuClick())}
        onSearchIconClick={() => dispatch(searchInputState("chats"))}
      />

      <div className="chatDetail_chat-box__3peJu">
        <ChatList showableChats={showableChats} />

        {chatMode && (
          <ChatDetailPanel
            chatMode={chatMode}
            chatContent={chatContent}
            editCloseClicked={() => dispatch(editCloseClicked())}
          />
        )}

        <ChatInput
          chatInputText={chatInputText}
          draft={draft}
          spanIcon={condition ? <SendIcon /> : <PinIcon />}
          onKeyPress={(e) => e.key === "Enter" && dispatch(onKeyPress())}
          onInputChange={(e) =>
            dispatch(onInputChange(e.target.value, "chatInputText"))
          }
          onSpanClick={
            condition
              ? () =>
                  dispatch(chatMode === "edit" ? saveClicked() : addClicked())
              : () => console.log("Pin Clicked")
          }
        />
      </div>
    </div>
  );
}

export default ChatContainer;
