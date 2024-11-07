import { useState } from 'react';
import './index.scss';
import Espaco from '../../components/input';
import axios from 'axios';

export default function Orcamento() {

  const [placeholder1, setPlaceholder1] = useState('Nome Completo');
  const [placeholder2, setPlaceholder2] = useState('Digite seu email...');
  const [placeholder3, setPlaceholder3] = useState('Telefone + DDD');
  const [placeholder4, setPlaceholder4] = useState('Descreva com clareza, cada uma das tatuagens que deseja fazer.A parte do corpo, tamanho, estilo');
  const [placeholder5, setPlaceholder5] = useState('Qual seu orçamento para esse projeto ?');
  const [placeholder6, setPlaceholder6] = useState('Selecione uma data');

  const [visibilidadeInput, setVisibildiadeInput] = useState(1)
  

  const [to,setTo] = useState('')
  const [subject,setSubject] = useState('')
  const [descricao,setDescricao] = useState('')
  const [nome,setNome] = useState('')
  const [orcamento, setOrcamento] = useState('')
  const [telefone, setTelefone] = useState('')
  


 

  async function enviaEmail(){
    setVisibildiadeInput(3)
      let body = {
          "to":to,
          "subject":subject,
          "body": {
            nome:nome,
            descricao:descricao,
            orcamento:orcamento,
            telefone:telefone
          }
      }
      let resp = axios.post('http://localhost:3010/email', body)
      
      alert(resp)
  
  } 



  

  

  return (
    <div className='page-orcamento'>
      <h1>Faça seu orçamento</h1>
      <div className='container-retangulo'>
        <img className='prisma' src='./assets/images/polygon 3.png' alt='' />
        <div className='retangulo'>
          <img src='./assets/images/carta.png' alt='' />
          <div className='form'>
            <form action='' className='form'>
                {visibilidadeInput == 1 && (
                  <div className='form'>
                      <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setNome(e.target.value)} placeholder={placeholder1}></textarea>
                      <input type="text" name="" id="" placeholder={placeholder2} onChange={(e)=>setTo(e.target.value)}/>
                      <input type="text" name="" id="" placeholder={placeholder3} onChange={(e)=>setTelefone(e.target.value)}/>
                  </div>
                )}
                {visibilidadeInput == 2 && (
                  <div className='form'>
                      <textarea name="" id="" cols="30" rows="10" placeholder={placeholder4}onChange={(e)=>setDescricao(e.target.value)}></textarea>
                      <input type="text" name="" id="" onChange={(e)=>setOrcamento(e.target.value)}  placeholder={placeholder5} />
                      <input type="text" name="" id="" placeholder={placeholder6} />
                  </div>
                )}
            </form>

            <div className='botoes'>
             

              {visibilidadeInput == 1 && (
                <div className='botoes'>
                  <button onClick={()=>setVisibildiadeInput(2)}>Proximo</button>
                </div>
              )}
              {visibilidadeInput == 2 && (
                <div className='botoes'>
                  <button onClick={()=>setVisibildiadeInput(1)}>Voltar</button>
                  <button onClick={enviaEmail}>Continuar</button>
                </div>
              )}
              {visibilidadeInput == 3 && (
                <div className='container-coluna'>
                  <div className='texto-final'>
                    <p>Orçamento enviado com sucesso!</p>
                    <p>Fique atento ao seu email, entraremos em contato o quanto antes.</p>
                  </div>
                  <button onClick={()=>setVisibildiadeInput(1)}>Ok</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <img className='prisma' src='./assets/images/polygon 3.png' alt='' />
      </div>
    </div>
  );
}
