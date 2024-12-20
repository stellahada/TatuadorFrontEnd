import './index.scss'

import Navbar from '../../components/Navbar';


export default function Home() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
   
    return (
        
        <div className='home'>
            
            <div>
            
                <Navbar/>

                <div className='inicio'>
                    <div className='pinturas'>
                        <h1>Pinturas corporais que<br/> <span class="highlight">desafiam</span> sua<br/>  alma</h1>

                        <img href="#" onClick={() => scrollToSection('orcamento')} className='botaoOrcamento' src="./assets/images/botaoorcamento.png" alt="faça seu orçamento" />

                        <div className='horario'>
                            <img src="./assets/images/horarioicon.png" />
                            <div className='horarioTexto'>
                                <div className='seg-sex'>
                                    <p>Seg-Sex</p>
                                    <p>Sab-Dom</p>
                                </div>
                                <div>
                                    <p>11:00-21:00</p>
                                    <p>14:00-20:00</p>
                                    
                                </div>
                                </div>
                        </div>
                    </div>
                    
                    <div className='caveira'>
                        <img src='./assets/images/home/caveira.png'></img>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
