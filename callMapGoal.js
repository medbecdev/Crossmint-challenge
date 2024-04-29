const candidateId = "2284a6e4-d4aa-405c-89c4-99e1622421b1";
const url = `https://challenge.crossmint.io/api/map/${candidateId}/goal`;

async function callMapGoal() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseBody = await response.json(); // Convert response body to JSON
    return responseBody.goal;
  } catch (error) {
    console.error("There was a problem deleting the Polyanet:", error);
  }
}

module.exports = callMapGoal;
