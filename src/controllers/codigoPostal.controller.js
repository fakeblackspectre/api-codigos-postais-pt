const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { codigoPostalService } = require('../services');

const getCodigosPostais = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['cod_distrito', 'cod_concelho', 'num_cod_postal', 'ext_cod_postal']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await codigoPostalService.queryCodigosPostais(filter, options);
  res.send(result);
});

const getCodigoPostal = catchAsync(async (req, res) => {
  const codigoPostal = await codigoPostalService.getCodigoPostalByCodigos(
    req.query.num_cod_postal,
    req.query.ext_cod_postal
  );
  if (!codigoPostal) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Código Postal not found');
  }
  res.send(codigoPostal);
});

module.exports = {
  getCodigosPostais,
  getCodigoPostal,
};
