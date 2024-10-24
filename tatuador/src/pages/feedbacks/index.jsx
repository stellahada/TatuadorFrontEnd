import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Feedback from '../../components/feedbacks'

function App() {
  return (
    <div className="Clientes-geral">
      <h1>O que os clientes dizem?</h1>

      <div className='comentario'>
        <Swiper slidesPerView={1} navigation className='slider'>
          <SwiperSlide className='slideitem'> 
            <Feedback comentario={"O trabalho dessa diva é incrível... amei a forma como ela trata seus clientes... É super atenciosa. Super recomento o trabalho dela!!!!!!"}
              nome={"Carolina Montenegro"} className='feedback'></Feedback>
          </SwiperSlide>

          <SwiperSlide className='slideitem'>
            <Feedback comentario={"Trabalho inpecável. Ótima profissional!"}
              nome={"Jefferson Rodolfo"} className='feedback'></Feedback>
          </SwiperSlide>

          <SwiperSlide className='slideitem'>
            <Feedback comentario={"O trabalho dela é super bem feito. Voltarei mais vezes para novas tatuagens!!"}
              nome={"Raquel Forlán"} className='feedback'></Feedback>
          </SwiperSlide>

          <SwiperSlide className='slideitem'>
            <Feedback comentario={"Não há nada que eu possa reclamar sobre ele e seu trabalho! Superou e muito minha expectativas! E seu estúdio é super organizado, super cheiroso!"}
              nome={"Aguinaldo Gatuso"} className='feedback'></Feedback>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
