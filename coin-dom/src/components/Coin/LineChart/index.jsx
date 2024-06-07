import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertDate } from "../../../functions/convertDate";
import { convertNumber } from "../../../functions/convertNumber";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    pluggins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType == "prices")
              return "INR " + value.toLocaleString(priceType);
            else {
              return "INR " + convertNumber(value);
            }
          },
        },
      },
      crypto2: multiAxis && {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType == "prices")
              return "INR " + value.toLocaleString(priceType);
            else {
              return "INR " + convertNumber(value);
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
