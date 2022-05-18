const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { concelhoService } = require('../services');

const getConcelhos = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['cod_distrito', 'cod_concelho', 'nome_concelho']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await concelhoService.queryConcelhos(filter, options);
  res.send(result);
});

const getConcelho = catchAsync(async (req, res) => {
  const concelho = await concelhoService.getConcelhoByDistritoAndConcelho(req.query.cod_distrito, req.query.cod_concelho);
  if (!concelho) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Concelho not found');
  }
  res.send(concelho);
});

module.exports = {
  getConcelhos,
  getConcelho,
};
