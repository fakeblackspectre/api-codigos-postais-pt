const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { distritoService } = require('../services');

const getDistritos = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['cod_distrito', 'nome_distrito']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const result = await distritoService.queryDistritos(filter, options);

  res.send(result);
});

const getDistrito = catchAsync(async (req, res) => {
  const distrito = await distritoService.getDistritoByCodigo(req.query.cod_distrito);
  if (!distrito) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Distrito not found');
  }
  res.send(distrito);
});

module.exports = {
  getDistritos,
  getDistrito,
};
