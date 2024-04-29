function getAllCordinates(arrayOfArrays) {
  const result = {
    soloons: [],
    comeths: [],
    polyanets: [],
  };

  arrayOfArrays.forEach((innerArray, y) => {
    innerArray.forEach((item, x) => {
      if (item.includes("SOLOON")) {
        result.soloons.push({ x, y, color: item.split("_")[0].toLowerCase() });
      } else if (item.includes("COMETH")) {
        result.comeths.push({
          x,
          y,
          direction: item.split("_")[0].toLowerCase(),
        });
      } else if (item === "POLYANET") {
        result.polyanets.push({ x, y });
      }
    });
  });

  return result;
}

module.exports = getAllCordinates;
