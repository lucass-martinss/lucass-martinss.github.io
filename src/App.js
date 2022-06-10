import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ResponsiveDrawer } from "./layouts/ResponsiveDrawer";

export default function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </ThemeProvider>
  );
}
