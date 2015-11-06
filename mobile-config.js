// Miscellaneous app info
App.info({
  id:           'com.imdeal.app',
  name:         'IMDeal',
  description:  'C2C e-commerce platform using the concept of a social network',
  author:       'Young Pilots.',
  email:        'contact@youngpilots.vn',
  website:      'http://youngpilots.vn',
});

// Paths to app icons for different platforms
App.icons({
  'iphone':    '',
  'iphone_2x': '',
  'android':   '',
});

// Set Cordova misc. preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

// Pass preferences for a particular PhoneGap/Cordova plugin
//App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//  APP_ID: '1234567890',
//  API_KEY: 'supersecretapikey',
//});
