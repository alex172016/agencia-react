
/* eslint-disable import/no-anonymous-default-export */
import "./CardPar.css"
export default (props) =>{
    return(

<div class="row g-0">
  <div class="col-md-3">
    <img src={props.Foto} class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Beto Carrero World, Passeio Pra Toda Familia!!!!</h5>
      <p class="card-text">Beto Carrero World é um parque temático localizado no litoral norte do estado de Santa Catarina, Brasil. 
      Inaugurado no dia 28 de dezembro de 1991, pelo seu idealizador João Batista Sérgio Murad, artisticamente conhecido como Beto Carrero,
       o parque foi desenvolvido em uma área de 14 quilômetros quadrados.</p>
    
    </div>
  </div>
  </div>
  


    );
    }