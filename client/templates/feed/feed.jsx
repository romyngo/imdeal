'use strict';

Template.feed.helpers({

  // Get all follower items and order them by date
  getFollowerListings() {
    return _.chain(Meteor.user().following)
            .map((userId) => Items.find({userId: userId}).map((item) => item))
            .flatten()
            .sort((item) => item.createdAt)
            .value();
  },

});

Template.feed.events({

});