import './index.scss'

export default function Espaco(props){
    return(
        <div className='component-Espaco'>
            
            <textarea
                hidden={props.visibilidade} 
                style={{
                     
                    height: props.altura, 
                    width: props.largura || '434px' 
                    
                }}  
                type="text" name="" id="" placeholder={props.texto}/>
        </div>
    )
}