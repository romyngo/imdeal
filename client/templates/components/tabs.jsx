'use strict';

Template.tabs.events({

  'click a.tab-item': function(e) {
    const target = $(e.target).closest('.tab-item');
    target.siblings().removeClass('active');
    target.addClass('active');
  },
});