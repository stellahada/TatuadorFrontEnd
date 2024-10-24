import './index.scss'
import { Component } from "react"

export default class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return(
        <nav>
            <ul id="navbar"className= {this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><a href="">HOME</a></li>
                <li><a href="">PORTIFÓLIO</a></li>
                <li> <a href="">ARTISTA</a></li>
                <li>
                    <a href="">
                    <img src="/Assets/Images/borboleta.png" alt="Borboleta" />
                    </a>
                </li>
                <li><a href="">FEEDBACKS</a></li>
                    <li><a href="">STUDIO</a></li>
                    <li><a href="">ORÇAMENTO</a></li>
            </ul>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bars" className={this.state.clicked ? 'fas fa-times' : "fas fa-bars"}></i>
                </div>  
        </nav>
    );

}
}