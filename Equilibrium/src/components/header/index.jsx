import "./header.modules.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3 className="logo">Equilibrium</h3>
      <nav>
        <ul className="menu">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/indicacoes">Livros</Link>
          <li>Comentários</li>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
