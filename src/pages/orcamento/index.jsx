import { useState } from 'react';
import './index.scss';
import Espaco from '../../components/input';
import axios from 'axios';
import { API_URL } from '../../api/constants';

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
  const [data, setData] = useState('')
  

  const [errorNome, setErrorNome] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');
  const [errorDescricao, setErrorDescricao] = useState('');
  const [errorOrcamento, setErrorOrcamento] = useState('');

  function validarEtapa1() {
    let valid = true;
    if (!nome) {
      alert('Nome é obrigatório, por favor digite novamente')
      valid = false;
    } else {
      setErrorNome('');
    }

    if (!to || !/\S+@\S+\.\S+/.test(to)) { 
      alert('Email invalido, por favor digite novamente')
      valid = false;
    } else {
      setErrorEmail('');
    }

    if (!telefone) {
      alert('Telefone invalido, por favor digite novamente')
      valid = false;
    } else {
      setErrorTelefone('');
    }

    return valid;
  }

  function validarEtapa2() {
    let valid = true;

    if (!descricao) {
      alert('Descriçao é obrigatoria, por favor digite novamente')
      valid = false;
    } else {
      setErrorDescricao('');
    }

    if (!orcamento|| /\d+/.test(orcamento)) {
      alert('Orçamento é obrigatoria, por favor digite novamente')
      valid = false;
    } else {
      setErrorOrcamento('');
    }
    if (!data) {
      alert('Data é obrigatoria, por favor selecione novamente')
      valid = false;
    } else {
      setErrorOrcamento('');
    }

    return valid;
  }
 

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
      let token = localStorage.getItem('TOKEN');
      let resp = axios.post(`${API_URL}/email`, body,{
        headers: { 'x-access-token': token }})
  
  } 



  

  

  return (
    <div className='page-orcamento'>
      <h1>Faça seu orçamento</h1>
      <div className='container-retangulo'>
        <img className='prisma' src='./assets/images/orcamento/retangulo.png' alt='' />
        <div className='retangulo'>
          <img src='./assets/images/carta.png' alt='' />
          <div className='form'>
            <form action='' className='form'>
                {visibilidadeInput == 1 && (
                  <div className='form'>
                      <input name="" id="" cols="30" rows="10" onChange={(e)=>setNome(e.target.value)} placeholder={placeholder1}></input>
                      {errorNome && <p className="error">{errorNome}</p>}

                      <input type="text" name="" id="" placeholder={placeholder2} onChange={(e)=>setTo(e.target.value)}/>
                      {errorEmail && <p className="error">{errorEmail}</p>}

                      
                      <input type="text" name="" id="" placeholder={placeholder3} onChange={(e)=>setTelefone(e.target.value)}/>
                      {errorTelefone && <p className="error">{errorTelefone}</p>}
                      
                  </div>
                )}
                {visibilidadeInput == 2 && (
                  <div className='form'>
                      <textarea name="" id="" cols="30" rows="10" placeholder={placeholder4}onChange={(e)=>setDescricao(e.target.value)} style={{height:'20vh'}}></textarea>
                      <input type="text" name="" id="" onChange={(e)=>setOrcamento(e.target.value)}  placeholder={placeholder5} />
                      <input type="date" name="" id="" onChange={(e)=>setData(e.target.value)} placeholder={placeholder6} />
                  </div>
                )}
            </form>

            <div className='botoes'>
             

              {visibilidadeInput == 1 && (
                <div className='botoes'>
                <button onClick={() => {
                  if (validarEtapa1()) setVisibildiadeInput(2);
                }}>Próximo</button>
              </div>
              )}
              {visibilidadeInput == 2 && (
                <div className='botoes'>
                  <button onClick={()=>setVisibildiadeInput(1)}>Voltar</button>
                  <button onClick={() => {
                  if (validarEtapa2()) enviaEmail();
                }}>Continuar</button>
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
        <img className='prisma' src='./assets/images/orcamento/retangulo.png' alt='' />
      </div>
    </div>
  );
}
