import { useState } from 'react';
import './index.scss';
import Espaco from '../../components/input';

export default function Orcamento() {
  // Estados
  const [placeholder1, setPlaceholder1] = useState('Nome Completo');
  const [placeholder2, setPlaceholder2] = useState('Digite seu email...');
  const [placeholder3, setPlaceholder3] = useState('Telefone + DDD');
  const [altura, setAltura] = useState(54);
  const [visibilidade, setVisibilidade] = useState(true);
  const [visibilidadeTexto, setVisibilidadeTexto] = useState(true);
  const [visibilidadetextarea, setVisibilidadeTextArea] = useState(false);
  const [visibilidadeP, setVisibilidadeP] = useState(false);
  const [visibilidadeOk, setVisibilidadeOk] = useState(true);
  const [visibilidadeContinuar, setVisibilidadeContinuar] = useState(true);
  const [visibilidadeInput, setVisibilidadeInput] = useState(false);
  const [visibilidadediv, setVisibilidadediv] = useState(true);

  // Funções de manipulação de estado
  function mudaPlaceholder() {
    setPlaceholder1('Descreva com clareza, cada uma das tatuagens que deseja fazer. A parte do corpo, tamanho, estilo.');
    setPlaceholder2('Qual seu orçamento para esse projeto?');
    setPlaceholder3('Selecione uma data');
    setAltura(100);
    setVisibilidade(false);
    setVisibilidadeP(true);
    setVisibilidadeContinuar(false);
  }

  function mudaPlaceholderContinuar() {
    setVisibilidadeTextArea(true);
    setVisibilidadeTexto(false);
    setAltura(100);
    setVisibilidade(true);
    setVisibilidadeP(true);
    setVisibilidadeContinuar(true);
    setVisibilidadeInput(true);
    setVisibilidadeOk(false);
    setVisibilidadediv(false);
  }

  function voltaPlaceholder() {
    setPlaceholder1('Nome Completo');
    setPlaceholder2('Digite seu email...');
    setPlaceholder3('Telefone + DDD');
    setAltura(54);
    setVisibilidade(true);
    setVisibilidadeP(false);
    setVisibilidadeContinuar(true);
    setVisibilidadeOk(true);
    setVisibilidadediv(true);
    setVisibilidadeInput(false)
   setVisibilidadeTextArea(false)
 
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
              <Espaco visibilidade={visibilidadetextarea} texto={placeholder1} altura={altura} />
              {visibilidadeInput || (
                <>
                  <input type='text' placeholder={placeholder2} />
                  <input type='text' placeholder={placeholder3} />
                </>
              )}
            </form>

            <div className='botoes'>
             
              {visibilidade || <button onClick={voltaPlaceholder}>Voltar</button>}
              {visibilidadeP || <button onClick={mudaPlaceholder}>Próximo</button>}
              {visibilidadeContinuar || <button onClick={mudaPlaceholderContinuar}>Continuar</button>}

              {!visibilidadediv && (
                <div className='container-coluna'>
                  <div className='texto-final'>
                    <p>Orçamento enviado com sucesso!</p>
                    <p>Fique atento ao seu email, entraremos em contato o quanto antes.</p>
                  </div>
                  <button onClick={voltaPlaceholder}>Ok</button>
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
