const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const codigoPostalSchema = mongoose.Schema(
  {
    cod_distrito: {
      type: String,
      required: true,
      trim: true,
      // select: false,
    },
    cod_concelho: {
      type: String,
      required: true,
      trim: true,
      // select: false,
    },
    cod_localidade: {
      type: String,
      required: true,
      trim: true,
    },
    nome_localidade: {
      type: String,
      required: true,
      trim: true,
    },
    cod_arteria: {
      type: String,
      required: false,
      trim: true,
    },
    tipo_arteria: {
      type: String,
      required: false,
      trim: true,
    },
    prep1: {
      type: String,
      required: false,
      trim: true,
    },
    titulo_arteria: {
      type: String,
      required: false,
      trim: true,
    },
    prep2: {
      type: String,
      required: false,
      trim: true,
    },
    nome_arteria: {
      type: String,
      required: false,
      trim: true,
    },
    local_arteria: {
      type: String,
      required: false,
      trim: true,
    },
    troco: {
      type: String,
      required: false,
      trim: true,
    },
    porta: {
      type: String,
      required: false,
      trim: true,
    },
    cliente: {
      type: String,
      required: false,
      trim: true,
    },
    num_cod_postal: {
      type: String,
      required: true,
      trim: true,
    },
    ext_cod_postal: {
      type: String,
      required: true,
      trim: true,
    },
    desig_postal: {
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
    concelho: [
      {
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
      },
    ],
  },
  {
    timestamps: true,
    collection: 'codigos_postais',
  }
);

// add plugin that converts mongoose to json
codigoPostalSchema.plugin(toJSON);
codigoPostalSchema.plugin(paginate);

/**
 * @typedef CodigoPostal
 */
const CodigoPostal = mongoose.model('CodigoPostal', codigoPostalSchema);

module.exports = CodigoPostal;
