'use strict';

Meteor.methods({

  // Update social network sharing options for users
  toggleSharingOption(networkName : string, newStatus : boolean) {
    // Get appropriate update modifier for specified social network
    const modifier = (() => {
      switch (networkName) {
        case 'facebookShare':
          return { $set: { 'settings.facebookShare' : newStatus } };
        case 'instagramShare':
          return { $set: { 'settings.instagramShare': newStatus } };
        default:
          return {};
      }
    })();

    // Perform update and act accordingly
    const docsUpdated = Meteor.users.update(this.userId, modifier);
    if (docsUpdated !== 1) {
      throw new Meteor.Error(500, 'User document cannot be updated.');
    }
    return docsUpdated;
  },

});