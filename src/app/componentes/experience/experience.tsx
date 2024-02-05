import "./experience.scss"
import Image from "next/image"


export function Experience(){
    return (
        
        <div className= "experience">
                
            <h3>Experiência</h3>
            
            <p>Desenvolvedor Front-end com mais de 3 anos de experiência em desenvolvimento web, programando layouts voltados a metodologia Mobile First, para otimizar a experiência dos usuários de smartphones em single pages e landing pages, bem como atualização de informações e manutenção dos layouts, a fim de corrigir possíveis falhas na aplicação. </p>

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
                            <div className="experience-measure measure-2">
                                <span>1 ano</span>
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
                            <div className="experience-measure measure-2">
                                <span>1 ano</span>
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
