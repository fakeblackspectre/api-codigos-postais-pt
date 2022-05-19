const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ruaService } = require('../services');

const getRuas = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['num_cod_postal', 'ext_cod_postal']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await ruaService.queryRuas(filter, options);
  res.send(result);
});

const getRuaByCodigoPostal = catchAsync(async (req, res) => {
  const rua = await ruaService.getConcelhoByDistritoAndConcelho(req.query.num_cod_postal, req.query.ext_cod_postal);
  if (!rua) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Concelho not found');
  }
  res.send(rua);
});

module.exports = {
  getRuas,
  getRuaByCodigoPostal,
};
