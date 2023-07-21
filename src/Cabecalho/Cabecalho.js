import React from "react";
import logo from "../logo.png";
import "./Cabecalho.css";

export default function Cabecalho() {
  return (
    <div className="header">
      <img src={logo} id="projetox" alt="projetox"></img>
    </div>
  );
}
