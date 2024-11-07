import './tiposTatoo.scss';
import Navigation from '../../components/navigation';
import Galery from '../../components/galery';
import Photo from '../../components/photo';

import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function TiposTatoo() {
  let [vetorAtual, setVetorAtual] = useState([])
  let [tipoAtual, setTipoAtual] = useState(0)
  let tiposTatuagens = ['Old School', 'Minimalista', 'BlackWork', 'Realista', 'Lettering']
  let [windowWidth,setWindowWidth] = useState(window.innerWidth)

  let tatuagensOldSchool1 = [
    {id: 1, imagem1: './assets/images/tatoosOs/tatooO1.png', imagem2: './assets/images/tatoosOs/tatooO2.png', 
    imagem3: './assets/images/tatoosOs/tatooO3.png', imagem4:'./assets/images/tatoosOs/tatooO4.png' }, 
    {id: 2, imagem1: './assets/images/tatoosOs/tatooOs1.png', imagem2: './assets/images/tatoosOs/tatooOs2.png', 
    imagem3: './assets/images/tatoosOs/tatooOs3.png', imagem4:'./assets/images/tatoosOs/tatooOs4.png' }  
  ]

  let tatuagensOldSchool2 = [
    {id:1, imagem1:'./assets/images/tatoosOs/tatooO1.png', imagem2: null},
    {id:2, imagem1:'./assets/images/tatoosOs/tatooO2.png', imagem2:'./assets/images/tatoosOs/tatooO3.png'},    
    {id:3, imagem1:'./assets/images/tatoosOs/tatooO4.png',imagem2: null},
    {id:4, imagem1:'./assets/images/tatoosOs/tatooOs1.png', imagem2: null},    
    {id:5, imagem1:'./assets/images/tatoosOs/tatooOs2.png',imagem2:'./assets/images/tatoosOs/tatooOs3.png'},    
    {id:6, imagem1:'./assets/images/tatoosOs/tatooOs4.png',imagem2: null},
  ]

  let tatuagensMinimalistas1 = [
    {id: 1, imagem1: './assets/images/tatoosMin/tatooM1.png', imagem2:"./assets/images/tatoosMin/tatooM2.png", 
    imagem3:'./assets/images/tatoosMin/tatooM3.png', imagem4:'./assets/images/tatoosMin/tatooM4.png' },
    {id: 2, imagem1: './assets/images/tatoosMin/tatooMt1.png', imagem2:'./assets/images/tatoosMin/tatooMt2.png', imagem3:'./assets/images/tatoosMin/tatooMt3.png', imagem4:'./assets/images/tatoosMin/tatooMt4.png' }    
  ]

  let tatuagensMinimalistas2 = [
    {id:1, imagem1:'./assets/images/tatoosMin/tatooM1.png', imagem2:null},
    {id:2, imagem1:"./assets/images/tatoosMin/tatooM2.png", imagem2:'./assets/images/tatoosMin/tatooM3.png'},
    {id:3, imagem1:'./assets/images/tatoosMin/tatooM4.png', imagem2: null},
    {id:4, imagem1:'./assets/images/tatoosMin/tatooMt1.png', imagem2:null},
    {id:5, imagem1:'./assets/images/tatoosMin/tatooMt2.png', imagem2:'./assets/images/tatoosMin/tatooMt3.png'},
    {id:6, imagem1:'./assets/images/tatoosMin/tatooMt4.png', imagem2:null},
  ]

  let tatuagensBlackWork1 = [
    {id: 1, imagem1: './assets/images/tatoosBW/tatoo1.png', imagem2:'./assets/images/tatoosBW/tatoo2.png', 
    imagem3:'./assets/images/tatoosBW/tatoo3.png' , imagem4:'./assets/images/tatoosBW/tatoo4.png'},
    {id: 2, imagem1: './assets/images/tatoosBW/tatooB1.png', imagem2: './assets/images/tatoosBW/tatooB2.png',
    imagem3:'./assets/images/tatoosBW/tatooB3.png', imagem4:'./assets/images/tatoosBW/tatooB4.png' }
  ]

  let tatuagensBlackWork2 = [
    {id:1, imagem1:'./assets/images/tatoosBW/tatoo1.png', imagem2:null } ,
    {id:2, imagem1:'./assets/images/tatoosBW/tatoo2.png', imagem2: './assets/images/tatoosBW/tatoo3.png'},
    {id:3, imagem1:'./assets/images/tatoosBW/tatoo4.png', imagem2:null},
    {id:4, imagem1:'./assets/images/tatoosBW/tatooB1.png', imagem2:null },
    {id:5, imagem1:'./assets/images/tatoosBW/tatooB2.png', imagem2:'./assets/images/tatoosBW/tatooB3.png'},
    {id:6, imagem1:'./assets/images/tatoosBW/tatooB4.png', imagem2: null},
  ]

  let tatuagensRealistas1 = [
    {id: 1, imagem1: './assets/images/tatoosRt/tatooR1.png', imagem2:'./assets/images/tatoosRt/tatooR2.png', 
    imagem3:'./assets/images/tatoosRt/tatooR3.png', imagem4:'./assets/images/tatoosRt/tatooR4.png' },
    {id: 2, imagem1: './assets/images/tatoosRt/tatooRt1.png', imagem2:'./assets/images/tatoosRt/tatooRt2.png', 
      imagem3:'./assets/images/tatoosRt/tatooRt3.png', imagem4:'./assets/images/tatoosRt/tatooRt4.png' }
  ]

  let tatuagensRealistas2 = [
    {id:1, imagem1:'./assets/images/tatoosRt/tatooR1.png', imagem2:null},
    {id:2, imagem1:'./assets/images/tatoosRt/tatooR2.png', imagem2:'./assets/images/tatoosRt/tatooR3.png'},
    {id:3, imagem1:'./assets/images/tatoosRt/tatooR4.png', imagem2:null},
    {id:4, imagem1:'./assets/images/tatoosRt/tatooRt1.png', imagem2:null},
    {id:5, imagem1:'./assets/images/tatoosRt/tatooRt2.png', imagem2:'./assets/images/tatoosRt/tatooRt3.png'},
    {id:6, imagem1:'./assets/images/tatoosRt/tatooRt4.png', imagem2:null},
  ]

  let tatuagensLetterring1 = [
    {id: 1, imagem1: './assets/images/tatoosLt/tatooL1.png', imagem2:'./assets/images/tatoosLt/tatooL2.png', 
      imagem3:'./assets/images/tatoosLt/tatooL3.png', imagem4: './assets/images/tatoosLt/tatooL4.png'},
    {id: 2, imagem1: './assets/images/tatoosLt/tatooLt1.png', imagem2:'./assets/images/tatoosLt/tatooLt2.png',
      imagem3:'./assets/images/tatoosLt/tatooLt3.png', imagem4:'./assets/images/tatoosLt/tatooLt4.png'}
  ]

  let tatuagensLetterring2 = [
    {id:1, imagem1:'./assets/images/tatoosLt/tatooL1.png', imagem2: null },
    {id:2, imagem1:'./assets/images/tatoosLt/tatooL2.png', imagem2:'./assets/images/tatoosLt/tatooL3.png'},
    {id:3, imagem1:'./assets/images/tatoosLt/tatooL4.png', imagem2:null},
    {id:4, imagem1:'./assets/images/tatoosLt/tatooLt1.png', imagem2:null},
    {id:5, imagem1:'./assets/images/tatoosLt/tatooLt2.png', imagem2:'./assets/images/tatoosLt/tatooLt3.png'},
    {id:6, imagem1:'./assets/images/tatoosLt/tatooLt4.png', imagem2:null},
  ]

  function mudarSlide(index){
    setTipoAtual(index);
  };

  useEffect(()=>{
    const alteracaoTamanho = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", alteracaoTamanho);

    return () => window.removeEventListener("resize", alteracaoTamanho);
  },[])
  
  useEffect(() => {
    if(tipoAtual===0){
      if(windowWidth>1000){
        setVetorAtual(tatuagensOldSchool1)
      }else{
        setVetorAtual(tatuagensOldSchool2)
      }
    }else if(tipoAtual===1){
      if(windowWidth>1000){
        setVetorAtual(tatuagensMinimalistas1)
      }else{
        setVetorAtual(tatuagensMinimalistas2)
      }
    }else if(tipoAtual===2){
      if(windowWidth>1000){
        setVetorAtual(tatuagensBlackWork1)
      }else{
        setVetorAtual(tatuagensBlackWork2)
      }
    }else if(tipoAtual===3){
      if(windowWidth>1000){
        setVetorAtual(tatuagensRealistas1)
      }else{
        setVetorAtual(tatuagensRealistas2)
      }
    }else if(tipoAtual===4){
      if(windowWidth>1000){
        setVetorAtual(tatuagensLetterring1)
      }else{
        setVetorAtual(tatuagensLetterring2)
      }
    }
    
  }, [tipoAtual, windowWidth])

  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [vetorAtual]);

  return (
    <div className="tiposTatoo-geral">
      <Navigation funcaoSet={mudarSlide} className='navigation'/>
      <h2>{tiposTatuagens[tipoAtual]}</h2>

      <div >

        <Swiper 
        slidesPerView={1} 
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        >
          {
            windowWidth>1000?
              vetorAtual.map((item, index) => (
                <SwiperSlide key={index}>
                  <Galery imgm1={item.imagem1} imgm2={item.imagem2} imgm3={item.imagem3} imgm4={item.imagem4} ></Galery>
                </SwiperSlide>
              ))
            :
              vetorAtual.map((item, index) => (
                <SwiperSlide key={index}>
                  <Photo imagem_1={item.imagem1} imagem_2={item.imagem2}></Photo>
                </SwiperSlide>
              ))
            
          }
        </Swiper>
      </div>

    </div>
  );
}
