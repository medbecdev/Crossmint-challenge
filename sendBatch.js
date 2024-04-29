const candidateId = "2284a6e4-d4aa-405c-89c4-99e1622421b1";
const baseUrl = "https://challenge.crossmint.io/api/";

async function sendBatch(batch, delayBetweenBatches) {
  const requests = batch.map(async (coord) => {
    let data = {
      candidateId: candidateId,
      row: coord.y,
      column: coord.x,
    };

    // Add color or direction if present
    if (coord.color) {
      data.color = coord.color;
    } else if (coord.direction) {
      data.direction = coord.direction;
    }

    data = JSON.stringify(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
      body: data,
    };

    const response = await fetch(
      `${baseUrl}${
        coord.color ? "soloons" : coord.direction ? "comeths" : "polyanets"
      }`,
      requestOptions
    );
    const responseData = await response.text();

    if (response.ok) {
      console.log("Shape created successfully:", responseData);
    } else if (response.status === 429) {
      console.warn("Too many requests. Retrying after delay.");
      await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
      return await sendBatch([coord]); // Retry failed request
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });

  await Promise.all(requests);
}

module.exports = sendBatch;
