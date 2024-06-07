import React, { useEffect, useState } from "react";
import Header from "../components/Common/header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { coinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import Loader from "../components/Common/loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart";
import TogglePriceType from "../components/Coin/PriceType";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("");
  const [crypto2, setCrypto2] = useState("");
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});

  const [priceType, setPriceType] = useState("prices");

  const [chartData, setChartData] = useState({});

  async function handleDaysChange(e) {
    setLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(crypto1, e.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, e.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(true);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const data1 = await getCoinData(crypto1);

    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data2 = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
    } else {
      setCrypto1(event.target.value);
      const data1 = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="coins-days-flex">
              <SelectCoins
                crypto1={crypto1}
                crypto2={crypto2}
                handleCoinChange={handleCoinChange}
              />
              <SelectDays
                days={days}
                handleDaysChange={handleDaysChange}
                noPTag={true}
              />
            </div>
            <div className="grey-wrapper" style={{ padding: "1rem 1 rem" }}>
              <List coin={crypto1Data} />
            </div>
            <div className="grey-wrapper" style={{ padding: "1rem 1 rem" }}>
              <List coin={crypto2Data} />
            </div>
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <div>
              <LineChart
                chartData={chartData}
                priceType={priceType}
                multiAxis={true}
              />
            </div>
            <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
          </>
        )}
      </div>
    </>
  );
}

export default ComparePage;
