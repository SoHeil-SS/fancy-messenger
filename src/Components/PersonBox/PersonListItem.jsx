import { useImport } from "../../Imports/imports";

export default function PersonListItem({
  draft,
  avatar,
  personName,
  lastChatText,
  lastChatTime,
  unreadChatCounter,
  onPersonClick,
  selected,
}) {
  const {
    Paper,
    Grid,
    Typography,
    Avatar,
    Badge,
    styles,
    ListItem,
  } = useImport();

  const {
    personListItem: { container, paperItem, unreadBadge, listItem },
    avatarStyle: { large },
  } = styles();

  return (
    <div style={container}>
      <Paper elevation={3} onClick={onPersonClick} style={paperItem}>
        <ListItem button style={listItem} selected={selected}>
          <Grid container wrap="nowrap" justify="space-between" spacing={2}>
            <Grid item>
              <Avatar src={avatar} style={large}></Avatar>
            </Grid>
            <Grid item lg zeroMinWidth container justify="flex-start">
              <Grid item md>
                <Typography noWrap>{personName}</Typography>
                <Grid item md></Grid>
                <Typography noWrap>
                  <span>
                    {draft && <span style={{ color: "red" }}>Draft: </span>}
                    {draft || lastChatText}
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography noWrap>{lastChatTime}</Typography>
              {unreadChatCounter && (
                <Grid item>
                  <Badge pill variant="primary" style={unreadBadge}>
                    {unreadChatCounter}
                  </Badge>
                </Grid>
              )}
            </Grid>
          </Grid>
        </ListItem>
      </Paper>
    </div>
  );
}
