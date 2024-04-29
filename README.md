# Crossmint Challenge

## Description

This repository contains several JavaScript files that offer various functionalities, from interacting with an API to drawing geometric shapes and managing data.

## Files

1. **callApi.js**

   - callApi.js is the main file in this repository. All gathered coordinates are sent to the server from this one file.

2. **drawX.js**

   - This file provides a function `drawX(matrixSize, boundary)` for drawing an 'X' shape within a matrix. It exports this function for use in other modules. It was used for phase one of the challenge.

3. **drawDiamonds.js**

   - This file includes a function `drawSingleDiamond()` for generating coordinates to draw a diamond shape. It also exports an array of coordinates to create a diamond shape. Additionally, it provides functionality to draw the diamond in all four quadrants of the coordinate system (all polyanets).

4. **sendBatch.js**

   - This file exports a function `sendBatch(batch, delayBetweenBatches)` for sending batches of data to an API endpoint asynchronously. It handles retries in case of too many requests (status code 429).

5. **pingSingleSlot.js**

   - This file exports a function `pingSingleSlot(row, column, requestType)` for making HTTP DELETE or POST requests to a specified API endpoint. It handles errors and logs success messages accordingly.

6. **getAllCoordinates.js**
   - This file exports a function `getAllCoordinates(arrayOfArrays)` for parsing a 2D array of strings representing different shapes and extracting their coordinates. It categorizes the coordinates into three types: soloons, comeths, and polyanets.

## Usage

Some files can be used independently depending on your requirements. Below are brief instructions on how to use each module:

### callApi.js

To use the `callApi` module, follow these steps:

1. Import the module into your Node.js application.
2. Call the `callApi()` function with appropriate parameters to make API requests.
3. Handle the response returned by the function as needed in your application logic.

Example:

```javascript
const callApi = require("./callApi");

async function fetchDataFromAPI() {
  try {
    const data = await callApi();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataFromAPI();
```

### drawX.js

To use the `drawX` module, follow these steps:

1. Import the module into your Node.js application.
2. Call the `drawX(matrixSize, boundary)` function with the desired matrix size and boundary parameters.
3. Utilize the coordinates returned by the function to draw the 'X' shape as needed.

Example:

```javascript
const drawX = require("./drawX");

const matrixSize = 5;
const boundary = 1;

const coordinates = drawX(matrixSize, boundary);
console.log(coordinates);
```

### drawDiamonds.js

To use the `drawDiamonds` module, follow these steps:

1. Import the module into your Node.js application.
2. Utilize the array of coordinates exported by the module to draw diamond shapes as needed.

Example:

```javascript
const drawDiamonds = require("./drawDiamonds");

const diamondCoordinates = drawDiamonds;
console.log(diamondCoordinates);
```

### sendBatch.js

To use the `sendBatch` module, follow these steps:

1. Import the module into your Node.js application.
2. Call the `sendBatch(batch, delayBetweenBatches)` function with the batch of data and delay between batches parameters.
3. The function will handle sending the batched data to the API endpoint asynchronously.

Example:

```javascript
const sendBatch = require("./sendBatch");

const batch = []; // Array of data to send
const delayBetweenBatches = 1000; // Delay in milliseconds
sendBatch(batch, delayBetweenBatches);
```

### pingSingleSlot.js

To use the `pingSingleSlot` module, follow these steps:

1. Import the module into your Node.js application.
2. Call the `pingSingleSlot(row, column, requestType)` function with the row, column, and request type parameters.
3. The function will make an HTTP DELETE request to the specified API endpoint.

Example:

```javascript
const pingSingleSlot = require("./pingSingleSlot");

const row = 1;
const column = 1;
const requestType = "DELETE";
pingSingleSlot(row, column, requestType);
```

### getAllCoordinates.js

The getAllCoordinates.js file is used to interpret and sort the response sent back by the /map/candidateId/goal endpoint

To use the `getAllCoordinates` module, follow these steps:

1. Import the module into your Node.js application.
2. Call the `getAllCoordinates(arrayOfArrays)` function with the 2D array of strings representing shapes.
3. The function will parse the array and categorize the coordinates into three types: soloons, comeths, and polyanets.

Example:

```javascript
const getAllCoordinates = require("./getAllCoordinates");

const arrayOfArrays = [
  ["POLYANET", "COMETH_DOWN", "POLYANET"],
  ["SOLOON_RED", "SOLOON_BLUE", "POLYANET"],
  ["POLYANET", "COMETH_UP", "POLYANET"],
];

const coordinates = getAllCoordinates(arrayOfArrays);
console.log(coordinates);
```
