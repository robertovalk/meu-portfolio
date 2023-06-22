import "./experience.scss"
import Image from "next/image"


export function Experience(){
    return (
        
        <div className= "experience">
                
            <h3>Experience</h3>
            
            <p>texto</p>

            <div className= "experience-time">
                <div className="exp">
                        <Image 
                            src="/react.svg"
                            alt="Vercel Logo"      
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-3">
                                <span>3 anos</span>
                            </div>
                        </div>
                </div>

                <div className="exp">
                        <Image
                            src="/ts.svg"
                            alt="Vercel Logo"      
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-3">
                                <span>3 Anos</span>
                            </div>
                        </div>
                </div>
    
                <div className="exp">
                    <Image
                        src="/js.svg"
                        alt="Vercel Logo"      
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>3 anos</span>
                        </div>
                    </div>
                </div>

                <div className="exp">
                    <Image
                        src="/java.svg"
                        alt="Vercel Logo"      
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>3 anos</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>   
    )  
}