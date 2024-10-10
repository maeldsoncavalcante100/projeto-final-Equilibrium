import imgHome from '../../assets/mindfulness-animate.svg'
import './Home.modules.css'
function Home({ user }) {
    
    return (
        <main className="section-screen" id="home">
            <article className="left">
                <h1 className="reveal">Bem-vindo(a) ao  Equilibrium, <span>{user}!</span> Seu espaço para encontrar o equilíbrio que transforma.</h1>
            </article>
            <div className="right">
                <img className='img-principal' src={imgHome} />
            </div>
        </main>
    )
}

export default Home;