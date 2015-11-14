'use strict';

Template.capture.onCreated(function() {
  const originalImage = Session.get('originalImage');

  if (!originalImage) {
    uploadPhoto(360, 360, 100);
  }
});

Template.capture.onRendered(function() {
  $('.crop-layer').draggable({
    addClass: false,
    containment: 'parent',
  });
});


Template.capture.events({
  'click button.retake-btn': function(event) {
    event.preventDefault();
    uploadPhoto(360, 360, 100);
  },
});

Template.capture.helpers({
  getSessionImage() {
    const originalImage = Session.get('originalImage');

    return originalImage ? originalImage : 'img/360x360.png';
  },

});

function uploadPhoto(width, height, quality) {
  MeteorCameraUI.getPicture({
    width: width,
    height: height,
    quality: quality,
  }, function(error, data) {
    if (!error) {
      $('.image-layer').attr('src', data);
      Session.set('originalImage', data);
    }
  });
}