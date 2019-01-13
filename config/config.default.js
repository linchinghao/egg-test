'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546780620743_4938';

  // add your config here
  config.middleware = [];

  exports.multipart = {
    fileExtensions: [''],
  };
  

  return config;
};
