import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { ResponsiveDrawer } from "./layouts/ResponsiveDrawer";
import BuscaCep from "../src/layouts/Main";
import Home from "./pages/AboutMe";

export default function App() {
  
  return (
    <>
  
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
      </ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busca-cep" element={<BuscaCep />} />
          <Route path="/checklist"/>
        </Routes>
      
    </>
  );
}
