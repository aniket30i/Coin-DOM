import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./styles.css";

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "& .Mui-selected": {
            color: "var(--purple) !important",
          },
          borderColor: "var(--purple)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--white) !important",
            borderColor: "unset !important",
            color: "var(--purple)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--grey)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
