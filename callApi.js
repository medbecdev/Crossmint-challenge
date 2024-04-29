const diamondsCoords = require("./drawDiamonds");
const getAllCoordinates = require("./getAllCoordinates");
const callMapGoal = require("./callMapGoal");
const sendBatch = require("./sendBatch");

const delayBetweenBatches = 6000; // Increase delay to 6 seconds
const batchSize = 10;

async function callApi(coordinates) {
  for (let i = 0; i < coordinates.length; i += batchSize) {
    const batch = coordinates.slice(i, i + batchSize);

    try {
      await sendBatch(batch, delayBetweenBatches);
      // await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches)); // delay next iteration
    } catch (error) {
      console.error("Batch request failed:", error);
    }
  }
}

callMapGoal().then((res) => {
  const allCoords = getAllCoordinates(res); // Soloons coordinates are also available in allCoords. getAllCoordinates does showcase a different approach
  const { comeths, soloons } = allCoords;
  const coordinates = [...diamondsCoords, ...comeths, ...soloons];
  callApi(shuffleArray(coordinates));
});

// It seems requests may not be ultimately picked up by the server, despite the response status being successful
// suffleRequests helps batch requests in a different order
function shuffleArray(array) {
  const newArray = array.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
