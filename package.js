Package.describe({
  summary: 'Mit OAuth flow',
  version: '1.0.1',
  name: 'pathable:mit-oauth',
  git: 'https://github.com/pathable/mit-oauth',
});

Package.onUse(api => {
  api.versionsFrom('1.11')

  api.use('ecmascript', ['client', 'server']);
  api.use('pathable:oauth2@1.3.1', ['client', 'server']);
  api.use('pathable:oauth@1.3.1', ['client', 'server']);
  api.use('http', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('mit_client.js', 'client');
  api.addFiles('mit_server.js', 'server');

  api.export('Mit');
});
