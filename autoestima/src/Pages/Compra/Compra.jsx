/* eslint-disable import/no-anonymous-default-export */

import Cadastro from "../../components/Cadastro/Cadastro";
import Compromisso from "../../components/Compromisso/Compromisso";
import Footer from "../../components/Footer/Footer";
import HD from "../../components/HD/HD";

export default () => {
  return (
    <>
      <HD></HD>
      <Cadastro></Cadastro>
      <Compromisso></Compromisso>
      <Footer></Footer>
    </>
  );
};
