import "./About.css";
import Rodape from "./Rodape/Rodape";
import Cabecalho from "./Cabecalho/Cabecalho";
import Cansadinha from "./tired.png";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="pagina">
      <Cabecalho />
      <div className="cindy">
        {" "}
        <h1>Oi eu sou a Cindy</h1>
        <Link to="./RedesSociais">
          <img src={Cansadinha} alt="cansadinha"></img>
        </Link>
        <div className="sobreMim">
          {" "}
          <h2>
            Sou a programadora por trás do projeto X, e ele se trata de um
            projeto que possa me trazer a minha tão sonhada primeira vaga hehe
          </h2>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
