'use strict';

Template.upload.onCreated(function() {
  var instance = this;

  instance.image = new ReactiveVar('/img/100x100.png');
  uploadPhoto(instance, 360, 360, 100);
});

Template.upload.events({
  'click .toggle': function(event) {
    event.preventDefault();
    $(event.target).closest('.toggle').toggleClass('active');
  },

  'click .photo-upload-btn': function(event, instance) {
    event.preventDefault();
    uploadPhoto(instance, 360, 360, 100);
  },
});

Template.upload.helpers({
  getImage() {
    return Template.instance().image.get();
  },

});

function cropPhoto(reactiveImage, image, width, height) {
  // create temporary image placeholder
  const img = new Image();

  img.onload = function() {
    // create an off-screen canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // set its dimension to target size
    canvas.width = width;
    canvas.height = height;

    const sourceX = (this.width - width) / 2;
    const sourceY = (this.height - height) / 2;
    const sourceWidth = width;
    const sourceHeight = height;
    const destWidth = width;
    const destHeight = height;
    const destX = 0;
    const destY = 0;

    context.drawImage(this, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    reactiveImage.set(canvas.toDataURL());
  };
  img.src = image;
}

function uploadPhoto(instance, width, height, quality) {
  MeteorCameraUI.getPicture({
    width: width,
    height: height,
    quality: quality,
  }, function(error, data) {
    if (!error) {
      cropPhoto(instance.image, data, width, height);
    }
  });
}