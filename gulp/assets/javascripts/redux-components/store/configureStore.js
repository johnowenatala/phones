

var Redux = require('redux');
var reducer = require('../reducers/root.js');

module.exports = function(initialState){
  return Redux.createStore(reducer, initialState);
}


