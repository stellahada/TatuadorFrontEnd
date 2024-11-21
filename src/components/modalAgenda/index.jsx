import './index.scss';

import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/constants';

export default function ModalAgenda({ isOpen, closeModal}) {
    
    let [data, setData] = useState("")
    let [valor, setValor] = useState("")
    let [url, setUrl] = useState("")
    let [horario, setHorario] = useState("")
    let [cliente, setCliente] = useState("")
    let [descricao, setDescricao] = useState("")
    const [activeButton, setActiveButton] = useState('');

    if (!isOpen) {
        return null;
    }

    function validar() {
        let valid = true;
        if (!data) {
            alert('Data é obrigatório, por favor digite novamente')
            valid = false;
          }
      
          if (!valor ) { 
            alert('Valor invalido, por favor digite novamente')
            valid = false;
          }
      
          if (!url) {
            alert('Url invalida, por favor digite novamente.');
            valid = false;
          }
          if (!horario) {
              alert('Horario invalido, por favor digite novamente.');
              valid = false;
            }
            if (!cliente) {
              alert('Cliente invalido, por favor digite novamente.');
              valid = false;
            }
            if (!descricao) {
              alert('Descricao invalida, por favor digite novamente.');
              valid = false;
            }
    
        return valid;
      }



    async function FuncCriar(){
            let body = {
                "data":data,
                "valor":valor,
                "url":url,
                "horario": horario,
                "cliente": cliente,
                "descricao":descricao,
    
            }
            let token = localStorage.getItem('TOKEN');
            let resp = axios.post(`${API_URL}/agenda`,body,{
                headers: { 'x-access-token': token }})
            
            alert("Novo agendamento cadastrado com sucesso")
            setData('')
            setCliente('')
            setDescricao('')
            setHorario('')
            setUrl('')
            setValor('')
        
    }

    function handleButtonClick(event,button) {
        event.preventDefault();
        setActiveButton(button); 
        setHorario(button)
        
    }

    function fechaModalCad(){
        closeModal()
        if(validar()){
        FuncCriar()
        }
    }


    return (
        <div className='modal-Agenda' onClick={closeModal}>
      
            <div className='container-Agenda' onClick={(e) => e.stopPropagation()}>
               
                <div className='titulo'>
                    <h1>Agende uma sessão</h1>
                    <p>
                    Selecione data, horário, o nome do cliente e a descrição
                    do serviço para criar o agendamento
                    </p>
                </div>

                <form>
                    <div className='container-input'>
                        <label htmlFor=''>Data</label>
                        <input type="date" onChange={(e)=>setData(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Valor</label>
                        <input type="number" onChange={(e)=>setValor(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <div className='sessao-horarios'>
                            <label htmlFor="">Horarios</label>
                            <label htmlFor="">Manha</label>
                        </div>
                    </div>
                    <div className='container-horarios'>                        
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'09:00')}
                                        className={activeButton === '09:00' ? 'active' : ''}
                                    >
                                        09:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'10:00')}
                                        className={activeButton === '10:00' ? 'active' : ''}
                                    >
                                        10:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'11:00')}
                                        className={activeButton === '11:00' ? 'active' : ''}
                                    >
                                        11:00
                                    </button>
                                    
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'12:00')}
                                        className={activeButton === '12:00' ? 'active' : ''}
                                    >
                                        12:00
                                    </button>
                                    
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Tarde</label>
                    </div>
                    <div className='container-horarios'>                        
                                    <button 
                                        onClick={(e) => handleButtonClick(e,' 13:00')}
                                        className={activeButton === ' 13:00' ? 'active' : ''}
                                    >
                                        13:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'14:00')}
                                        className={activeButton === '14:00' ? 'active' : ''}
                                    >
                                        14:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'15:00')}
                                        className={activeButton === '15:00' ? 'active' : ''}
                                    >
                                        15:00
                                    </button>
                                    
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'16:00')}
                                        className={activeButton === '16:00' ? 'active' : ''}
                                    >
                                        16:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'17:00')}
                                        className={activeButton === '17:00' ? 'active' : ''}
                                    >
                                        17:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'18:00')}
                                        className={activeButton === '18:00' ? 'active' : ''}
                                    >
                                        18:00
                                    </button>
                                    
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Noite</label>
                    </div>
                   
                    <div className='container-horarios'>                        
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'19:00')}
                                        className={activeButton === '19:00' ? 'active' : ''}
                                    >
                                        19:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'20:00')}
                                        className={activeButton === '20:00' ? 'active' : ''}
                                    >
                                        20:00
                                    </button>
                                    <button 
                                        onClick={(e) => handleButtonClick(e,'21:00')}
                                        className={activeButton === '21:00' ? 'active' : ''}
                                    >
                                        21:00
                                    </button>
                                    
                    </div>
                    <div>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Cliente</label>
                        <input type="text" onChange={(e)=>setCliente(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Url Image Tattoo</label>
                        <input type="text" onChange={(e)=>setUrl(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Descriçao do serviço</label>
                        <textarea type="text" onChange={(e)=>setDescricao(e.target.value)}/>
                    </div>
                </form>
                <div className='botao'>
                        <button  onClick={fechaModalCad}>Agendar</button>
                </div>
            </div>
        </div>
    );
}
