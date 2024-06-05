import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          {/*<Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchListPage />} /> */}
          {/* <Route path="/" element={<LearnPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
