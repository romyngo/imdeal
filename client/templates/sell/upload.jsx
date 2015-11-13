'use strict';

Template.upload.onCreated(function() {
  var instance = this;
  instance.image = new ReactiveVar('/img/100x100.png');

  MeteorCameraUI.getPicture({
    width: 360,
    height: 360,
    quality: 100,
  }, function(error, data) {
    if (!error) {
      instance.image.set(data);
    }
  });
});

Template.upload.events({
  'click .toggle': function(event) {
    event.preventDefault();
    $(event.target).closest('.toggle').toggleClass('active');
  },

  'click .photo-upload-btn': function(event, instance) {
    event.preventDefault();

    MeteorCameraUI.getPicture({
      width: 360,
      height: 360,
      quality: 100,
    }, function(error, data) {
      if (!error) {
        instance.image.set(data);
      }
    });
  }
});

Template.upload.helpers({
  getImage() {
    return Template.instance().image.get();
  },

});
