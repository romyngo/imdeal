'use strict';

Template.chatRow.helpers({

  // Returns relevant user data needed by the view
  getUserData(userId = Meteor.userId() : string) {
    const fromUser = Meteor.users.findOne(userId);

    return {
      username: fromUser.username,
      avatar:   fromUser.profile.avatar,
    };
  },

  // Returns relevant item data needed by the view
  getItemData(itemId : string) {
    const item = Items.findOne(itemId);

    return {
      name:  item.name,
      image: item.picture,
    };
  },

  // Returns the most recent message from list of messages
  getLastMessage() {
    const messages = Template.currentData().chat.messages || [{}];

    // Messages array is assumed to be ordered, hence last element will be most recent
    return _.last(messages);
  },

});