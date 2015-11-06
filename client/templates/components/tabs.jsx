'use strict';

Template.tabs.events({

  'click a': function(e) {
    $('.tab-item').removeClass('active');
    $(e.target).closest('.tab-item').addClass('active');
  },

});