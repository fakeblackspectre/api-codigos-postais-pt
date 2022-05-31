const httpStatus = require('http-status');
const axios = require('axios').default;
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { nifService } = require('../services');

/**
 *
 * @param {*} nif
 * @returns the raw response from the external website service nif.pt
 *
 */
const getNifFromExternalSource = async (nif) => {
  try {
    const response = await axios.get(`https://www.nif.pt/?json=1&q=${nif}&key=${process.env.NIF_PT_KEY}`);
    return response;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

/**
 * this service checks if the number exists on our local database
 *  - if exists, return it
 *  - if not exists it will make a resquest to the external api
 *    - check if the response from the external api is equal to error, if true, throw
 *    - check if the response from the external api has is_nif and nif_validation properties set to true
 *      - if truthy, await new nif creation passing the query parameter
 *        - if an error occurs throw an error
 *        - if not return the new entry
 *  - if an error occurs throw an error
 *
 */
const getNif = catchAsync(async (req, res) => {
  const nif = await nifService.getNif(req.query.nif);

  if (nif.length === 0) {
    try {
      const response = await getNifFromExternalSource(req.query.nif);

      if (response.data.result === 'error') {
        throw new ApiError(httpStatus.NOT_FOUND, response.data.message);
      }

      if (response.data.is_nif && response.data.nif_validation) {
        const newNIF = await nifService.createNif(response.data.records[req.query.nif]);

        return res.status(httpStatus.CREATED).send(newNIF);
      }
    } catch (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.message);
    }
  } else {
    return res.status(httpStatus.OK).send(nif['0'].toObject());
  }
});

module.exports = {
  getNif,
  getNifFromExternalSource,
};
