/* eslint-disable import/no-anonymous-default-export */
import "./Ajuda.css";
export default () => {
  return (
    <div className="sac">
      <br />
      <form className="row g-2 needs-validation" novalidate>
        <h4 align="center">Caixa de Ajuda</h4>
        <div className="col-md-4">
          <label for="validationNome" className="form-label">
            Nome
          </label>
          <input type="text" className="form-control" id="validationNome" />
          <div className="valid-feedback"></div>
        </div>
        <div className="col-md-4">
          <label for="validationTelefone" className="form-label">
            Telefone
          </label>
          <input type="text" className="form-control" id="validationtelefone" />
          <div className="valid-feedback"></div>
        </div>
        <div className="col-md-4">
          <label for="validationEmail" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Email
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="valid-feedback"></div>
          </div>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <label for="floatingTextarea2">Commentarios</label>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
