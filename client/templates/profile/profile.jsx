'use strict';

Template.profile.helpers({

  // Returns array of listings ordered by date and limited by specified amount
  getOrderedListings(limit = 10 : Number) {
    var orderedListings = _.chain(Meteor.user().listings)
                           .sortBy((listing) => listing.createdAt)
                           .value();

    return orderedListings.splice(0, limit);
  },

});