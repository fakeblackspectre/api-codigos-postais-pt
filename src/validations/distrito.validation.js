const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getDistrito = {
  params: Joi.object().keys({
    cod_distrito: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getDistrito,
};
