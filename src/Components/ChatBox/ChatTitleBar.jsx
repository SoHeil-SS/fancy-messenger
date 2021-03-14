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
    styles,
    Avatar,
    Box,
    Paper,
    ChatMenu,
  } = useImport();

  const {
    icons: { defaultStyle },
    avatarStyle: { large },
    chatTitleBar: { container },
  } = styles();

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
          <ChatMenu />
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatTitleBar;

/* <IconButton onClick={onChatMenuClick}>
  <MoreVertIcon style={defaultStyle} />
</IconButton>; */
