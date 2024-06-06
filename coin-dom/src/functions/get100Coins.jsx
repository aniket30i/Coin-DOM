import axios from "axios";

export const get100Coins = () => {
  const myCoins = axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error>>", error);
    });
  return myCoins;
};
