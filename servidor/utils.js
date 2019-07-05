const bcrypt = require("bcrypt");

module.exports = {
  encrypt: async function(password) {
    const hash = await bcrypt.hash(password, 10);

    return hash;
  },

  decrypt: async function(password, hash) {
    const result = await bcrypt.compare(password, hash);
    return result;
  }
};
