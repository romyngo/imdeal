'use strict';

Template.itemRow.helpers({

  getUserDetails(userId : string) {
    const user = Meteor.users.findOne(userId);

    return {
      username: user.username,
      avatar:   user.profile.avatar,
    };
  },

});
