'use strict';

// Default layouts configuration
Router.configure({
  layoutTemplate:   'layout',
  loadingTemplate:  'loading',
  notFoundTemplate: 'notFound',
});

// Default rendering function for most routes
function defaultRender() {
  this.render();
}

// Definitions for all routes
Router.route('/', {
  name:           'feed',
  template:       'feed',
  action:         defaultRender,
});

Router.route('/item', {
  name:           'item',
  template:       'item',
  layoutTemplate: 'layoutNoTab',
  action:         defaultRender,
});

Router.route('/discovery', {
  name:           'discovery',
  template:       'discovery',
  action:         defaultRender,
});

Router.route('/chats', {
  name:           'chats',
  template:       'chats',
  action:         defaultRender,
});

Router.route('/profile', {
  name:           'profile',
  template:       'profile',
  action:         defaultRender,
});

Router.route('/settings', {
  name:           'settings',
  template:       'settings',
  action:         defaultRender,
});

Router.route('/upload', {
  name:           'upload',
  template:       'upload',
  layoutTemplate: 'layoutNoTab',
  action:         defaultRender,
});

Router.route('/crop', {
  name:           'crop',
  template:       'crop',
  layoutTemplate: 'layoutNoTab',
  action:         defaultRender,
});

Router.route('/chat/:_id', {
  name:           'chat',
  template:       'chat',
  layoutTemplate: 'layoutNoTab',
  action:         defaultRender,
  data() {
    return {
      chat: Chats.findOne(this.params._id),
    };
  },
});

// Use iron-routing package to protect certain routes from logged out users
Router.plugin('ensureSignedIn', {
  only: [
    'upload',
    'chats',
    'profile',
  ],
});