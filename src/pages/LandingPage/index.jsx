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
            <Home />
            <Galeria/>
            <Artista />
            <Feedbacks/>
            <Studio />
            <Orcamento />
            <Footer />
        </div>
    )
}