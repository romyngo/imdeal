'use strict';

Template.messageTabs.events({
  'click .control-item': function(event) {
    const target = $(event.target);
    target.siblings().removeClass('active');
    target.addClass('active');
  },

});