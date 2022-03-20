/* eslint-disable import/no-anonymous-default-export */

import "./Internacional.css";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <br />
      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuClickable"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Escolha um continente
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuClickable">
          <li class="dropdown-item dropdown-toggle">Asia</li>
          <ul>
            <li class="dropdown-item">Japão</li>
            <li class="dropdown-item">China</li>
          </ul>

          <li class="dropdown-item dropdown-toggle">Europa</li>

          <ul>
            <li class="dropdown-item">Espanha</li>
            <li class="dropdown-item">Franca</li>
          </ul>

          <li class="dropdown-item dropdown-toggle">America</li>

          <ul>
            <li class="dropdown-item">Brasil</li>
            <li class="dropdown-item">Cuba</li>
          </ul>
        </ul>
      </div>

      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuClickable"
          data-bs-toggle="dropdown"
          data-bs-auto-close="inside"
          aria-expanded="false"
        >
          Modelo de Viagem
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
          <li class="dropdown-item">Hospedagem + Passagem Aeria</li>
          <li class="dropdown-item">Hospedagem</li>
          <li class="dropdown-item"> Passagem Aeria</li>
        </ul>
      </div>

      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuClickable"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Parques Tematico
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
          <li class="dropdown-item">Beto Carreiro</li>
          <li class="dropdown-item">Disney</li>
          <li class="dropdown-item">Beach Park Fortaleza</li>
        </ul>
      </div>

      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuClickable"
          data-bs-toggle="dropdown"
          data-bs-auto-close="false"
          aria-expanded="false"
        >
          Forma de Pagamento
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
          <li class="dropdown-item">Avista</li>
          <li class="dropdown-item">Cartão</li>
          <li class="dropdown-item">Pix</li>
        </ul>

        <button class="btn btn-info" type="submit">
          <Link
            to="/compra"
            className="flex-sm-fill text-sm-center nav-link"
            aria-current="page"
          >
            Compra
          </Link>
        </button>
      </div>
    </nav>
  );
};
