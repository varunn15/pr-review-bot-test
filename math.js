function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a / b;  // BUG: function name says multiply but does division!
}

module.exports = { add, multiply };
