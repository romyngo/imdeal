'use strict';

Template.messageItem.helpers({

  getFormattedDate() {
    const timestamp = Template.currentData().lastMessage.timestamp || moment();

    return moment(timestamp).calendar(null, {
      lastDay :  '[Yesterday]',
      sameDay :  'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY',
    });
  },

  getItemObject() {
    return Items.findOne(Template.currentData().itemId);
  },

});