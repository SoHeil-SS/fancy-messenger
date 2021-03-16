import { useImport } from "../../Imports/imports";

const ChatTitleBar = ({
  avatar,
  personName,
  onCloseChat,
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
    Typography,
    classNames: {
      defaultIconSize,
      avatarLargeSize,
      chatTitleBarPaper,
      chatTitleBarLastSeen,
      chatTitleBarBoxContainer,
      chatTitleBarPersonDetailsBox,
      chatTitleBarPersonDetailsBoxAvatar,
    },
  } = useImport();

  return (
    <Paper className={chatTitleBarPaper}>
      <Box className={chatTitleBarBoxContainer}>
        <Box>
          <IconButton onClick={onCloseChat}>
            <CloseIcon className={defaultIconSize} />
          </IconButton>
        </Box>
        <Box className={chatTitleBarPersonDetailsBox}>
          <Box className={chatTitleBarPersonDetailsBoxAvatar}>
            <Avatar className={avatarLargeSize} src={avatar} alt={personName} />
          </Box>
          <Box>
            <Typography>{personName}</Typography>
            <Typography className={chatTitleBarLastSeen}>
              last seen 666 minutes ago
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton onClick={onSearchIconClick}>
            <SearchIcon className={defaultIconSize} />
          </IconButton>
          <ChatMenu onChatMenuClick={onChatMenuClick} />
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatTitleBar;
