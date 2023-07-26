import "./experience.scss"
import Image from "next/image"


export function Experience(){
    return (
        
        <div className= "experience">
                
            <h3>Experiencia</h3>
            
            <p>Sou desenvolvedor Front-end há 1 ano e meio, comecei com projetos simples usando apenas HTML e CSS. Com o tempo passei a implementar JS nos projetos, bem como frameworks css (Bootstrap). Hoje, consigo desenvolver projetos com Next.js.</p>

            <div className= "experience-time">
                <div className="exp">
                        <Image 
                            src="/react.svg"
                            alt="react Logo"      
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-1">
                                <span>3 meses</span>
                            </div>
                        </div>
                </div>

                <div className="exp">
                        <Image
                            src="/ts.svg"
                            alt="Ts Logo"      
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-1">
                                <span>3 meses</span>
                            </div>
                        </div>
                </div>
    
                <div className="exp">
                    <Image
                        src="/js.svg"
                        alt="Js Logo"      
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>1 ano</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>   
    )  
}