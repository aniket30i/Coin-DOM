import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { color } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9400ff",
    },
  },
});

const style = {
  color: "var(--white)",
  width: "50vw",
  fontSize: "1.2rem",
  fontWeight: 600,
  fontFamily: "Inter",
  textTransform: "capitalize",
};

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
          >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
          <TabPanel value="grid">
            <div>
              {coins.map((item, i) => {
                return (
                  <>
                    <img src={item.image} />
                    <p key={i}>
                      {i + 1}.{item.name}
                    </p>
                  </>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel value="list">mapping for list</TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}
