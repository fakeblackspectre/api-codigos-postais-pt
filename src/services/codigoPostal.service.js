/* eslint-disable no-restricted-syntax */
const { CodigoPostal } = require('../models');

/**
 * Query for codigos postais
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCodigosPostais = async (filter, options) => {
  const codigosPostais = await CodigoPostal.paginate(filter, options);

  return codigosPostais;
};

/**
 * Get codigo postal
 * @param {String} codigoP1
 * @param {String} codigoP2
 * @returns {Promise<Distrito>}
 */
const getCodigoPostalByCodigos = async (codigoP1, codigoP2) => {
  return CodigoPostal.find({
    num_cod_postal: codigoP1,
    ext_cod_postal: codigoP2,
  });
};

module.exports = {
  queryCodigosPostais,
  getCodigoPostalByCodigos,
};
