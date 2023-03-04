import './Sobre.css'

const Sobre = () => (
    <div className="sobre">
        <img src="public\AngloRockets.png" alt="" />
        <div>
            <h2 className="sobre__titulo">Sobre</h2>
            <p className="sobre__text">Essa é a página do time Anglo para a <a className='sobre__text__highlight' target='_blank' href="http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=29&pag=conteudo">Mostra Brasileira de foguetes (MOBFOG)</a>, uma olímpiada experimental de lançamento de foguetes! Acompanhe o desenvolvimento dos nossos foguetes, bases, nossos testes e lançamentos!</p>
        </div>
    </div>
)

export default Sobre