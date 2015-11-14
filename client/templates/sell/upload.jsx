'use strict';

Template.upload.events({
  'click .toggle': function(event) {
    event.preventDefault();
    $(event.target).closest('.toggle').toggleClass('active');
  },

});

Template.upload.helpers({
  getSessionImage() {
    return Session.get('croppedImage');
  },

});