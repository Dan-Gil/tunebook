const {Schema, model} = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
    },

    instruments: [{type: Schema.Types.ObjectId, ref: 'Instrument'}],

    genres: [{type: Schema.Types.ObjectId, ref: 'Genre'}],

    influences: [String],

    musicReading: Boolean,

    location: String,

    photo: String,

    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],

    biography: String,

    files: [{type: Schema.Types.ObjectId, ref: 'File'}]
  },
  {
    timestamps: true,
    versionKey: false,
    collation: {locale: 'en', strength: 1},
  }
);

userSchema.index({
  username: 1
}, {
  unique: true,
  collation: {locale: 'en', strength: 1}
});

userSchema.index({
  email: 1
}, {
  unique: true,
  collation: {locale: 'en', strength: 1}
});

userSchema.plugin(PLM, {usernameField: 'username'});

module.exports = model('User', userSchema);
