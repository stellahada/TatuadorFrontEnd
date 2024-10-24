import './index.scss'

export default function Galery({imgm1, imgm2, imgm3, imgm4}){
    return(
        <div className="galery-geral">

            <div className='galery'>
                <img src={imgm1} altm="Tatuagem" />

                <div className='galery-vertical'>
                    <img src={imgm2} alt="Tatuagem" />
                    <img src={imgm3} alt="Tatuagem" />
                </div>

                <img src={imgm4} alt="Tatuagem"/>
            </div>


        </div>
    )
}
