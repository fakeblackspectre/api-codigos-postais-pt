const httpStatus = require('http-status');
const axios = require('axios').default;
// const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { nifService } = require('../services');

const getNif = catchAsync(async (req, res) => {
  const nif = await nifService.getNif(req.query.nif);

  if (nif.length === 0) {
    try {
      const result = await axios.get(`https://www.nif.pt/?json=1&q=${req.query.nif}&key=${process.env.NIF_PT_KEY}`);
      if (result.data.is_nif && result.data.nif_validation) {
        const newNif = await nifService.createNif(result.data.records[req.query.nif]);

        return res.status(httpStatus.CREATED).send(newNif);
      }
      throw new ApiError(httpStatus.NOT_FOUND, `${req.query.nif} was not found`);
    } catch (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.message);
    }
  } else {
    return res.status(200).send(nif);
  }
});

const getNifFromExternalSource = catchAsync(async (req, res) => {
  try {
    const result = await axios.get(`https://www.nif.pt/?json=1&q=${req.query.nif}&key=${process.env.NIF_PT_KEY}`);
    res.send(result.data);
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, `An error has occured: ${error.message}`);
  }
});

module.exports = {
  getNif,
  getNifFromExternalSource,
};
