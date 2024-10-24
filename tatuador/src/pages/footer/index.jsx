import './index.scss'

export default function footer(){
    return(
        <div  className='page-footer'>
            <div className='container'>
                <img  className='borboleta' src="./assets/images/footer/borboleta.png" alt="" />
                <img src="./assets/images/footer/linha.png" alt="" />
                <div className='container-informacoes'>
                    <div className='alinhamento'>
                        <img width={25} height={25}  src="./assets/images/footer/relogio.png" alt="" />
                        <div className='container-letras'>
                        <div className='letras'>
                            <p className='letra-laranja'>Seg-Sex</p>
                            <p className='branco'>11:00-21:00</p>
                        </div>
                        <div className='letras'>
                            <p className='letra-laranja'>Sab-Dom</p>
                            <p className='branco'>14:00-20:00</p>
                        </div>
                    </div>
                    </div>
                    <div className='alinhamento'>
                        <img src="./assets/images/footer/ponteiro.png" alt="" />
                        <p>Rua Girassol, 34 - Vila Madalena / SP</p>
                    </div>
                    <div className='alinhamento'>
                        <img src="./assets/images/footer/envelope.png" alt="" />
                        <p>aliceperrin@gmail.com</p>
                    </div>
                    <div className='alinhamento'>
                        <img src="./assets/images/footer/telefone.png" alt="" />
                        <p>(11) 97787-8950</p>
                    </div>
                </div>
                <img src="./assets/images/footer/linha.png" alt="" />
                <div className='container-links'>
                        <a href=''>PÁGINA INICIAL</a>
                        <a href=''>PORTFÓLIO</a>
                        <a href=''>ARTISTA</a>
                </div>
                <img src="./assets/images/footer/linha.png" alt="" />
                <div className='container-links'>
                        <a href=''>FEEDBACKS</a>
                        <a href=''>ESTUDIO</a>
                        <div className='icons'>
                        <a href=''>ORÇAMENTO</a>
                        <img src="./assets/images/footer/icons.png" alt="" />
                        </div>
                </div>
            </div>
            <img src="./assets/images/footer/linha-grande.png" alt="" />
            <div className='container-texto-final'>
                <div className='container-terms'>
                    <h6>TERMS & CONDITIONS</h6>
                    <h6>PRIVACY POLICY</h6>
                </div>
                <h6 className='opacity'>@ 2024 ALICE PENNIN. TODOS OS DIREITOS RESERVADOS.</h6>
            </div>
        </div>
    )
}