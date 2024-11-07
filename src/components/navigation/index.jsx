import './index.scss'

export default function navigation({funcaoSet}){
    return(
        <div className="navigation-geral">
            <div className="tipo" onClick={() => funcaoSet(0)}>
                <img src='./assets/images/icones/b1.png'></img>
                <p>OLD SCHOOL</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(1)}>
                <img src='./assets/images/icones/b2.png' className='minlist'></img>
                <p>MINIMALISTA</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(2)}>
                <img src='./assets/images/icones/b3.png'></img>
                <p>BLACKWORK</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(3)}>
                <img src='./assets/images/icones/b4.png' className='rlist'></img>
                <p>REALISTA</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(4)}>
                <img src='./assets/images/icones/lettering.png' className='ltrn'></img>
                <p>LETTERNING</p>
            </div>

        </div>
    )
}