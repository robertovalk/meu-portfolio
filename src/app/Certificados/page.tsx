import "./certificados.scss"
import Link from "next/link"




export default function Certificados () {
    return (
        <div className="container-certificados">
            <div className="certificados-head">
                <h1>Certificados</h1>
                <Link href="/">← Home</Link>
            </div>

            <div className="certificadosmain">
                <ul className="certificadosLista">
                    <li className="certificadosItem">
                        <Link href="https://cursos.alura.com.br/degree/certificate/dc15d35a-9aa5-4d9b-929b-c6499bcc9f6e?lang=pt_BR" target="_blank">
                            Formação Front-End (Alura)
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://cursos.alura.com.br/certificate/3a10c025-1ba2-41a4-9e09-71747a995cd7?lang=pt_BR" target="_blank">
                            Bootstrap 4
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://cursos.alura.com.br/certificate/1f48b99a-12b2-419d-a007-be21b26f4fe4?lang=pt_BR">
                            CSS Grid: Simplificando Layouts
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://cursos.alura.com.br/certificate/7218fee0-51fb-4e8f-9c84-366a3e421ac0?lang=pt_BR">
                            Dispondo Elementos com FlexBox e Grid
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://cursos.alura.com.br/certificate/03b4098a-717f-4e21-8440-e15c17e46480?lang=pt_BR">
                            Layouts Responsivos
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://oceanbrasil.com/certificado/clhh0srmo000el608fezzau4z_3620">
                            Design Thinking Hands on de Imersão
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://oceanbrasil.com/certificado/clh6gszjn0007mk0875x2ll7p_3551">
                            Kanban
                        </Link>
                    </li>
                    <li className="certificadosItem">
                        <Link href="https://oceanbrasil.com/certificado/clgw5xa7o000cl908sttl61vv_3548">
                            Introdução ao Desenvolvimento Ágil
                        </Link>
                    </li>

                    <li className="certificadosItem">
                        <Link href="https://oceanbrasil.com/certificado/clgxqytb2000akx08s4jj5sp0_3549">
                            Agile, Lean e Design Thinking
                        </Link>
                    </li>

                    <li className="certificadosItem">
                        <Link href="https://oceanbrasil.com/certificado/clgzehacy0009l4083qnze5f8_3550">
                            Framework Scrum
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}