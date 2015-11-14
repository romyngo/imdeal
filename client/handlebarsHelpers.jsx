'use strict';

// Returns timestamp based on the difference from current time
UI.registerHelper('getFormattedTimestamp', function(timestamp = moment() : Date) {
  return moment(timestamp).calendar(null, {
    lastDay :  '[Yesterday]',
    sameDay :  'LT',
    lastWeek : 'dddd',
    sameElse : 'DD/MM/YY',
  });
});

UI.registerHelper('getFormattedPrice', function(price: int) {
  return parseFloat(price / 100).toFixed(2);
});

UI.registerHelper('getUserAvatar', function(user : Object) {
  return user.profile.avatar ? user.profile.avatar : '/img/no_avatar.png';
});