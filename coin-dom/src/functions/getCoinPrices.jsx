import axios from "axios";

export const getCoinPrices = (id, days) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log("Price >", response.data.prices);
      return response.data.prices;
    })
    .catch((error) => {
      console.log("Error :", error);
    });
  return prices;
};
