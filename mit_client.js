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

  const loginUrlParameters = {
    client_id: config.clientId,
    response_type: 'code',
    redirect_uri: OAuth._redirectUri('mit', config),
    state: OAuth._stateParam(
      loginStyle,
      credentialToken,
      options && options.redirectUrl
    ),
  };

  const loginUrl = config.mitSsoUrl + '/oauth/authorize?' +
    Object.keys(loginUrlParameters).map(param =>
      `${encodeURIComponent(param)}=${encodeURIComponent(loginUrlParameters[param])}`
    ).join("&");

  OAuth.launchLogin({
    loginService: 'mit',
    loginStyle,
    loginUrl,
    credentialRequestCompleteCallback,
    credentialToken,
  });
};
