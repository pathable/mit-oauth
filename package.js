Package.describe({
  summary: 'Mit OAuth flow',
  version: '1.1.0',
  name: 'pathable:mit-oauth',
  git: 'https://github.com/pathable/mit-oauth',
});

Package.onUse(api => {
  api.versionsFrom('2.3');

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
