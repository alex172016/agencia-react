/* eslint-disable import/no-anonymous-default-export */
import "./centro.css";

import CardPar02 from "../Header/Carroussel/Card01/CardPar02";
import CardPar from "../Header/Carroussel/Card01/CardPar";
import Card from "../Header/Carroussel/Card/Card";
import CardPar01 from "../Header/Carroussel/Card01/CardPar01";

import img01 from "../../../src/Foto/img/Bariloche .jpg";
import img02 from "../../../src/Foto/img/caribeHolandes.jpg";
import img03 from "../../../src/Foto/img/Madri.jpg";
import img04 from "../../Foto/img/disnei.png";
import img05 from "../../Foto/img/betoCarreiro.jpg";
import img06f from "../../Foto/img/beachfortaleza.jpg";

export default () => {
  return (
    <centro className="topo">
      <br />
      <h3>Viagem em Promoção</h3>
      <div className="row row-cols-1 row-cols-md-3 g-1">
        <Card Foto={img01} alt="..."></Card>
        <Card Foto={img02} alt="..."></Card>
        <Card Foto={img03} alt="..."></Card>
      </div>

      <div className="par">
        <br />
        <h3>Pacote Parque Tematicos</h3>
        <br />
        <p>
          Dizem que o ano só começa após o carnaval, não é mesmo? Então nada
          melhor que ficar por dentro de todas as novidades que os parques de
          diversões ou parques temáticos estão preparando para esse ano.
        </p>
        <div className="par01">
          <CardPar02 Foto={img04} alt="..."></CardPar02>
          <br></br>
          <CardPar01 Foto={img06f} alt="..."></CardPar01>
          <br></br>
          <CardPar Foto={img05} alt="..."></CardPar>
          <br></br>
        </div>
      </div>
    </centro>
  );
};
