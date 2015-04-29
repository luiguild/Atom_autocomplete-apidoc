var provider = require('./provider');

module.exports = {
  activate: function (state) {

  },

  getProvider: function() {
    return provider;
  }
};
