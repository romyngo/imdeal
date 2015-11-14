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

  // Callback for Facebook toggle button
  'click .toggle-facebook':   (event) => toggleButtonEvent(event, 'facebookShare'),
  'click .toggle-instagram':  (event) => toggleButtonEvent(event, 'instagramShare'),

});

function toggleButtonEvent(event, networkName : string) {
  event.preventDefault();

  Meteor.call('toggleSharingOption', networkName, !Meteor.user().settings[networkName], (error) => {
    if (error) {
      return console.error('Could not toggle facebook settings.');
    }
    $(event.target).closest('.toggle').toggleClass('active');
  });
}