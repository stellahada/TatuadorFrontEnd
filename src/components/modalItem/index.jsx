import './index.scss';

import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/constants';

export default function ModalItem({ isOpen, closeModal,idI, nomeI,urlI,disponivelI,totalI }) {
    let [nome, setNome] = useState(nomeI)
    let [url, setUrl] = useState(urlI)
    let [qntd, setQntd] = useState(disponivelI)
    let [qntdTol, setQntdTol] = useState(totalI)
    
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

    async function Alterar(){
        if(validar()){
            let body = {
                "nome":nome,
                "url":url,
                "disponivel": qntd,
                "total": qntdTol
            }
            let token = localStorage.getItem('TOKEN');
            let resp = axios.put(`${API_URL}/produto/`+idI, body,{
                headers: { 'x-access-token': token }})
            
            alert("Produto alterado cadastrado com sucesso")
        }
    }

    async function Deletar(){
        let token = localStorage.getItem('TOKEN');
        let resp = axios.delete(`${API_URL}/produto/`+idI,{
            headers: { 'x-access-token': token }})
        
        alert("Produto deletado com sucesso")
    }

    function alterarFecharModal(){
        Alterar()
        closeModal()
    }

    function deletarFecharModal(){
        Deletar()
        closeModal()
    }

    return (
        <div className='modal-Item' onClick={closeModal}>
      
            <div className='container-item' onClick={(e) => e.stopPropagation()}>
               
                <div className='titulo'>
                    <div className='texto'>
                        <h1>{nome}</h1>
                        <p>
                        Aqui você pode editar ou excluir seu produto.
                        </p>
                    </div>
                    <button onClick={deletarFecharModal}><img src="./assets/images/estoque/lixo.png" alt="" /></button>
                </div>

                <form>
                    <div className='container-input'>
                        <label htmlFor=''>Nome</label>
                        <input type="text" placeholder={nomeI} onChange={(e)=>setNome(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Url Imagem</label>
                        <input type="text" placeholder={urlI} onChange={(e)=>setUrl(e.target.value)}/>
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Quantidade Disponível</label>
                        <input type="text" placeholder={disponivelI} onChange={(e)=>setQntd(e.target.value)} />
                    </div>
                    <div className='container-input'>
                        <label htmlFor=''>Quantidade Total</label>
                        <input type="text" placeholder={totalI} onChange={(e)=>setQntdTol(e.target.value)}/>
                    </div>
                </form>
                <div className='botoes'>
                <button onClick={closeModal}>Cancelar</button>
                <button onClick={alterarFecharModal}>Alterar</button>
                </div>
                
            </div>
        </div>
    );
}
