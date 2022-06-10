import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import portifolioPerfil from './portifolio-perfil.jpeg';


export default function ImagePortifolio() {
  return (
   
      <Avatar alt="Lucas Cardoso" src={portifolioPerfil} sx={{width:200, height:200,}} />
   

  );
}
