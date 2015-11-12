'use strict';

Template.messageRow.helpers({

  // Returns timestamp based on the difference from current time
  getFormattedTimestamp(timestamp = moment() : Date) {
    return moment(timestamp).calendar(null, {
      lastDay :  '[Yesterday]',
      sameDay :  'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY',
    });
  },

});

Template.messageRow.events({


});