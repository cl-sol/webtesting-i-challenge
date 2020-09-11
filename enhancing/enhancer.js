module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairedItem = item;
  repairedItem.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
