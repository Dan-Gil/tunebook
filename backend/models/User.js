const {Schema, model} = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },

    instrument: {
      type: String,
      enum: ['Guitarra', 'Canto', 'Bajo', 'Piano', 'Violín', 'Batería', 'Acordeon', 'Saxofón']
    },

    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, {usernameField: 'username'});

module.exports = model('User', userSchema);
