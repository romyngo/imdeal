'use strict';

Template.messages.helpers({

  getOrderedChats() {
    return Chats.find({}, {
      sort: {
        'lastMessage.timestamp': -1,
      },
    });
  },

});