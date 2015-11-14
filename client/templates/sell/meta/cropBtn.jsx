'use strict';

Template.cropBtn.events({
  'click button.crop-btn': function(event) {
    event.preventDefault();

    // create an off-screen canvas
    const canvas = document.createElement('canvas');
    canvas.width = 360;
    canvas.height = 360;

    const context = canvas.getContext('2d');

    const cropLayer = $('.crop-layer');
    const imageLayer = $('.image-layer');
    const imageObject = imageLayer.get(0);

    const realWidth = imageObject.naturalWidth;
    const scaledWidth = imageObject.width;
    const ratio = realWidth / scaledWidth;

    const scaledOffset = cropLayer.position();

    const cropX = scaledOffset.left * ratio;
    const cropY = scaledOffset.top * ratio;
    const cropWidth = cropLayer.width() * ratio;
    const cropHeight = cropWidth;

    context.drawImage(imageObject, cropX, cropY, cropWidth, cropHeight, 0, 0, 360, 360);
    const croppedImage = canvas.toDataURL();

    if (croppedImage) {
      Session.set('croppedImage', croppedImage);
      Router.go('upload', {}, {replaceState: true});
    }
  },

});