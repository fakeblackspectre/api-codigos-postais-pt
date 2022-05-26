const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Globalsoft - Códigos Postais API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/fakeblackspectre/api-codigos-postais-pt.git',
    },
  },
  servers: [
    {
      url: 'https://api-codigos-postais-pt.herokuapp.com/v1',
    },
  ],
};

module.exports = swaggerDef;
