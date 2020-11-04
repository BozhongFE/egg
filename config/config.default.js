'use strict';

module.exports = () => {
  const config = {
    // cookie sign keys
    keys: '',
  };

  config.session = {
    key: 'bzfe_auth', // cookie name
    maxAge: 30 * 24 * 3600 * 1000, // 1 天
    // httpOnly: true,
    encrypt: true,
  };

  config.jwt = {
    secret: '',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
    },
    domainWhiteList: [],
  },

  config.cors = {
    credentials: true,
    origin: '',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return config;
};
