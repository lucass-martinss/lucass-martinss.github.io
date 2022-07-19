import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack"
import "../inputs/inputs.css"
export default function CepCard(props) {
  const { index, address } = props;
 
  return (
    <Card className="CepCard" elevation={4} >
      <CardMedia
        className="CardImage"
        component="img"
        image={address.image}
        alt="green iguana"
      />
      <CardContent  className="CardCont" >
        <Typography gutterBottom  component="div">
          {address.localidade}-{address.uf}
        </Typography>
        <Stack  direction="row" alignItems="left" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            <strong>Endereço:</strong> {address.logradouro}
            <br />
            <strong>Bairro:</strong> {address.bairro}
            <br />
            <strong>Cep:</strong> {address.cep}
            <br />
            <strong>Complemento: </strong>
            {address.complemento}
          </Typography> </Stack>
          <IconButton className="IconDelete" onClick={() => props.deleteHandler(index)} aria-label="delete"   >
            <DeleteIcon />
          </IconButton>
       
      </CardContent>
     
    </Card>
  );
}
