const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },

  email: {
    type: String,
    trim: true,
    unique: 1,
  },

  password: {
    type: String,
    minlength: 5,
  },

  role: {
    // 관리자 지정 ex) 1 관리자 0 일반 유저
    type: Number,
    default: 0,
  },

  image: String,

  token: {
    // 유효성 관리
    type: String,
  },

  tokenExp: {
    // 토큰 유효 기간
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
