import { useImport } from "../../Imports/imports";

const ChatTitleBar = ({
  avatar,
  personName,
  onCloseChat,
  //TODO fix chat menu
  onChatMenuClick,
  onSearchIconClick,
}) => {
  const {
    SearchIcon,
    CloseIcon,
    IconButton,
    Avatar,
    Box,
    Paper,
    ChatMenu,
    classNames: { defaultIconSize, avatarLargeSize, chatTitleBarContainer },
  } = useImport();

  return (
    <Paper className={chatTitleBarContainer}>
      <Box
        display="flex"
        flexDirection="row"
        m={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box p={1}>
          <IconButton onClick={onCloseChat}>
            <CloseIcon className={defaultIconSize} />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Avatar className={avatarLargeSize} src={avatar} alt={personName} />
          </Box>
          <Box p={1}>
            <div>{personName}</div>
            <span className="lastSeenSpan">last seen 666 minutes ago</span>
          </Box>
        </Box>
        <Box p={1}>
          <IconButton onClick={onSearchIconClick}>
            <SearchIcon className={defaultIconSize} />
          </IconButton>
          <ChatMenu />
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatTitleBar;

/* <IconButton onClick={onChatMenuClick}>
  <MoreVertIcon className={defaultclassName} />
</IconButton>; */
