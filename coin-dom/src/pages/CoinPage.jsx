import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/header";
import Loader from "../components/Common/loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";

function CoinPage() {
  const { id } = useParams();
  const [loading, isLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(30);
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

  const handleDaysChange = async (event) => {
    isLoading(true);
    const prices = await getCoinPrices(id, days);
    if (prices.length > 0) {
      console.log("yes");
      settingChartData(setchartData, prices);
      isLoading(false);
    }
    setDays(event.target.value);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1 rem" }}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
