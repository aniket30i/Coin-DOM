import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/header";
import Loader from "../components/Common/loader";
import axios from "axios";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";

function CoinPage() {
  const { id } = useParams();
  const [loading, isLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log(response);
          coinObject(setCoinData, response.data);
          isLoading(false);
        })
        .catch((error) => {
          console.log("error>>", error);
          isLoading(false);
        });
    }
  }, [id]);
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
        </>
      )}
    </div>
  );
}

export default CoinPage;
