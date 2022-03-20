/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import { Link } from "react-router-dom";
import "./HD.css";

export default () => {
  return (
    <header className="inicio">
      <div className="texto">
        <h1>Agencia de Turismo Autoestima</h1>
      </div>
      <div className="nav nav-pills flex-column flex-sm-row">
        <Link
          to="/"
          className="flex-sm-fill text-sm-center nav-link"
          aria-current="page"
        >
          Home
        </Link>
        <Link to="/Destino" className="flex-sm-fill text-sm-center nav-link">
          Destino
        </Link>
        <Link to="/Compra" className="flex-sm-fill text-sm-center nav-link">
          Compra
        </Link>
        <Link to="/Sac" className="flex-sm-fill text-sm-center nav-link">
          Sac
        </Link>
      </div>
    </header>
  );
};
