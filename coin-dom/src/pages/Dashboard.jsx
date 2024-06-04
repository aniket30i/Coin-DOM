import React, { useEffect, useState } from "react";
import Header from "../components/Common/header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";

function DashboardPage() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
      .then((response) => {
        console.log(response);
        setCoin(response.data);
      })
      .catch((error) => {
        console.log("error>>", error);
      });
  }, []);
  return (
    <div>
      <Header />
      <TabsComponent coins={coin} />
    </div>
  );
}

export default DashboardPage;
