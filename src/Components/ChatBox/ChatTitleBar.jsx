import { useImport } from "../../Imports/imports";

function ChatTitleBar({
  avatar,
  personName,
  onCloseChat,
  onChatMenuClick,
  onSearchIconClick,
}) {
  const {
    SearchIcon,
    CloseIcon,
    IconButton,
    MoreVertIcon,
    styles,
    Avatar,
    Box,
    Paper,
  } = useImport();

  const { defaultStyle } = styles.icons;
  const { large } = styles.avatarStyle;
  const { container } = styles.chatTitleBar;

  return (
    <Paper style={container}>
      <Box
        display="flex"
        flexDirection="row"
        m={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box p={1}>
          <IconButton onClick={onCloseChat}>
            <CloseIcon style={defaultStyle} />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Avatar style={large} src={avatar} alt={personName} />
          </Box>
          <Box p={1}>
            <div>{personName}</div>
            <span className="lastSeenSpan">last seen 666 minutes ago</span>
          </Box>
        </Box>
        <Box p={1}>
          <IconButton onClick={onSearchIconClick}>
            <SearchIcon style={defaultStyle} />
          </IconButton>
          <IconButton onClick={onChatMenuClick}>
            <MoreVertIcon style={defaultStyle} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}

export default ChatTitleBar;
