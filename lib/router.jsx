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

Router.route('/messages', {
  name: 'messages',
  template: 'messages',

  waitOn() {

  },

  data() {

  },

  action() {
    this.render();
  },
});