import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-div" spacing={2}>
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backGroundColor: "var(--purple) !important",
            color: "#fff !important",
            borderColor: "var(--purple) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}
