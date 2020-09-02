Mit = {};

Mit.retrieveCredential = (credentialToken, credentialSecret) =>
  OAuth.retrieveCredential(credentialToken, credentialSecret);

OAuth.registerService('mit', 2, null, requestData => {
  const { tenantId, code } = requestData;
  const config = Mit.getConfiguration({ tenantId });
  const { clientId, secret, mitSsoUrl, mitApiUrl } = config;

  const { data: { access_token: accessToken } = {} } = HTTP.post(
    `${mitSsoUrl}/oauth/token`,
    {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: OAuth._redirectUri('mit', config),
      },
      auth: `${clientId}:${secret}`,
    }
  );

  const { data: userData } = HTTP.get(`${mitApiUrl}/api/user`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const { emailAddress, advanceId, firstName, lastName } = userData;

  const emails = emailAddress ? [emailAddress] : [];

  return {
    serviceData: {
      id: advanceId,
      accessToken,
      ...userData,
    },
    options: {
      tenantId,
      profile: { firstName, lastName },
      email: emailAddress,
      emails,
    },
  };
});
