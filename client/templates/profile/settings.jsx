'use strict';

Template.settings.events({

  // Callback to handle toggle change
  'click .toggle': function(event) {
    event.preventDefault();
  },

  // Callback for logout button
  'click .logout-btn': function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  },

  // Callback for social network toggle buttons
  'click .toggle-facebook':   (event) => toggleButtonEvent(event, 'facebookShare'),
  'click .toggle-instagram':  (event) => toggleButtonEvent(event, 'instagramShare'),

});

// For given network button, toggles user sharing settings and changes view to reflect
function toggleButtonEvent(event, networkName = 'facebookShare' : string) {
  event.preventDefault();

  // Call method to update user sharing settings
  Meteor.call('toggleSharingOption', networkName, !Meteor.user().settings[networkName], (error) => {
    if (error) {
      return console.error('Could not toggle network sharing settings.');
    }
    // If everything went fine, change the toggle class so the view updates
    $(event.target).closest('.toggle').toggleClass('active');
  });
}