import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import portifolioPerfil from './portifolio-perfil.jpeg';


export default function ImagePortifolio() {
  return (

      <img  style={{borderRadius:"50%", width:"100%"}} alt="Lucas Cardoso" src={portifolioPerfil}  />

  );
}
