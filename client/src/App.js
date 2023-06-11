import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import { setCurrentColor } from "./state/index.js";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const currentColor = useSelector((state) => state.global.currentColor);
  const dispatch = useDispatch();
  const theme = useMemo(() => createTheme(themeSettings(mode, currentColor)), [mode, currentColor]);

  const handleColorChange = (newColor) => {
    dispatch(setCurrentColor(newColor));
  };
  
  const bgcolor = theme.palette.secondary[400];

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <style>{`
            /* Customize the scrollbar color */
            ::-webkit-scrollbar {
              width: 8px;
              background-color: #7a7f9d;
            }

            ::-webkit-scrollbar-thumb {
              background-color: ${bgcolor};
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: darken(${currentColor}, 10%);
            }
          `}</style>
          <Routes>
            <Route element={<Layout handleColorChange={handleColorChange} />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
