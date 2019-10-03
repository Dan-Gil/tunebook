const {Schema, model} = require('mongoose');

const messageSchema = new Schema(
  {
    from: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    to: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    message: {
      type: String,
      required: true,
    },
    read: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Message', messageSchema);
