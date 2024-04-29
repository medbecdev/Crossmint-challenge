function drawSingleDiamond() {
  // Opening half of the single diamond shape
  let innerCoordinates = [];
  // Closing half of the single diamond shape
  const mirroredOffsetCoordinates = [];

  for (let i = 0; i <= 3; i++) {
    const pattern = [
      { x: i, y: i * 2 },
      { x: i, y: i * 2 + 1 },
      { x: i * 2, y: i },
      { x: i * 2 + 1, y: i },
    ];
    innerCoordinates.push(...pattern);

    pattern.forEach((entry) => {
      mirroredOffsetCoordinates.push({
        x: entry.x * -1 + 11,
        y: entry.y * -1 + 11,
      });
    });
  }
  // Single full diamond
  const diamond = [...innerCoordinates, ...mirroredOffsetCoordinates];
  return diamond;
}

const offset = 13;
let coordinates = drawSingleDiamond();

coordinates.forEach((coord) => {
  // Copying coordinates in the remaining 3 quadrants
  coordinates.push(
    { x: coord.x * -1, y: coord.y },
    { x: coord.x, y: coord.y * -1 },
    { x: coord.x * -1, y: coord.y * -1 }
  );
});

const offSetCoords = [];

coordinates.forEach((coord) => {
  // Offset all values to position whole shape
  offSetCoords.push({ x: coord.x + offset, y: coord.y + offset });
});

module.exports = offSetCoords;
