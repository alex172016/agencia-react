/* eslint-disable import/no-anonymous-default-export */
import "./Excluir.css";
export default () => {
  return (
    <div className="excluir">
      <br />
      <form className="row g-3">
        <div className="col-auto">
          <label for="cpf" className="visually-hidden">
            CPF
          </label>
          <input
            type="cpf"
            className="form-control"
            id="cpf"
            placeholder="Digite seu CPF"
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Excluir Cliente
          </button>
        </div>
      </form>
    </div>
  );
};
