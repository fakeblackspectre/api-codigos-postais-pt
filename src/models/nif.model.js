const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const nifSchema = mongoose.Schema(
  {
    nif: {
      type: Number,
      required: true,
    },
    seo_url: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    pc4: {
      type: String,
      trim: true,
      required: true,
    },
    pc3: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
    },
    activity: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    cae: [
      {
        type: String,
        trim: true,
      },
    ],
    contacts: {
      email: {
        type: String,
        trim: true,
      },
      phone: {
        type: String,
        trim: true,
      },
      website: {
        type: String,
        trim: true,
      },
      fax: {
        type: String,
        trim: true,
      },
    },
    structure: {
      nature: {
        type: String,
        trim: true,
      },
      capital: {
        type: String,
        trim: true,
      },
      capital_currency: {
        type: String,
        trim: true,
      },
    },
    geo: {
      region: {
        type: String,
        trim: true,
      },
      county: {
        type: String,
        trim: true,
      },
      parish: {
        type: String,
        trim: true,
      },
    },
    place: {
      address: {
        type: String,
        trim: true,
      },
      pc4: {
        type: String,
        trim: true,
      },
      pc3: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
    },
    racius: {
      type: String,
      trim: true,
    },
    alias: {
      type: String,
      trim: true,
    },
    portugalio: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
nifSchema.plugin(toJSON);
nifSchema.plugin(paginate);

/**
 * @typedef Nif
 */
const Nif = mongoose.model('Nif', nifSchema);

module.exports = Nif;
