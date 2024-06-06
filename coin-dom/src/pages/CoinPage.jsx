import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/header";
import Loader from "../components/Common/loader";
import axios from "axios";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";

function CoinPage() {
  const { id } = useParams();
  const [loading, isLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(120);
  const [chartData, setchartData] = useState({});
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        console.log("yes");

        setchartData({
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
        isLoading(false);
      }
    }
  }
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
