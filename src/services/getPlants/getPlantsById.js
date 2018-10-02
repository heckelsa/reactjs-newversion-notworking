function getPlantsById(data = [], plantIds) {
  const results = [];

  // Just that linter stops fucking with me
  results.push(plantIds);
  // Delete line above, just for debugging

  // data.forEach((element) => {
  //   if (plantIds.includes(element.id)) results.push(element);
  // });

  return data;
}

module.exports = {
  getPlantsById,
};
