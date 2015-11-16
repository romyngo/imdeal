'use strict';

Template.chats.onCreated(function() {
  // Set default option in Session to show buying chats
  Session.setDefault('showBuyingChats', true);
});

Template.chats.helpers({

  // Returns array of chats, ordered by date, for either buying or selling chats
  getOrderedChats(limit = 10 : number) {
    if (Session.get('showBuyingChats')) {
      return getOrderedChats({ toUserId: Meteor.userId() }, limit);
    } else {
      return getOrderedChats({ fromUserId: Meteor.userId() }, limit);
    }
  },

});

// Returns array of chats ordered by date and limited by specified amount
function getOrderedChats(query : Object, limit : number) {
  return Chats.find(query, {
    sort: { timestamp: -1 },
    limit: limit,
  });
}

