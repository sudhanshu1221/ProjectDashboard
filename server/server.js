// const express = require('express');
// const cors = require('cors');
// const csv = require('csv-parser');
// const fs = require('fs');

// const app = express();
// app.use(cors());
// const port = process.env.PORT || 5000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Define an API endpoint to fetch downsampled data
// app.get('/api/dataset', (req, res) => {
//   // Implement your downsampling logic here
//   // Read the CSV file, downsample the data, and send it as JSON

//   // Example: Reading a CSV file
//   // console.log("rndawerwer");
//   const results = [];
//   fs.createReadStream('dataset.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       // Implement your downsampling algorithm here
//       // For now, send the entire data as is
//       console.log('json file returened');

//       res.json(results);
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// Function to read data from CSV file

// Function to downsample data
function downsampleDataset(dataset, targetSize) {
  const originalSize = dataset.length;

  // Sort the dataset based on timestamps
  dataset.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  // Calculate the step size to achieve the target size
  const step = Math.ceil(originalSize / targetSize);

  // Create a new array for the downsampled dataset
  const downsampledDataset = [];

  // Iterate through the sorted dataset with the calculated step
  for (let i = 0; i < originalSize; i += 1000) {
    downsampledDataset.push(dataset[i]);
  }

  return downsampledDataset;
}

// Function to read data from CSV file and serve downsampled data
function readCSVFile(filePath, targetSize, callback) {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Call the downsampling function
      const downsampledData = downsampleDataset(results, targetSize);
      callback(downsampledData);
    });
}

// function readCSVFile(filePath, callback) {
//   const results = [];
//   fs.createReadStream(filePath)
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       callback(results);
//     });
// }

// API endpoint for serving downsampled data
app.get('/api/dataset', (req, res) => {
  const filePath = 'dataset.csv'; // Update with your CSV file path
  // readCSVFile(filePath, (data) => {
  //   // algo...
  //   res.json(data);
  // });
  const targetSize = 10000;
  readCSVFile(filePath, targetSize, (downsampledData) => {
    console.log(downsampledData.length);
    res.json(downsampledData);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
