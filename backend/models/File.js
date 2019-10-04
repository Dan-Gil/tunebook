const {Schema, model} = require('mongoose');

const fileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Image', 'Sheet'],
      required: true,
    },
    description: String,
    mimeType: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('File', fileSchema);
