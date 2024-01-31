// // GraphComponent.js
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// // import Papa from 'papaparse';
// import axios from 'axios';
// import { ChartOptions } from 'chart.js';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

// // Define the type of your data
// interface GraphDataEntry {
//   Timestamp: Date;
//   profit: Number;
//   // ... other properties
// }

// const GraphComponent = () => {
//   const [graphData, setGraphData] = useState<GraphDataEntry[] | null>(null);
// //   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch dataset from the backend API
//     console.log('fsdfsdf')

//     axios.get('http://localhost:5000/api/dataset')
//       .then(response =>{
//         console.log("herwerwe")
//         setGraphData(response.data)
//         console.log(typeof(graphData));
//       } )
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
// //   useEffect(() => {
// //     // Fetch your CSV data here and call the downsampling function
// //     // For simplicity, let's assume the CSV file is in the public folder
// //     Papa.parse('/dataset.csv', {
// //       download: true,
// //       header: true,
// //       complete: (result) => {
// //         const data = result.data as GraphDataEntry[];
// //         const downsampledData = downsampleData(data);
// //         setGraphData(downsampledData);
// //       },
// //       error: (error) => {
// //         console.error('Error parsing CSV:', error);
// //       },
// //     });
// //   }, []);

//   const downsampleData = (data: GraphDataEntry[]) => {
//     // Implement your downsampling algorithm here
//     // For simplicity, let's just return the first 100 data points
//     return data.slice(0, 100);
//   };

//   const chartData = {
//     labels: graphData ? graphData.map((entry) => entry.Timestamp) : [],
//     datasets: [
//       {
//         label: 'Profit Percentage',
//         data: graphData ? graphData.map((entry) => entry.profit) : [],
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };
//   const chartOptions: ChartOptions<'line'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//         reverse: false,
//       },
//       y: {
//         type: 'linear',
//         position: 'left',
//         reverse: false,
//       },
//     },
//   };
  

//   return (
//     <div>
//       {graphData ? (
//         <div>
//           <h2>Growth Graph</h2>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };

// export default GraphComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const GraphComponent = () => {
//     const [graphData, setGraphData] = useState([]);

//     useEffect(() => {
//         // Fetch downsampled dataset from the backend API
//         axios.get('http://localhost:5000/api/dataset')
//             .then(response => {
//                 setGraphData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);



//       const chartData = {
//     labels: graphData ? graphData.map((entry) => entry.Timestamp) : [],
//     datasets: [
//       {
//         label: 'Profit Percentage',
//         data: graphData ? graphData.map((entry) => entry.profit) : [],
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//     // const chartData = {
//     //     labels: graphData.map(entry => entry.Timestamp), // Adjust property names accordingly
//     //     datasets: [{
//     //         label: 'Data',
//     //         data: graphData.map(entry => entry.profit), // Adjust property names accordingly
//     //         fill: false,
//     //         borderColor: 'rgba(75, 192, 192, 1)',
//     //         tension: 0.1
//     //     }]
//     // };

//     return (
//         <div>
//             <h2>Graph</h2>
//             <Line data={chartData} />
//         </div>
//     );
// };

// // export default GraphComponent;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// // Define the type of your data
// interface GraphDataEntry {
//   Timestamp: string;
//   profit: number;
//   // Add other properties as needed
// }

// const GraphComponent: React.FC = () => {
//   const [graphData, setGraphData] = useState<GraphDataEntry[] | null>(null);

