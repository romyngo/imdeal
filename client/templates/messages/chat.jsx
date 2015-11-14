'use strict';

Template.chat.helpers({

  // Returns relevant user data needed by the view
  getUserData(userId = Meteor.userId() : string) {
    const fromUser = Meteor.users.findOne(userId);

    return {
      username: fromUser.username,
      avatar:   fromUser.profile.avatar,
    };
  },

  // Returns all messages of this chat, limited to amount specified
  getLimitedMessages(limit = 10 : number) {
    return Template.currentData().chat.messages.splice(0, limit);
  },

});

Template.chat.events({

});