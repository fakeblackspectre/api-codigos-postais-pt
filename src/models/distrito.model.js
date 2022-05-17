const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const distritoSchema = mongoose.Schema(
  {
    cod_distrito: {
      type: String,
      required: true,
      trim: true,
    },
    nome_distrito: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
distritoSchema.plugin(toJSON);
distritoSchema.plugin(paginate);

/**
 * @typedef Distrito
 */
const Distrito = mongoose.model('Distrito', distritoSchema);

module.exports = Distrito;
