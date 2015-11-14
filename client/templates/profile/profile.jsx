'use strict';

Template.profile.helpers({

  // Returns array of listings ordered by date and limited by specified amount
  getOrderedListings(limit = 10 : number) {
    return Items.find({userId: Meteor.userId()}, {
      sort: { createdAt: -1 },
      limit: limit,
    });
  },

});