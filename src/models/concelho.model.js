const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const concelhoSchema = mongoose.Schema(
  {
    cod_distrito: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    cod_concelho: {
      type: String,
      required: true,
      trim: true,
    },
    nome_concelho: {
      type: String,
      required: true,
      trim: true,
    },
    distrito: [
      {
        cod_distrito: {
          type: String,
          required: true,
          trim: true,
        },
        nome_distrito: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
concelhoSchema.plugin(toJSON);
concelhoSchema.plugin(paginate);

/**
 * @typedef Distrito
 */
const Concelho = mongoose.model('Concelho', concelhoSchema);

module.exports = Concelho;
