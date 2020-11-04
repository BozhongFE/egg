'use strict';

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
  credentials: true,
};
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};