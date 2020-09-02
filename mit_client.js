Mit = {};

Mit.requestCredential = (options, credentialRequestCompleteCallback) => {
  // support both (options, callback) and (callback).
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    // eslint-disable-next-line no-param-reassign
    credentialRequestCompleteCallback = options;
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  const config = options.config;
  const credentialToken = Random.secret();

  const loginStyle = 'redirect';

  const loginUrl =
    config.mitSsoUrl +
    '/oauth/authorize' +
    `?client_id=${config.clientId}` +
    `&response_type=code` +
    `&redirect_uri=${OAuth._redirectUri('mit', config)}` +
    `&state=${OAuth._stateParam(
      loginStyle,
      credentialToken,
      options && options.redirectUrl
    )}`;

  OAuth.launchLogin({
    loginService: 'mit',
    loginStyle,
    loginUrl,
    credentialRequestCompleteCallback,
    credentialToken,
  });
};
