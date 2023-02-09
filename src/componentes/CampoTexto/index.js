import './campo-texto.css'

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, tipo, classe }) => {
    return (<div className={`campo campo-${classe}`}>
        <label>{label}</label>
        <input type={tipo} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default CampoTexto