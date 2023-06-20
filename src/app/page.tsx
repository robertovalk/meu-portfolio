import { Header } from "./componentes/header"
import "./styles/home.scss"



export default function Home() {
  return (
    <main className="container"> 

      <Header/>

      <div>
        <div className='experience'>
          <h3>Experience</h3>
          <p>texto</p>
        </div>
        <div className='experience-time'>
          
        </div>

      </div>
      <div className="infos">
        <h3>languages</h3>
        <div className='languages-info'>
          <span>portugues</span>
          <span>ingles</span>
        </div>
        <h3>Education</h3>
        <span>Alura Alura Alura Alura Alura Alura</span>
      </div>
      <div className='buttons'>
        <div className='social'>

        </div>
        <button>Contato</button>
      </div>
    </main>
  )
}
