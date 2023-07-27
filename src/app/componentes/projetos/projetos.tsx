import "./projetos.scss"
import Link from "next/link"
import Image from "next/image"

export function Projetos(){
    return (
        <>
        <h3>Projetos</h3>

        <div>
            <ul className="container-links">
                <li className="lista-links">
                    
                    <Link href="https://fiapotec.com.br/#home">
                        FIAPOTEC
                    </Link>
                </li>
                <li className="lista-links">
                    
                    <Link href="https://robertovalk.github.io/Pokedex/">
                    Pokedex
                    </Link>
                </li>
                <li className="lista-links">
                    
                    <Link href="https://meteora-next-bootstrap.vercel.app/">
                        Meteora - Alura Challenge
                    </Link>
                </li>
                <li className="lista-links">
                    
                    <Link href="https://robertovalk.github.io/AluraBooks/">
                        Alura Books
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}