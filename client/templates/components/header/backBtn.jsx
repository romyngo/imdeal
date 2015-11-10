'use strict';

Template.backBtn.events({

  'click button.back-btn': function(event) {
    event.preventDefault();

    history.back();
  },

});