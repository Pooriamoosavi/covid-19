exports = module.exports = {};
function titleGen(province, title) {
  return province.length === 0
    ? title
    : title +
        " | " +
        (province.length > 12 ? province.slice(0, 12) + "..." : province);
}
exports.titleGen = titleGen;
