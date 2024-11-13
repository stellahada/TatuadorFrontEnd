import './index.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate(); 

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLogin = () => {
        navigate('/Login'); 
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul id="navbar" className={clicked ? "active" : ""}>
                <li><a href="/">HOME</a></li>
                <li><a href="#" onClick={() => scrollToSection('galeria')}>PORTFÓLIO</a></li>
                <li><a href="#" onClick={() => scrollToSection('artista')}>ARTISTA</a></li>
                <li>
                    <a href="#" onClick={handleLogin}>
                        <img src="./assets/images/borboleta.png" alt="Borboleta" />
                    </a>
                </li>
                <li><a href="#" onClick={() => scrollToSection('feedbacks')}>FEEDBACKS</a></li>
                <li><a href="#" onClick={() => scrollToSection('studio')}>STUDIO</a></li>
                <li><a href="#" onClick={() => scrollToSection('orcamento')}>ORÇAMENTO</a></li>
            </ul>
            <div id="mobile" onClick={handleClick}>
                <i id="bars" className={clicked ? 'fas fa-times' : "fas fa-bars"}></i>
            </div>
        </nav>
    );
};

export default Navbar;
