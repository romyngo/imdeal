'use strict';

// Constants for initialisation
const constants = {
  DEF_LANG   : 'en_US',
  DEF_AVATAR : '/img/no_avatar.png',
};

// Enables the modification of the Accounts.User collection on creation of new users
Accounts.onCreateUser((options, user) => {
  if (user.services.password) {
    user.profile = {
      email: options.email,
      avatar: constants.DEF_AVATAR,
    };

    user.emails = [
      {
        address: options.email,
        verified: false,
      },
    ];

  } else if (user.services.facebook) {
    const service = user.services.facebook;

    user.profile = {
      firstName:  service.first_name,
      lastName:   service.last_name,
      name:       service.name,
      gender:     service.gender,
      avatar:     'http://graph.facebook.com/' + service.id + '/picture?width=100&height=100',
    };

    user.emails = [{ address: service.email, verified: true}];
  } else if (user.services.google) {
    const service = user.services.google;

    user.profile = {
      firstName:  service.given_name,
      lastName:   service.family_name,
      name:       service.name,
      gender:     service.gender,
      avatar:     service.picture,
    };

    user.emails = [{ address: service.email, verified: true}];
  } else if (user.services.twitter) {
    const service = user.services.twitter;

    user.profile = {
      avatar: service.profile_image_url,
    };
  }

  // Initialise all default user fields
  user.numFollowers      =
  user.numFollowing      =
  user.numPosts          = 0;

  user.profile.intro     = '';

  user.listings          =
  user.posts             =
  user.followers         =
  user.following         =
  user.preferences       =
  user.notifications     =
  user.history           = [];

  user.settings = {
    language:      constants.DEF_LANG,
    notifications: true,
  };

  return user;
});
