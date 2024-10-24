import './index.scss';
import Navigation from '../../components/navigation';
import Galery from '../../components/galery';

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import ttOs1 from '../../assets/images/tatoosOs/tatooO1.png'
import ttOs2 from '../../assets/images/tatoosOs/tatooO2.png'
import ttOs3 from '../../assets/images/tatoosOs/tatooO3.png'
import ttOs4 from '../../assets/images/tatoosOs/tatooO4.png'
import ttOs5 from '../../assets/images/tatoosOs/tatooOs1.png'
import ttOs6 from '../../assets/images/tatoosOs/tatooOs2.png'
import ttOs7 from '../../assets/images/tatoosOs/tatooOs3.png'
import ttOs8 from '../../assets/images/tatoosOs/tatooOs4.png'

import ttBw1 from '../../assets/images/tatoosBW/tatoo1.png'
import ttBw2 from '../../assets/images/tatoosBW/tatoo2.png'
import ttBw3 from '../../assets/images/tatoosBW/tatoo3.png'
import ttBw4 from '../../assets/images/tatoosBW/tatoo4.png'
import ttBw5 from '../../assets/images/tatoosBW/tatooB1.png'
import ttBw6 from '../../assets/images/tatoosBW/tatooB2.png'
import ttBw7 from '../../assets/images/tatoosBW/tatooB3.png'
import ttBw8 from '../../assets/images/tatoosBW/tatooB4.png'

import ttMin1 from '../../assets/images/tatoosMin/tatooM1.png'
import ttMin2 from '../../assets/images/tatoosMin/tatooM2.png'
import ttMin3 from '../../assets/images/tatoosMin/tatooM3.png'
import ttMin4 from '../../assets/images/tatoosMin/tatooM4.png'
import ttMin5 from '../../assets/images/tatoosMin/tatooMt1.png'
import ttMin6 from '../../assets/images/tatoosMin/tatooMt2.png'
import ttMin7 from '../../assets/images/tatoosMin/tatooMt3.png'
import ttMin8 from '../../assets/images/tatoosMin/tatooMt4.png'

import ttRt1 from '../../assets/images/tatoosRt/tatooR1.png'
import ttRt2 from '../../assets/images/tatoosRt/tatooR2.png'
import ttRt3 from '../../assets/images/tatoosRt/tatooR3.png'
import ttRt4 from '../../assets/images/tatoosRt/tatooR4.png'
import ttRt5 from '../../assets/images/tatoosRt/tatooRt1.png'
import ttRt6 from '../../assets/images/tatoosRt/tatooRt2.png'
import ttRt7 from '../../assets/images/tatoosRt/tatooRt3.png'
import ttRt8 from '../../assets/images/tatoosRt/tatooRt4.png'

import ttLt1 from '../../assets/images/tatoosLt/tatooL1.png'
import ttLt2 from '../../assets/images/tatoosLt/tatooL2.png'
import ttLt3 from '../../assets/images/tatoosLt/tatooL3.png'
import ttLt4 from '../../assets/images/tatoosLt/tatooL4.png'
import ttLt5 from '../../assets/images/tatoosLt/tatooLt1.png'
import ttLt6 from '../../assets/images/tatoosLt/tatooLt2.png'
import ttLt7 from '../../assets/images/tatoosLt/tatooLt3.png'
import ttLt8 from '../../assets/images/tatoosLt/tatooLt4.png'

export default function TiposTatoo() {
  const swiperRef = useRef(null);
  let [vetorAtual, setVetorAtual] = useState([])
  let [tipoAtual, setTipoAtual] = useState(0)
  let tiposTatuagens = ['Old School', 'Minimalista', 'BlackWork', 'Realista', 'Lettering']
  {/*cria um vetor de objeto para tipo de tatuagem | E | criar uma variável que recebe o vetor em uso*/}

  let tatuagensOldSchool = [
    {id: 1, imagem1: ttOs1, imagem2: ttOs2, imagem3: ttOs3, imagem4:ttOs4 }, 
    {id: 2, imagem1: ttOs5, imagem2: ttOs6, imagem3: ttOs7, imagem4:ttOs8 }  
  ]

  let tatuagensMinimalistas = [
    {id: 1, imagem1: ttMin1, imagem2:ttMin2, imagem3:ttMin3, imagem4:ttMin4 },
    {id: 2, imagem1: ttMin5, imagem2:ttMin6, imagem3:ttMin7, imagem4:ttMin8 }    
  ]

  let tatuagensBlackWork = [
    {id: 1, imagem1: ttBw1, imagem2:ttBw2, imagem3:ttBw3, imagem4:ttBw4},
    {id: 2, imagem1: ttBw5, imagem2:ttBw6, imagem3:ttBw7, imagem4:ttBw8 }
  ]

  let tatuagensRealistas = [
    {id: 1, imagem1: ttRt1, imagem2:ttRt2, imagem3:ttRt3, imagem4:ttRt4 },
    {id: 2, imagem1: ttRt5, imagem2:ttRt6, imagem3:ttRt7, imagem4:ttRt8 }
  ]

  let tatuagensLetterring = [
    {id: 1, imagem1: ttLt1, imagem2:ttLt2, imagem3:ttLt3, imagem4:ttLt4},
    {id: 2, imagem1: ttLt5, imagem2:ttLt6, imagem3:ttLt7, imagem4:ttLt8}
  ]

  function mudarSlide(index){
    setTipoAtual(index);
  };

  useEffect(() => {
    if(tipoAtual===0){
      setVetorAtual(tatuagensOldSchool)
    }else if(tipoAtual===1){
      setVetorAtual(tatuagensMinimalistas)
    }else if(tipoAtual===2){
      setVetorAtual(tatuagensBlackWork)
    }else if(tipoAtual===3){
      setVetorAtual(tatuagensRealistas)
    }else if(tipoAtual===4){
      setVetorAtual(tatuagensLetterring)
    }
    
  }, [tipoAtual])

  useEffect(()=>{

  })

  return (
    <div className="tiposTatoo-geral">
      <Navigation funcaoSet={mudarSlide} className='navigation'/>
      <h2>{tiposTatuagens[tipoAtual]}</h2>

      <div >

        <Swiper 
        slidesPerView={1} 
        navigation 
        ref={swiperRef}
        >
          {vetorAtual.map((item,index) => (
            <SwiperSlide key={index}>
              <Galery imgm1={item.imagem1} imgm2={item.imagem2} imgm3={item.imagem3} imgm4={item.imagem4} ></Galery>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
