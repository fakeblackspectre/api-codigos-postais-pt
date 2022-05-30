const { Nif } = require('../models');

/**
 * Get nif data by nif
 * @param {Number} nif
 * @returns {Promise<Nif>}
 */
const getNif = async (nif) => {
  return Nif.find({
    nif,
  });
};

/**
 * Create nif data
 * @param {Object} data
 * @returns {Promise<User>}
 */
const createNif = async (data) => {
  return Nif.create(data);
};

module.exports = {
  getNif,
  createNif,
};
