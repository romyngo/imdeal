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
      image: item.picture,
    };
  },

  // Returns timestamp based on the difference from current time
  getFormattedTimestamp(timestamp = moment() : Date) {
    return moment(timestamp).calendar(null, {
      lastDay :  '[Yesterday]',
      sameDay :  'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY',
    });
  },

});