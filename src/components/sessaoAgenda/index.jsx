import './index.scss';

import ModalItemAgenda from '../moldalItemAgenda';

import { useState } from 'react';
import { API_URL } from '../../api/constants';
import axios from 'axios';

export default function SessaoAgenda({id,nome,url,valor,descricao,data,horario,status}) {
    const [openModal, setOpenModal] = useState(false);

    function AtivaModal() {
        setOpenModal(true); 
    }

    function FechaModal() {
        setOpenModal(false); 
    }

    async function AlterarStatus(status){
        let token = localStorage.getItem('TOKEN');
        let resp = await axios.put(
            `${API_URL}/agenda/${id}/${status}`,  
            {}, 
            {
                headers: { 'x-access-token': token } 
            }
        );
        
    }

    function obterImagemPeriodo(horario) {
        const horas = parseInt(horario.split(':')[0], 10);
        
        if (horas >= 9 && horas <= 12) {
            return "./assets/images/agenda/manha.png";
        } else if (horas >= 13 && horas <= 18) {
            return "./assets/images/agenda/tarde.png";
        } else {
            return "./assets/images/agenda/noite.png"; 
        }
    }
    function obterTextoPeriodo(horario) {
        const horas = parseInt(horario.split(':')[0], 10);
        
        if (horas >= 9 && horas <= 12) {
            return "Manha";
        } else if (horas >= 13 && horas <= 18) {
            return "Tarde";
        } else {
            return "Noite"; 
        }
    }

    

    return (
        <div className='comp-sessaoAgenda' >
    
            <ModalItemAgenda isOpen={openModal} closeModal={FechaModal} idA={id} dataA={data} valorA={valor}urlA={url}horarioA={horario} clienteA={nome} descricaoA={descricao} statusA={status}/>
            <div className='container-sessaoAgenda' onClick={AtivaModal}>

                <div className='container-sessaoAgenda'>

               
                        <div className='agenda-periodo'>

                            <div className='agenda-periodo-info'>
                            <img src={obterImagemPeriodo(horario)}  alt="manha" />
                            <p>{obterTextoPeriodo(horario)}</p>
                            </div>
                        <p>{new Date(data).toLocaleDateString('pt-BR')}</p>
                        </div>
                        <div className='agenda-informacoes'>
                            <div className='informacoes-nome'>
                                <h1>{horario} H</h1>
                                <h1>{nome}</h1>
                            </div>
                                <p>R$ {valor}.00</p>
                                <div className='agenda-botoes'>
                                        <button onClick={() => AlterarStatus('Finalizado')}><img src="./assets/images/agenda/finalizar.png" alt="" /></button>
                                        <button onClick={() => AlterarStatus('Cancelado')}><img className='cancelar' src="./assets/images/agenda/cancelar.png" alt="" /></button>
                                </div>
                        </div>
                </div>
                <div className='agenda-imagem'>
                    <img src={url} alt="" />
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    );
}
