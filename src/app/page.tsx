import { Header } from "./componentes/header"
import { Experience } from "./componentes/experience/experience"
import { Info } from "./componentes/information/information"
import { SocialBtns } from "./componentes/social/social"
import { EmailIcon } from "../app/componentes/icons/email-icon"
import "./styles/home.scss"
import { Projetos } from "./componentes/projetos/projetos"



export default function Home() {
  return (
    <main className="container"> 

      <Header/>

      <Info/>

      <Experience/>
      
    
      <div className='buttons'>
        <SocialBtns/>
        <button className="primary-btn">
          <a className="link-email" href="mailto:rfalcaao@gmail.com?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=">Entre em contato</a>
          <EmailIcon/>
        </button>
      </div>
      <div className="projetos">
        <Projetos/>
      </div>

    </main>
  )
}
