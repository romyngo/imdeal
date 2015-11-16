'use strict';

Template.chatTabs.events({

  // Callback for buying tab
  'click .control-item.buying-tab': function(event) {
    switchActiveClass($(event.target));

    // Switch Session variable to allow view to show buying chats
    Session.set('showBuyingChats', true);
  },

  // Callback for selling tab
  'click .control-item.selling-tab': function(event) {
    switchActiveClass($(event.target));

    // Switch Session variable to allow view to show selling chats
    Session.set('showBuyingChats', false);
  },

});

// General function to switch active class on buying/selling buttons
function switchActiveClass(target) {
  target.siblings().removeClass('active');
  target.addClass('active');
}