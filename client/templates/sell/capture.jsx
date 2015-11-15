'use strict';

Template.capture.onCreated(function() {
  const originalImage = Session.get('originalImage');

  if (!originalImage) {
    takePhoto(360, 360, 100);
  }
});

// Add draggable layer ontop of photo
Template.capture.onRendered(function() {
  $('.crop-layer').draggable({
    addClass:    false,
    containment: 'parent',
  });
});

Template.capture.events({

  // Callback for clicking Retake button
  'click button.retake-btn': function(event) {
    event.preventDefault();
    takePhoto(360, 360, 100);
  },

});

Template.capture.helpers({

  // Returns the image stored in the Session (or default if not present)
  getSessionImage() {
    const originalImage = Session.get('originalImage');

    return originalImage ? originalImage : 'img/360x360.png';
  },

});

// Standard function to take photo and store in session
function takePhoto(width : int, height : int, quality : int) {
  MeteorCameraUI.getPicture({
    width:    width,
    height:   height,
    quality:  quality,
  }, (error, data) => {
    if (!error) {
      // Update view to display photo
      $('.image-layer').attr('src', data);
      // Store photo in Session
      Session.set('originalImage', data);
    }
  });
}