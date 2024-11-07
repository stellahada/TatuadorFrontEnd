import './index.scss'

export default function studio(){
    return(
        <div className='page-studio'>
            <h1>Studio</h1>
            <div className='icons'>
                <div className='rua'>
                    <img src='/assets/images/localizaçao_menor.png'/>
                    <p>Rua Girassol, 34 -<br/>Vila Madalena / SP </p>
                </div>
                <div className='horario'>
                    <img src='/assets/images/relogio.png'/>

                    <div className='container-letras'>
                        <div className='letras'>
                            <p>Mon-Fri</p>
                            <p className='branco'>11:00-21:00</p>
                        </div>
                        <div className='letras'>
                            <p>Sat-Sun</p>
                            <p className='branco'>14:00-20:00</p>
                        </div>
                    </div>
                
               
                </div>
            </div>
            <div className='informacoes'>
                <div className='container-icons'>
                        <div className='informacoes-icons'>
                            <img src='/assets/images/localizaçao.png'/>
                            <h3>Ótima<br/> 
                            localização
                            </h3>
                        </div>
                        <div className='informacoes-icons'>
                            <img src='/assets/images/seguranca.png'/>
                            <h3>Biosegurança</h3>
                         </div>
                         <div className='informacoes-icons'>
                            <img src='/assets/images/maquina.png'/>
                            <h3>Compromisso com<br/>
                            a Arte 
                            </h3>
                         </div>
                </div>
                <div className='informacoes-texto'>
                    <div className='informacoes-conteudo'>
                        <p>
                        O Haus está no coração da Vila<br/> 
                        Madalena, cercado pelos melhores<br/> 
                        bares e restaurantes de São Paulo. E<br/> 
                        ao lado do Beco do Batman, com<br/> 
                        galerias e arte ao ar livre.
                        </p>
                    </div>

                    <div className='informacoes-conteudo'>
                   
                        <p>
                        Aqui no Haus seguimos a risca todas<br/>
                        as regras de biosegurança. Todos<br/>
                        nossos equipamentos são<br/>
                        descartáveis ou esterelizados em<br/>
                        autoclave.
                        </p>
                     </div>
                     
                    <div className='informacoes-conteudo'>
                    
                        <p>
                        Cada tatuagem é feita com atenção aos<br/>
                        detalhes e à visão de quem confia no<br/>
                        nosso trabalho. Contamos com uma<br/>
                        ouvidoria aberta para garantir que suas<br/>
                        ideias sejam ouvidas e transformadas em<br/>
                        arte personalizada, sempre com<br/>
                        segurança e qualidade.
                        </p>
                    </div>
                </div>
               

                
            </div>

            <h1>Conheça nosso studio</h1>
            <div className='carrossel-imagens'>
                <img className='img-alterada' src='/assets/images/imagem_1.png'/>
                <img className='img-normal' src='/assets/images/imagem_2.png'/>
                <img className='img-normal' src='/assets/images/imagem_3.png'/>
                <img className='img-normal' src='/assets/images/imagem_4.png'/>
                <img className='img-alterada' src='/assets/images/imagem_1.png'/>
            </div>
        </div>

    )

}