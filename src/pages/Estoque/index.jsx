import './index.scss';
import ItemEstoque from '../../components/itemEstoque';
import ModalEstoque from '../../components/modaEstoque';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/constants';

export default function Estoque() {
    const [openModal, setOpenModal] = useState(false);
    const [dados, setDados] = useState([]);
    const [buscado, setBuscado] = useState('');
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const navigate = useNavigate()

    function AtivaModal() {
        setOpenModal(true);
    }

    function mudaTela(){
        navigate('/agenda')
    }

    function FechaModal() {
        setOpenModal(false);
    }

    async function buscar() {
        let resp = await axios.get(`${API_URL}/produtos`);
        setDados(resp.data.produtos);
    }


    useEffect(() => {
        buscar();
        setDadosFiltrados(
            dados.filter((item) =>
                item.ds_nome.toLowerCase().includes(buscado.toLowerCase())
            )
        );
    }, [buscado, dados]);

    return (
        <div className='storage-page'>
            <div className='button-section'>
                <div className='img'>
                    <img className='butterfly' src='/assets/images/estoque/borboleta.png' alt="Borboleta" />
                </div>
                <div className='botao-estoque'>
                    <button onClick={mudaTela}>Agenda</button>
                    <button className='escuro'>Estoque</button>
                </div>
                
            </div>

            <div className='container-conteudo'>
                <div className='storage-search'>
                    <div className='container-procurar'>
                        <div className='text'>
                            <h3>Estoque</h3>
                            <p>Aqui você pode ver todos os itens e sua quantidade do estoque.</p>
                        </div>

                        <div className='search-product'>
                            <div className='search'>
                                <input 
                                    className='input' 
                                    type='text' 
                                    placeholder='Buscar produto...'
                                    onChange={(e) => setBuscado(e.target.value)}
                                />
                                <div className='botao-estoque'>
                                     <button className='button-search'>Buscar</button>
                                </div>
                            </div>
                            <ModalEstoque isOpen={openModal} closeModal={FechaModal} />
                            <div className='botao-estoque'>
                                 <button onClick={AtivaModal} className='new-product'>+ Novo Produto</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-produtos'>
                    {dadosFiltrados.map((item) => (
                        <ItemEstoque
                            key={item.id_produto}
                            id={item.id_produto}
                            nome={item.ds_nome}
                            url={item.img_url}
                            disponivel={item.qntd_disponivel}
                            total={item.qntd_total}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
