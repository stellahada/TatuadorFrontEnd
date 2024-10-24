import './index.scss'

import Navbar from '../../components/Navbar';

export default function Home() {
    return (
        
        <div className='home'>
            
            <div>
            
                <Navbar/>

                <div className='inicio'>
                    <div className='pinturas'>
                        <h1>Pinturas corporais que <span class="highlight">desafiam</span> sua alma</h1>

                        <img className='botaoOrcamento' src="./assets/Images/botaoorcamento.png" alt="faça seu orçamento" />

                        <div className='horario'>
                            <img src="./Assets/Images/horarioicon.png" />
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
                        <img src='./assets/Images/caveirainicio.png'></img>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
