import './Regras.css'

const Regras = () => (
    <div className="regras">
        <h2 className="regras__titulo">Regras</h2>
        <p className="regras__text">O foguete será construído pelos alunos a partir de duas ou mais garrafas pets de qualquer volume, que ficará
        presa numa base de lançamento também presa no chão, construída pelos alunos e terá como combustível somente a
        mistura, em qualquer proporção, de vinagre com concentração de 4% de ácido acético e bicarbonato de sódio
        (puro ou contido no fermento em pó). Pode-se construir foguetes de mais de um estágio. A reação química entre o
        vinagre e o bicarbonato de sódio deve ocorrer <span className='regras__text__highlight'>principalmente dentro do foguete e não na base de lançamento</span>. A base
        pode conter, <span className='regras__text__highlight'>temporariamente</span>, somente o <span className='regras__text__highlight'>ácido acético que será transferido para o foguete</span>. A base não pode conter
        mais ácido acético do que será transferido para o foguete.
        </p>
    </div>
)

export default Regras