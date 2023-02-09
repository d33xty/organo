import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar,aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        onClick: favoritar,
        size: 25,
    }
    return (<div className="colaborador">
        <AiFillCloseCircle size={25} onClick={() => aoDeletar(colaborador.id)} className="deletar"/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                {colaborador.favorito ? <AiFillHeart {...propsFavorito} color={'red'}/> : <AiOutlineHeart {...propsFavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador