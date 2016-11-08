var localeOpts = {
  style: "currency",
  currency: "USD",
};

function toUsd(number) {
  return number.toLocaleString("en-US", localeOpts);
}
// console.log(toUsd);

module.exports = toUsd;
