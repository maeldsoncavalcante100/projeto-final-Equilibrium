import './header.modules.css'
function Header(){
    return(
        <header>
            <h3 className="logo">Equilibrium</h3>
            <ul className="menu">
                <li>Início</li>
                <li>Sobre</li>
                <li>Livros</li>
                <li></li>
            </ul>
        </header>
    );
}

export default Header;