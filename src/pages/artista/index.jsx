import './index.scss'

export default function Artista() {
    return (
        <section className="Artista">
            <h1>Artista</h1>
            <div className="Textos">
            <div className='secao1'>
                <img src='./assets/Images/artista1.png' alt='Alice Perrin'></img>

                <p><span className='highlight'>Alice Perrin</span> uma tatuadora apaixonada pela arte corporal, com mais de 10 anos de experiência em transformar pele em verdadeiras obras de arte. Seu estilo único combina técnica apurada e criatividade para criar tatuagens únicas que refletem a personalidade de cada cliente. Seu estilo varia entre Old Shool, Blackwork, minimalismo e realismo, sempre buscando a perfeição em cada traço.</p>
            </div>

            <div className='secao1'>

                <p>Desde o início de sua carreira, Alice se dedicou a aperfeiçoar suas técnicas, sempre buscando novas inspirações e aprimorando seu olhar artístico. Cada sessão é tratada com extremo cuidado, respeitando as ideias do cliente e garantindo que o processo seja realizado em um ambiente seguro, higienizado e acolhedor.</p>
                <img className="imagem2"src='./assets/Images/artista2.png' alt='Alice Perrin'></img>
            </div>
            
            </div>


        </section>
    );
}