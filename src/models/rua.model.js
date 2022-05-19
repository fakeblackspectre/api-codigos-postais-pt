const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ruaSchema = mongoose.Schema(
  {
    nome_rua: {
      type: String,
      required: true,
      trim: true,
      // select: false,
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
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ruaSchema.plugin(toJSON);
ruaSchema.plugin(paginate);

/**
 * @typedef Rua
 */
const Rua = mongoose.model('Rua', ruaSchema);

module.exports = Rua;
