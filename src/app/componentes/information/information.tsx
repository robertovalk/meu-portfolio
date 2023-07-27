import "./information.scss"
import Link from "next/link"

export function Info() {
    return (
        
        <div className="Info">
            <h3>Educação</h3>
            <span className="certificados-info">
                Formação Front-End (Alura)

                <Link href="/Certificados">Certificados</Link>
            </span>
            <h3>Idiomas</h3>
            <div className='languages-info'>
                <span>português</span>
                <span>inglês</span>
            </div>
        </div>
      
    )
}