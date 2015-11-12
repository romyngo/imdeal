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

  // Returns message log in order
  getOrderedMessages(limit = 10 : number) {
    const orderedMessages = _.chain(Template.currentData().chat.messages)
                             .sortBy((message) => message.timestamp)
                             .value();

    return orderedMessages.splice(0, limit);
  },

});

Template.chat.events({

});