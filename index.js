const isOkey = function () {
  let num = Math.floor(Math.random() * 2);
  return num === 0; // 0 -> true // 1 -> false
};

module.exports = isOkey;
