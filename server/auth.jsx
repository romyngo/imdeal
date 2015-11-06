ServiceConfiguration.configurations.remove({
  service: 'facebook',
});

ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: 'APP_ID',
  secret: 'APP_SECRET',
});

ServiceConfiguration.configurations.remove({
  service: 'google',
});

ServiceConfiguration.configurations.insert({
  service: 'google',
  clientId: 'CLIENT_ID',
  secret: 'CLIENT_SECRET',
});
