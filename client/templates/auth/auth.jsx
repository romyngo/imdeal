'use strict';

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/login',
  template: 'auth',
  layoutTemplate: 'layoutNoTab',
  redirect: 'main',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signUp',
  path: '/register',
  template: 'auth',
  layoutTemplate: 'layoutNoTab',
  redirect: 'main',
});

AccountsTemplates.configure({
  defaultLayout: 'layoutNoTab',
});

AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
  showLabels: true,
  homeRoutePath: '/',
});