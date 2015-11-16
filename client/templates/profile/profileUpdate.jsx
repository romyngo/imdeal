'use strict';

Template.profileUpdate.events({
  'submit .profile-update-form': function(event) {
    event.preventDefault();

    const userEntry = {
      username:             event.target.username.value,
      'profile.name':       event.target.name.value,
      'profile.intro':      event.target.intro.value,
      'profile.phone':      event.target.phone.value,
      'profile.gender':     event.target.gender.value,
    };

    Meteor.call('updateProfile', userEntry, (error, data) => {
      if (error) {
        return console.error(error);
      }
    });
  },

});