//   useEffect(() => {
//     // Fetch dataset from the backend API
//     axios.get<GraphDataEntry[]>('http://localhost:5000/api/dataset')
//       .then(response => {
//         setGraphData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const chartData = {
//     labels: graphData ? graphData.map(entry => entry.Timestamp) : [],
//     datasets: [
//       {
//         label: 'Profit Percentage',
//         data: graphData ? graphData.map(entry => entry.profit) : [],
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       x: {
//         type: 'category',
//         labels: graphData ? graphData.map(entry => entry.Timestamp) : [],
//       },
//       y: {
//         // Adjust y-axis options as needed
//       },
//     },
//   };

//   return (
//     <div>
//       {graphData ? (
//         <div>
//           <h2>Growth Graph</h2>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default GraphComponent;











// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import { ChartOptions } from 'chart.js';
// import { Chart, registerables } from 'chart.js';
// import 'chartjs-adapter-date-fns'; // Import the date adapter
// Chart.register(...registerables);

// interface GraphDataEntry {
//   Timestamp: string;
//   profit: number;
// }

// const GraphComponent = () => {
//   const [graphData, setGraphData] = useState<GraphDataEntry[] | null>(null);
//   const [minTimestamp, setMinTimestamp] = useState<number | null>(null); // Use number for timestamp

//   useEffect(() => {
//     axios.get<GraphDataEntry[]>('http://localhost:5000/api/dataset')
//       .then(response => {
//         const timestamps = response.data.map(entry => new Date(entry.Timestamp).getTime()); // Convert to timestamps
//         const minTimestamp = Math.min(...timestamps); // Find minimum timestamp
//         setMinTimestamp(minTimestamp);
//         setGraphData(response.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const chartData = {
//     labels: graphData ? graphData.map((entry) => new Date(entry.Timestamp)) : [],
//     datasets: [
//       {
//         label: 'Profit Percentage',
//         data: graphData ? graphData.map((entry) => entry.profit) : [],
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     scales: {
//       x: {
//         type: 'timeseries', // Set x-axis type to timeseries
//         time: {
//           parser: 'dd-MM-yyyy HH:mm',
//           tooltipFormat: 'dd-MM-yyyy HH:mm',
//           min: minTimestamp, // Set minimum timestamp
//         },
//         position: 'bottom',
//         reverse: false,
//       },
//       y: {
//         type: 'linear',
//         position: 'left',
//         reverse: false,
//       },
//     },
//   } as ChartOptions<'line'>;

 
//   console.log(graphData ? graphData.map((entry) => new Date(entry.Timestamp)) : []);



//   return (
//     <div>
//       {graphData ? (
//         <div>
//           <h2>Growth Graph</h2>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default GraphComponent;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { ChartOptions } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import { parse } from 'date-fns';
import 'chartjs-adapter-date-fns';
Chart.register(...registerables);
// const BASE_URL = process.env.BASE_URL;
interface GraphDataEntry {
  Timestamp: string;
  profit: number;
}

const GraphComponent = () => {
  const [graphData, setGraphData] = useState<GraphDataEntry[] | null>(null);
  const [minTimestamp, setMinTimestamp] = useState<number | null>(null);

  useEffect(() => {
    axios.get<GraphDataEntry[]>('http://localhost:5000/api/dataset')
      .then(response => {
        const timestamps = response.data.map(entry => parse(entry.Timestamp, 'dd-MM-yyyy HH:mm', new Date()).getTime());
        const minTimestamp = Math.min(...timestamps);
        setMinTimestamp(minTimestamp);
        setGraphData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: graphData ? graphData.map((entry) => parse(entry.Timestamp, 'dd-MM-yyyy HH:mm', new Date())) : [],
    datasets: [
      {
        label: 'Profit Percentage',
        data: graphData ? graphData.map((entry) => entry.profit) : [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'timeseries',
        time: {
          parser: 'dd-MM-yyyy HH:mm',
          tooltipFormat: 'dd-MM-yyyy HH:mm',
          // min: minTimestamp !== null ? new Date(minTimestamp) : undefined,
        },
        position: 'bottom',
        reverse: false,
      },
      y: {
        type: 'linear',
        position: 'left',
        reverse: false,
      },
    },
  };

  return (
    <div>
      {graphData ? (
        <div>
          <h2>Growth Graph</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GraphComponent;
