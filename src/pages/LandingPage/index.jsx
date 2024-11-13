import Studio from '../studio';    
import Orcamento from '../orcamento';
import Footer from '../footer';
import Home from '../Home';
import Artista from '../artista';
import Feedbacks from '../feedbacks/comentarios.jsx';
import Galeria from '../galeria/tiposTatoo.jsx'

export default function LandingPage(){
    return(
        <div>
           <div id="home">
                <Home />
            </div>
            <div id="galeria">
                <Galeria/>
            </div>
            <div id="artista">
                <Artista />
            </div>
            <div id="feedbacks">
                <Feedbacks/>
            </div>
            <div id="studio">
                <Studio />
            </div>
            <div id="orcamento">
                <Orcamento />
            </div>
            <Footer />
        </div>
    )
}