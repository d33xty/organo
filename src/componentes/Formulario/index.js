import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, aoCadastrarNovoTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    const [novoTimeNome, setNovoNome] = useState('');
    const [novoTimeCor, setNovaCor] = useState('#000000');

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    tipo={'text'}
                    classe={'texto'}
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    tipo={'text'}
                    classe={'texto'}
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto
                    tipo={'text'}
                    classe={'texto'} 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCadastrarNovoTime({nome:novoTimeNome, cor: novoTimeCor})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto
                    tipo={'text'}
                    classe={'texto'}
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time '
                    valor={novoTimeNome}
                    aoAlterado={valor => setNovoNome(valor)}/>
                <CampoTexto
                    label={'Cor'}
                    tipo={'color'}
                    classe={'cor'}
                    valor={novoTimeCor}
                    aoAlterado={valor => setNovaCor(valor)}
                />
                <Botao texto='Criar time' />
            </form>
        </section>
    )
}

export default Formulario