'use strict';

Template.upload.events({

  // Social media sharing toggle callback
  'click .toggle': function(event) {
    event.preventDefault();

    $(event.target).closest('.toggle').toggleClass('active');
  },

  // Submit button callback
  'submit .upload-form': function(event) {
    event.preventDefault();

    // Construct new item document for entry into Items collection
    const newItemEntry = {
      userId:       Meteor.userId(),
      name:         event.target.name.value,
      askingPrice:  event.target.price.value * 100,
      location:     event.target.location.value,
      picture:      Session.get('croppedImage'),
      hashtags:     extractHashtags(event.target.description.value),
      description:  event.target.description.value,
    };

    Items.insert(newItemEntry, (error, itemId) => {
      if (error) {
        return console.error('Cannot make new item entry:\n' + error);
      }
      console.log('It worked: ' + itemId);

      // Remove captured photos from Session
      Session.set('originalImage', null);
      Session.set('croppedImage', null);

      // Go to view item
      Router.go('item', {_id: itemId}, {replaceState: true});
    });
  },

});

Template.upload.helpers({

  getSessionImage() {
    return Session.get('croppedImage');
  },

});

function extractHashtags(text : string) {
  const HASHTAG_REGEX = /(#\w+)/;

  return _.chain(text.split(HASHTAG_REGEX))         // Split the text into hashtag groups
          .filter((elem) => _.first(elem) === '#')  // Filter out non-hashtag words
          .value();
}