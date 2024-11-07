import './index.scss'

export default function Photo({imagem_1 ,imagem_2}){
    return(
        <div className="photo-geral">
            <div className="photo">
                {imagem_2===null  
                ? <div className='one-photo'>
                    <img src={imagem_1} alt="Tatuagem" />
                  </div>
                 
                : <div className='two-photo'>
                    <img src={imagem_1} alt="Tatuagem" />
                    <img src={imagem_2} alt="Tatuagem" />
                  </div>}
                
            </div>
            
        </div>
    )
}