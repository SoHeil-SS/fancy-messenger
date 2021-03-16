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
      personListItemDraftTypography,
    },
  } = useImport();

  return (
    <Grid className={personListItemContainer}>
      <Paper
        elevation={1}
        onClick={onPersonClick}
        className={personListItemPaper}
      >
        <ListItem button className={personListItemListItem} selected={selected}>
          <Grid container wrap="nowrap" justify="space-between" spacing={2}>
            <Grid item>
              <Avatar src={avatar} className={avatarLargeSize} />
            </Grid>
            <Grid item lg zeroMinWidth container justify="flex-start">
              <Grid item md>
                <Typography noWrap>{personName}</Typography>
                <Grid item md></Grid>
                <Typography noWrap>
                  {draft && (
                    <span className={personListItemDraftTypography}>
                      Draft:{" "}
                    </span>
                  )}
                  {draft || lastChatText}
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
    </Grid>
  );
};

export default PersonListItem;
