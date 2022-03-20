import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./Pages/Home/Home";
import Compra from "./Pages/Compra/Compra";
import Sac from "./Pages/Sac/Sac";
import Destino from "./Pages/Destino/Destino";
import CadastrarCliente from "./Pages/CadastrarCliente/CadastrarCliente";
import ExcluirCliente from "./Pages/ExcluirCliente/ExcluirCliente";
import ConsultaCliente from "./Pages/ConsultaCliente/ConsultaCliente";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/Sac" element={<Sac></Sac>}></Route>
        <Route path="/Destino" element={<Destino></Destino>}></Route>
        <Route path="/Compra" element={<Compra></Compra>}></Route>
        <Route
          path="/CadastrarCliente"
          element={<CadastrarCliente></CadastrarCliente>}
        ></Route>
        <Route
          path="/ExcluirCliente"
          element={<ExcluirCliente></ExcluirCliente>}
        ></Route>
        <Route
          path="/ConsultaCliente"
          element={<ConsultaCliente></ConsultaCliente>}
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
