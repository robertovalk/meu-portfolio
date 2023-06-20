import Image from 'next/image'

import "./header.scss"


export function Header () {
    return (
        <div className='header'>

            <div>
                <h1>OI, eu sou o Roberto</h1>
                <h2>Desenvolvedor Front-end</h2>
            </div>

            <Image
                src="/perfil1.svg"
                alt="Vercel Logo"      
                width={384}
                height={490}
                priority
            />
        </div>   
    )
}