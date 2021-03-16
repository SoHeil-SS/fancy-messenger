import { useImport } from "../../Imports/imports";

const PersonListItem = ({
  draft,
  avatar,
  personName,
  lastChatText,
  lastChatTime,
  unreadChatCounter,
  onPersonClick,
  selected,
}) => {
  const {
    Paper,
    Grid,
    Typography,
    Avatar,
    Badge,
    ListItem,
    classNames: {
      personListItemListItem,
      personListItemContainer,
      personListItemPaper,
      personListItemUnreadBadge,
      avatarLargeSize,
    },
  } = useImport();

  return (
    <div className={personListItemContainer}>
      <Paper
        elevation={3}
        onClick={onPersonClick}
        className={personListItemPaper}
      >
        <ListItem button className={personListItemListItem} selected={selected}>
          <Grid container wrap="nowrap" justify="space-between" spacing={2}>
            <Grid item>
              <Avatar src={avatar} className={avatarLargeSize}></Avatar>
            </Grid>
            <Grid item lg zeroMinWidth container justify="flex-start">
              <Grid item md>
                <Typography noWrap>{personName}</Typography>
                <Grid item md></Grid>
                <Typography noWrap>
                  <span>
                    {draft && <span className={{ color: "red" }}>Draft: </span>}
                    {draft || lastChatText}
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography noWrap>{lastChatTime}</Typography>
              {unreadChatCounter && (
                <Grid item>
                  <Badge
                    pill
                    variant="primary"
                    className={personListItemUnreadBadge}
                  >
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
};

export default PersonListItem;
