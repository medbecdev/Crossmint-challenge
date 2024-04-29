const url = "https://challenge.crossmint.io/api/polyanets";
const candidateId = "2284a6e4-d4aa-405c-89c4-99e1622421b1";

// Function to make DELETE request
async function pingSingleSlot(row, column, requestType) {
  const data = {
    candidateId: candidateId,
    row: row,
    column: column,
  };

  const requestOptions = {
    method: requestType,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Polyanet deleted successfully");
  } catch (error) {
    console.error("There was a problem deleting the Polyanet:", error);
  }
}

// Make DELETE request for the specified coordinate

module.exports = pingSingleSlot;
