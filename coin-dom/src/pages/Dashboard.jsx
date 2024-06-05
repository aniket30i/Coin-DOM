import React, { useEffect, useState } from "react";
import Header from "../components/Common/header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/loader";

function DashboardPage() {
  const [coin, setCoin] = useState([]);
  const [paginatedCoins, setPagiantedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, isLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPagiantedCoins(coin.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coin.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
      .then((response) => {
        console.log(response);
        setCoin(response.data);
        setPagiantedCoins(coin.slice(0, 10));
        isLoading(false);
      })
      .catch((error) => {
        console.log("error>>", error);
        isLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
