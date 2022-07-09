import * as React from 'react';
import portifolioPerfil from '../components/portifolio-perfil.jpeg';


export default function ImagePortifolio() {
  return (

      <img  class="imagem-portfolio"style={{borderRadius:"50%", width:"100%"}} alt="Lucas Cardoso" src={portifolioPerfil}  />

  );
}
