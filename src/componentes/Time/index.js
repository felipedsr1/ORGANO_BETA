import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = ({ time, colaboradores, aoDeletar}) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: 'white' }}>
            <input type='radio' className='input-cor' value={time.cor} onChange={evento => {
                
            }} />
            <h3 style={{ borderColor: time.cor = 'removeEventListener' }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar}  />)}
            </div>
        </section>

    )
}

export default Time