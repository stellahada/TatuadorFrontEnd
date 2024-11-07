import './index.scss'

export default function Comentario({nome, comentario}){
    return(
        <div className="comentario-geral">
            <h2>{nome}</h2>
            <p>
                {comentario}
            </p>
        </div>
    )
}