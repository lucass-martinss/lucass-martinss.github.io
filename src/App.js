import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ResponsiveDrawer } from "./layouts/ResponsiveDrawer";
import BuscaCep from "./packages/layouts/Main";

export default function App() {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
      </ThemeProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/busca-cep" element={<BuscaCep />} />
      </Routes>
    </>
  );
}
