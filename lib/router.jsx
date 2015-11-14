'use strict';

// Default layout configuration
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {
  name: 'feed',
  template: 'feed',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/item', {
  name: 'item',
  template: 'item',
  layoutTemplate: 'layoutNoTab',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/discovery', {
  name: 'discovery',
  template: 'discovery',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/chats', {
  name: 'chats',
  template: 'chats',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/chat/:_id', {
  name: 'chat',
  template: 'chat',
  layoutTemplate: 'layoutNoTab',

  waitOn() {

  },

  data() {
    return {
      chat: Chats.findOne(this.params._id),
    };
  },

  action() {
    this.render();
  },
});

Router.route('/profile', {
  name: 'profile',
  template: 'profile',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/settings', {
  name: 'settings',
  template: 'settings',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/upload', {
  name: 'upload',
  template: 'upload',
  layoutTemplate: 'layoutNoTab',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

Router.route('/crop', {
  name: 'crop',
  template: 'crop',
  layoutTemplate: 'layoutNoTab',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});

// Use iron-routing package to protect routes from logged out users
Router.plugin('ensureSignedIn', {
  only: ['upload', 'chats', 'profile'],
});