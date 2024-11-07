import './index.scss';

import { useState } from 'react';
import axios from 'axios';

export default function ModalEstoque({ isOpen, closeModal}) {
    
    let [nome, setNome] = useState("")
    let [url, setUrl] = useState("")
    let [qntd, setQntd] = useState("")
    let [qntdTol, setQntdTol] = useState("")

    if (!isOpen) {
        return null;
    }


    async function FuncCriar(){
        let body = {
            "nome":nome,
            "url":url,
            "disponivel": qntd,
            "total": qntdTol
        }
        let resp = axios.post('http://localhost:3010/produtos', body)
        
        alert("Novo produto cadastrado com sucesso")
    }

    function fechaModalCad(){
        closeModal()
        FuncCriar()
    }


    return (
        <div className='modal-Estoque' onClick={closeModal}>
      
            <div className='container-Estoque' onClick={(e) => e.stopPropagation()}>
               
                <div className='titulo'>
                    <h1>Cadastre um novo produto</h1>
                    <p>
                        Selecione nome, imagem e quantidade disponível/total do
                        produto para adicionar ao estoque.
                    </p>
                </div>

                <form>
                    <div className='container-input'>
                        <label htmlFor=''>Nome</label>
                        <input type="text" onChange={(e)=>setNome(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Url Imagem</label>
                        <input type="text" onChange={(e)=>setUrl(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Quantidade Disponível</label>
                        <input type="text" onChange={(e)=>setQntd(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Quantidade Total</label>
                        <input type="text" onChange={(e)=>setQntdTol(e.target.value)}/>
                    </div>
                </form>

                <button onClick={fechaModalCad}>Adicionar</button>
            </div>
        </div>
    );
}
