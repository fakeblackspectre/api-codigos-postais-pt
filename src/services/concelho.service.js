const { Concelho } = require('../models');

/**
 * Query for concelhos
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryConcelhos = async (filter, options) => {
  const concelhos = await Concelho.paginate(filter, options);

  return concelhos;
};

/**
 * Get concelho by cod_distrito and cod_concelho
 * @param {String} codigoDistrito
 * @param {String} codigoConcelho
 * @returns {Promise<Distrito>}
 */
const getConcelhoByDistritoAndConcelho = async (codigoDistrito, codigoConcelho) => {
  return Concelho.find({
    cod_distrito: codigoDistrito,
    cod_concelho: codigoConcelho,
  });
};

module.exports = {
  queryConcelhos,
  getConcelhoByDistritoAndConcelho,
};
