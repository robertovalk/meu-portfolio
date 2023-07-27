import "./social.scss"
import {GitIcon} from "../icons/git-icon";
import {LinkedIcon} from "../icons/linked-icon";
import { InstaIcon } from "../icons/insta-icon";
import Image from "next/image";

export function SocialBtns () {
    return (
        <div className='Social'>
            <a href="https://github.com/robertovalk">
                <GitIcon/>
            </a>
            <a href="https://www.linkedin.com/in/roberto-falc%C3%A3o-5536a71b0/">
                <LinkedIcon/>
            </a>
            <a href="https://www.instagram.com/robertovalk/">
                <InstaIcon/>
            </a>
            <a href="https://wa.me/5592982592715?text=Olá%20gostei%20do%20seu%20portfólio" target="_blank">
                <Image
                src="/wpp.svg"
                alt="whatsapp Logo"      
                width={25}
                height={25}
                priority
                />
            </a>
        </div>
    )
}