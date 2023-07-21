import React from "react";
import Linkedin from "../linkedin.png";
import Github from "../github.png";
import { Link } from "react-router-dom";
import "./Rodape.css";

export default function Rodape() {
  return (
    <div className="footer">
      <p>Glau Cassiano Agradece sua presença</p>
      <Link to="https://www.linkedin.com/in/glaucecassiano/">
        <img src={Linkedin} alt="Linkedin"></img>
      </Link>
      <Link to="https://github.com/glaucecassiano">
        <img src={Github} alt="Github"></img>
      </Link>
    </div>
  );
}
