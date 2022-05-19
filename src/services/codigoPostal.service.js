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

  // const codigosPostais = await CodigoPostal.find(filter);

  // for await (const c of codigosPostais) {
  //   const ruas = await Rua.find(
  //     { num_cod_postal: c.num_cod_postal, ext_cod_postal: c.ext_cod_postal },
  //     { nome_rua: 1, _id: 0 }
  //   );

  //   for await (const rua of ruas) {
  //     await CodigoPostal.findOneAndUpdate({ _id: c._id }, { $push: { ruas: rua.nome_rua } });
  //     console.log(c._id);
  //   }
  // }

  // return codigosPostais;
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
