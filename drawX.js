function drawX(matrixSize, boundary) {
  const coordinates = [];
  const minX = boundary;
  const maxX = matrixSize - 1 - boundary;

  // Loop through each cell of the matrix
  for (let x = 0; x < matrixSize; x++) {
    for (let y = 0; y < matrixSize; y++) {
      // Check if the cell is within the boundaries and part of the X shape
      if (
        // Check if it's on one of the two diagonals within boundaries
        (x === y ||
          x === matrixSize - 1 - y ||
          // Check if it's on the other diagonal within boundaries
          (x === matrixSize - 1 - y + minX && y === matrixSize - 1 - minX)) &&
        x >= minX &&
        x <= maxX
      ) {
        coordinates.push({ x: x, y: y });
      }
    }
  }

  return coordinates;
}

module.exports = drawX;
