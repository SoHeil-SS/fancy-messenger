export const handlePersonItems = (personItem) =>
  personItem.chats.length > 0
    ? personItem.chats[personItem.chats.length - 1]
    : {};
