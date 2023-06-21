import { Header } from "./componentes/header"
import { Experience } from "./componentes/experience/experience"
import { Info } from "./componentes/information/information"
import { SocialBtns } from "./componentes/social/social"
import "./styles/home.scss"



export default function Home() {
  return (
    <main className="container"> 

      <Header/>

      <Experience/>
      
      <Info/>

      <div className='buttons'>
        <SocialBtns/>
        <button className="primary-btn">Contato</button>
      </div>
    </main>
  )
}
