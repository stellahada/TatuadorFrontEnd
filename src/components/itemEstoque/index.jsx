import './index.scss';

import ModalItem from '../modalItem';
import { useState } from 'react';

export default function ItemEstoque({id,nome,url,disponivel,total}) {
    const [openModal, setOpenModal] = useState(false);

    function AtivaModal() {
        setOpenModal(true); 
    }

    function FechaModal() {
        setOpenModal(false); 
    }

    return (
        <div className='comp-itemEstoque' >
    
            <ModalItem isOpen={openModal} closeModal={FechaModal} idI={id} nomeI={nome} urlI={url} disponivelI={disponivel} totalI={total} />
            <div className='container-itemEstoque' onClick={AtivaModal}>
                <h1>{nome}</h1>
                <img src={url} alt="Item" />
                <div className='quantidade'>
                    <p>{disponivel}</p>
                    <p>/</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    );
}
