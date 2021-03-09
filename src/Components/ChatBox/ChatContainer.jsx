import { useImport } from "../../Imports/imports";

function ChatContainer({
  mode,
  selectedPersonId,
  persons,
  searchInputText,
  searchMode,
  chatInputText,
  chatContent,
}) {
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
    onSearchClick,
    onInputChange,
    onKeyPress,
    handleFilterChats,
    handleSelectedPerson,
    editCloseClicked,
    addClicked,
    saveClicked,
  } = useImport();

  const { details, chats } = handleSelectedPerson(selectedPersonId, persons);

  const filteredChats = handleFilterChats(
    chats,
    searchInputText,
    searchMode,
    selectedPersonId
  );

  const { avatar, personName, draft } = details;
  const condition = !!chatInputText;

  return (
    <div>
      <ChatTitleBar
        avatar={avatar}
        personName={personName}
        onCloseChat={() => dispatch(closeClicked())}
        onChatMenuClick={() => dispatch(onChatMenuClick())}
        onSearchClick={() => dispatch(onSearchClick("chats"))}
      />

      <div className="chatDetail_chat-box__3peJu">
        <ChatList chats={filteredChats} />

        <ChatDetailPanel
          mode={mode}
          chatContent={chatContent}
          editCloseClicked={() => dispatch(editCloseClicked())}
        />

        <ChatInput
          chatInputText={chatInputText}
          draft={draft}
          spanIcon={condition ? <SendIcon /> : <PinIcon />}
          onKeyPress={(e) => dispatch(onKeyPress(e))}
          onInputChange={(e) =>
            dispatch(onInputChange(e.target.value, "chatInputText"))
          }
          onSpanClick={
            condition
              ? () => dispatch(mode === "edit" ? saveClicked() : addClicked())
              : () => console.log("Pin Clicked")
          }
        />
      </div>
    </div>
  );
}

export default ChatContainer;
