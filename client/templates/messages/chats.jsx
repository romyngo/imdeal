'use strict';

Template.chats.helpers({

  // Returns array of chats ordered by date and limited by specified amount
  getOrderedChats(limit = 10 : number) {
    return Chats.find({
      toUserId: Meteor.userId(),
    }, {
      $sort: { timestamp: -1 },
      $limit: limit,
    });
  },

});