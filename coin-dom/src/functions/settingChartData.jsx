import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "Crypto1",
          data: prices1.map((price) => price[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "rgba(148, 0, 255, 0.2)",
          borderColor: "#9400ff",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto2",
          data: prices2.map((price) => price[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "rgba(97, 201, 111, 0.5)",
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "Price-Trend",
          data: prices1.map((dates) => dates[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(148, 0, 255, 0.2)",
          borderColor: "#9400ff",
          pointRadius: 0,
        },
      ],
    });
  }
};
