'use strict';

Template.listingCell.helpers({

  getFormattedPrice(price : int) {
    return parseFloat(price / 100).toFixed(2);
  },

});