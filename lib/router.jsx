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

Router.route('/chat', {
  name: 'chat',
  template: 'chat',
  layoutTemplate: 'layoutNoTab',

  waitOn() {

  },

  data() {

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

// Use iron-routing package to protect routes from logged out users
Router.plugin('ensureSignedIn', {
  only: ['feed', 'chats', 'profile'],
});