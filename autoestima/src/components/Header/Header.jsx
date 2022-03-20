/* eslint-disable import/no-anonymous-default-export */

import "./Header.css";
import img06 from "../../../src/Foto/img/OIP.jpg";
import Card02 from "./Carroussel/Card02/Card02";

export default () => {
  return (
    <header id="inicio">
      <div className="card1" alt="...">
        <Card02 Foto={img06} alt="..."></Card02>
      </div>
    </header>
  );
};
