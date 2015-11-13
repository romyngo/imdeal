'use strict';

Template.tabs.events({

  'click a.tab-item': function(event) {
    const target = $(event.target).closest('.tab-item');
    target.siblings().removeClass('active');
    target.addClass('active');
  },

});