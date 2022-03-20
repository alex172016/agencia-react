
/* eslint-disable import/no-anonymous-default-export */


import "./Card02.css"
import { Link } from "react-router-dom";

export default(props) =>{
    return(

        <div class="card bg-dark text-white">
  <img src={props.Foto} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <div className="topo">
      <h1>Agencia de Turismo Autoestima</h1>
    </div>
    <nav
      className="nav nav-pills flex-column flex-sm-row"
     
    >
    <Link to="/"
    
        className="flex-sm-fill text-sm-center nav-link"
        aria-current="page">
        Home 
    </Link>
    <Link to="/Destino"
    
        className="flex-sm-fill text-sm-center nav-link">
        Destino 
    </Link>
    <Link to="/Compra"
    
        className="flex-sm-fill text-sm-center nav-link">
        Compra 
    </Link>
    <Link to="/Sac"
    
      className="flex-sm-fill text-sm-center nav-link">
        Sac 
    </Link>
    </nav>
  </div>
</div>

    );
}