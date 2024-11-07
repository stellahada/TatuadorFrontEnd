import './index.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate(); // useNavigate is now in a functional component context

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLogin = () => {
        navigate('/Login'); // navigate to the Login page
    };

    return (
        <nav>
            <ul id="navbar" className={clicked ? "active" : ""}>
                <li><a href="/">HOME</a></li>
                <li><a href="/portfolio">PORTFÓLIO</a></li>
                <li><a href="/artista">ARTISTA</a></li>
                <li>
                    <a href="#" onClick={handleLogin}>
                        <img src="./assets/images/borboleta.png" alt="Borboleta" />
                    </a>
                </li>
                <li><a href="/feedbacks">FEEDBACKS</a></li>
                <li><a href="/studio">STUDIO</a></li>
                <li><a href="/orcamento">ORÇAMENTO</a></li>
            </ul>
            <div id="mobile" onClick={handleClick}>
                <i id="bars" className={clicked ? 'fas fa-times' : "fas fa-bars"}></i>
            </div>
        </nav>
    );
};

export default Navbar;
