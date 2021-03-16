import { useImport } from "../../Imports/imports";

const ChatDetailPanel = ({
  selectedChatContent,
  editCloseClicked,
  chatMode,
}) => {
  const {
    Button,

    classNames: {
      chatDetailPanelEditingMessageHeader,
      chatDetailPanelEditingMessageText,
      chatDetailPanelContainer,
    },
  } = useImport();

  return (
    <div className={chatDetailPanelContainer}>
      <div>
        <span className={chatDetailPanelEditingMessageHeader}>
          {chatMode} message
        </span>
        <Button onClick={editCloseClicked}>X</Button>
      </div>
      <p className={chatDetailPanelEditingMessageText}>
        {selectedChatContent}{" "}
      </p>
    </div>
  );
};

export default ChatDetailPanel;
