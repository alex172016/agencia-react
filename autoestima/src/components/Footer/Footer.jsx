/* eslint-disable import/no-anonymous-default-export */
import "./Footer.css";

import img07 from "../../../src/Foto/img/footer.jpg";
import Card03 from "../../components/Header/Carroussel/Card03/Card03";

export default () => {
  return (
    <footer className="footer">
      <br />
      <br />
      <div>
        <Card03 Foto={img07} alt="..."></Card03>
      </div>
    </footer>
  );
};
