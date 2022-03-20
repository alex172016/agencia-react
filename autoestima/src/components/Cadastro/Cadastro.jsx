/* eslint-disable import/no-anonymous-default-export */
import { Link } from "react-router-dom";
import "./Cadastro.css";

export default () => {
  return (
    <div className="bt">
      <nav className="nav nav-pills flex-column flex-sm-row">
        <Link
          to="/CadastrarCliente"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Cadastrar Cliente
        </Link>
        <Link
          to="/ConsultaCliente"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Consulta Cliente
        </Link>
        <Link
          to="/ExcluirCliente"
          className="flex-sm-fill text-sm-center nav-link"
        >
          Excluir Cliente
        </Link>
      </nav>
    </div>
  );
};
