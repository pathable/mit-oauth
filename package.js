Package.describe({
  name: 'pathable:mit-oauth',
  summary: 'Mit OAuth flow',
  version: '1.0.0',
});

Package.onUse(api => {
  api.use('ecmascript', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('mit_client.js', 'client');
  api.addFiles('mit_server.js', 'server');

  api.export('Mit');
});
