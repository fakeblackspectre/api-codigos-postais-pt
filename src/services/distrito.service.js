const { Distrito } = require('../models');

/**
 * Query for distritos
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDistritos = async () => {
  const distritos = await Distrito.find({});
  return distritos;
};

/**
 * Get distrito by cod_distrito
 * @param {String} codigo
 * @returns {Promise<Distrito>}
 */
const getDistritoByCodigo = async (codigo) => {
  return Distrito.find({
    cod_distrito: codigo,
  });
};

module.exports = {
  queryDistritos,
  getDistritoByCodigo,
};
