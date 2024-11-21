import './index.scss';

import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/constants';

export default function ModalEstoque({ isOpen, closeModal}) {
    
    let [nome, setNome] = useState("")
    let [url, setUrl] = useState("")
    let [qntd, setQntd] = useState("")
    let [qntdTol, setQntdTol] = useState("")

    if (!isOpen) {
        return null;
    }


    function validar() {
        let valid = true;
        if (!nome) {
          alert('Nome é obrigatório, por favor digite novamente')
          valid = false;
        }
    
        if (!url ) { 
          alert('Url invalido, por favor digite novamente')
          valid = false;
        }
    
        if (!qntd || qntd > qntdTol || qntd < 0) {
          alert('Quantidade é obrigatório e deve ser maior que a total, por favor digite novamente.');
          valid = false;
        }
        if (!qntdTol || qntd < 0) {
            alert('Quantidade Total é obrigatória e deve conter apenas números, por favor digite novamente.');
            valid = false;
          }
    
        return valid;
      }

    async function FuncCriar(){
        if(validar()){
            let body = {
                "nome":nome,
                "url":url,
                "disponivel": qntd,
                "total": qntdTol
            }
            let token = localStorage.getItem('TOKEN');
            let resp = axios.post(`${API_URL}/produtos`, body,{
                headers: { 'x-access-token': token }})
            
            alert("Novo produto cadastrado com sucesso")
        }
        setNome('')
        setQntd('')
        setQntdTol('')
        setUrl('')
        
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
                        <input type="text"  onChange={(e)=>setNome(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Url Imagem</label>
                        <input type="text"  onChange={(e)=>setUrl(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Quantidade Disponível</label>
                        <input type="number" onChange={(e)=>setQntd(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Quantidade Total</label>
                        <input type="number" onChange={(e)=>setQntdTol(e.target.value)}/>
                    </div>
                </form>

                <button onClick={fechaModalCad}>Adicionar</button>
            </div>
        </div>
    );
}
