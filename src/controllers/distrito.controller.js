const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { distritoService } = require('../services');

const getDistritos = catchAsync(async (req, res) => {
  const result = await distritoService.queryDistritos();
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
