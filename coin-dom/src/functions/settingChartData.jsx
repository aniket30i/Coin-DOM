import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices) => {
  setChartData({
    labels: prices.map((price) => convertDate(price[0])),
    datasets: [
      {
        data: prices.map((dates) => dates[1]),
        borderColor: "#9400ff",
        backgroundColor: "transparent",
        borderWidth: 2,
        fill: true,
        tension: 0.25,
        backgroundColor: "rgba(148, 0, 255, 0.2)",
        borderColor: "#9400ff",
        pointRadius: 0,
      },
    ],
  });
};
