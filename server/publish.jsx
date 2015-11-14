'use strict';

// Auto publish user info for current user
Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, {
    fields: {
      numFollowers: 1,
      numFollowing: 1,
      numPosts:     1,
      listings:     1,
      following:    1,
      'settings.facebookShare':  1,
      'settings.instagramShare': 1,
    },
  });
});