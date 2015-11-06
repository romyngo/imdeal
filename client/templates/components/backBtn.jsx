'use strict';

Template.backBtn.events({

  'click a.back-btn': function(event) {
    event.preventDefault();

    history.back();
  },

});