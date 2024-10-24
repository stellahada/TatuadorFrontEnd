import './index.scss'

import oldSchool from '../../assets/images/icones/b1.png'
import minimalista from '../../assets/images/icones/b2.png'
import blackwork from '../../assets/images/icones/b3.png'
import realista from '../../assets/images/icones/b4.png'
import lettering from '../../assets/images/icones/lettering.png'

export default function navigation({funcaoSet}){
    return(
        <div className="navigation-geral">
            <div className="tipo" onClick={() => funcaoSet(0)}>
                <img src={oldSchool}></img>
                <p>OLD SCHOOL</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(1)}>
                <img src={minimalista} className='minlist'></img>
                <p>MINIMALISTA</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(2)}>
                <img src={blackwork}></img>
                <p>BLACKWORK</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(3)}>
                <img src={realista} className='rlist'></img>
                <p>REALISTA</p>
            </div>

            <div className="tipo" onClick={() => funcaoSet(4)}>
                <img src={lettering} className='ltrn'></img>
                <p>LETTERNING</p>
            </div>

        </div>
    )
}