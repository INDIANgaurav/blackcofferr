import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, title, labels }) => {
  // console.log("this is your dta from barchart ->>>>",data ); 
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "X Axis Title",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y Axis Title",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
