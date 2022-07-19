import CepTextField from "../components/inputs/CepTextField";
import SearchButton from "../components/buttons/SearchButton";
import { Stack, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import CepCard from "../components/cards/CepCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/Theme";


export default function Main() {
  const [cep, setCep] = useState("");
  const [addressList, setAddressList] = useState([]);

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const handleClick = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    const apiKey = "AIzaSyAuGnaUg-Tv-BVU-eaipXfdXArTIYV4BwY";
    json.image = `https://maps.googleapis.com/maps/api/streetview?size=408x544&location=${json.logradouro},${json.bairro}&key=${apiKey}`;
    const newAddressList = addressList === [] ? [json] : [json, ...addressList];
    setAddressList(newAddressList);
  };

  const handleDelete = (index) => {
    const newAddressList = [...addressList];
    newAddressList.splice(index, 1);
    setAddressList(newAddressList);
  };

  return (
    <Container  maxWidth="xs" sx={{textAlign:"center"}}>
      <ThemeProvider theme={theme}>
         <Typography variant="h2" className="title">Search your address in Brazil</Typography>
       </ThemeProvider>
          <form
            id="my-form-id"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
              setCep("");
            }}
          >
            <Stack mt={5} sx={{justifyContent:"center"}}
              direction="row"
              spacing={1}
            >
              <CepTextField
                value={cep}
                onChange={handleChange}
                error={cep.length !== 0 && cep.length !== 9}
                      
              />
              <SearchButton type="submit" disabled={cep.length !== 9} />
            </Stack>
          </form>
     
        <Stack direction="column"  sx={{ alignItems: "center" }}>
         
          {Array.from(addressList.entries()).map(([index, address]) => (
            <CepCard
              key={index}
              index={index}
              address={address}
              deleteHandler={() => handleDelete(index)}
            />
          ))}
        </Stack>
     
    </Container>
  );
}
