const { Rua } = require('../models');

/**
 * Query for concelhos
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryRuas = async (filter, options) => {
  const ruas = await Rua.paginate(filter, options);

  return ruas;
};

/**
 * Get rua by num_cod_postal and ext_cod_postal
 * @param {String} numCodPostal
 * @param {String} extCodPostal
 * @returns {Promise<Distrito>}
 */
const getRuaByCodigoPostal = async (numCodPostal, extCodPostal) => {
  return Rua.find({
    num_cod_postal: numCodPostal,
    ext_cod_postal: extCodPostal,
  });
};

module.exports = {
  queryRuas,
  getRuaByCodigoPostal,
};
