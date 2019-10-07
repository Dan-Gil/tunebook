const {Schema, model} = require('mongoose');

const instrumentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collation: {locale: 'en', strength: 1},
  }
);

instrumentSchema.index({
  name: 1
}, {
  unique: true,
  collation: {locale: 'en', strength: 1}
});

module.exports = model('Instrument', instrumentSchema);
