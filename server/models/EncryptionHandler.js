const bcrypt = require('bcrypt');
const saltRounds = 10;

const encrypt = (password) => {
  return {
    password: bcrypt.hash(password, saltRounds),
  };
};

module.exports = { encrypt };