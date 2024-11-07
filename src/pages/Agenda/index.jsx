import './index.scss';
import SessaoAgenda from '../../components/sessaoAgenda';
import ModalAgenda from '../../components/modalAgenda';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/constants';

export default function Agenda() {
    const [openModal, setOpenModal] = useState(false);
    const [dados, setDados] = useState([]);
    const [buscado, setBuscado] = useState('');
    const [filtrado, setFiltrado] = useState([])
    const [activeButton, setActiveButton] = useState('Agendado');
    const navigate = useNavigate()

    

    function AtivaModal() {
        setOpenModal(true);
    }

    function mudaTela(){
        navigate('/estoque')
    }

    function FechaModal() {
        setOpenModal(false);
    }
    function handleButtonClick(button) {
        setActiveButton(button); 
    }

    async function buscar() {
        let resp = await axios.get(`${API_URL}/agenda`);
        setDados(resp.data.agenda);
    }

    
    const dadosFiltrados = dados.filter((item) => {
        return item.ds_status === activeButton;
    });

    useEffect(() => {
        buscar();
        setFiltrado(
            dadosFiltrados.filter((item) =>
                item.nm_cliente.toLowerCase().includes(buscado.toLowerCase())
            )
        );
    }, [dados]);

    



    return (
        <div className='storage-page'>
            <div className='button-section'>
                <div className='img'>
                    <img className='butterfly' src='/assets/images/estoque/borboleta.png' alt="Borboleta" />
                </div>
                <div className='botao-agenda'>
                    <button className='escuro'>Agenda</button>
                    <button onClick={mudaTela}>Estoque</button>
                </div>
            </div>

            <div className='container-conteudo'>
                <div className='storage-search'>
                    <div className='container-procurar'>
                        <div className='informacoes-procurar'>
                            <div className='text'>
                                <h3>Sua Agenda</h3>
                                <p>Aqui você pode ver todos os clientes e serviços agendados para hoje.</p>
                            </div>

                            <ModalAgenda isOpen={openModal} closeModal={FechaModal} />
                                <div className='botao-agenda'>
                                    <button onClick={AtivaModal} className='new-product'>+ Novo agendamento</button>
                                </div>
                        </div>
                        
                        <div className='informacoes-botoes-pesquisar'>
                        <div className='botoes'>
                                    <button 
                                        onClick={() => handleButtonClick('Agendado')}
                                        className={activeButton === 'Agendado' ? 'active' : ''}
                                    >
                                        Agendados
                                    </button>
                                    <button 
                                        onClick={() => handleButtonClick('Finalizado')}
                                        className={activeButton === 'Finalizado' ? 'active' : ''}
                                    >
                                        Finalizados
                                    </button>
                                    <button 
                                        onClick={() => handleButtonClick('Cancelado')}
                                        className={activeButton === 'Cancelado' ? 'active' : ''}
                                    >
                                        Cancelados
                                    </button>
                                </div>

                                <div className='search-product'>
                                    <div className='search'>
                                        <input 
                                            className='input' 
                                            type='text' 
                                            placeholder='Buscar Agendamento...'
                                            onChange={(e) => setBuscado(e.target.value)}
                                        />
                                        <div className='botao-agenda'>
                                            <button className='button-search'>Buscar</button>
                                        </div>
                                    </div>
                                    
                                </div>
                        </div>
                        
                    </div>
                </div>

                <div className='container-produtos'>
                    {filtrado.map((item) =>  (
                        <SessaoAgenda
                            key={item.id_sessao}
                            id={item.id_sessao}
                            data={item.dt_data}
                            horario={item.ds_horario}
                            descricao={item.ds_descricao}
                            nome={item.nm_cliente}
                            url={item.img_url}
                            status={item.ds_status}
                            valor={item.qntd_valor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
