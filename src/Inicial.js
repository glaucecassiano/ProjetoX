import logo from './logo.png';
import './Inicial.css';
import { Link } from 'react-router-dom';

export default function Inicial() {
  return (
    <div className="app">
      <header className="App-header">
       <div className="paginainicial"> <Link to="/about" ><img src={logo} className="projetox" alt="projetox"/></Link></div> 
      </header>
    </div>
  );
}
