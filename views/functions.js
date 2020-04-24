exports = module.exports = {};

function titleGen(province, title) {
  return province.length === 0
    ? title
    : title +
        " | " +
        (province.length > 12 ? province.slice(0, 12) + "..." : province);
}
function numberWithCommas(x) {
  if (x === null) return x;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
exports.titleGen = titleGen;
exports.numberWithCommas = numberWithCommas;
