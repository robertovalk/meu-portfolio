import "./social.scss"
import {GitIcon} from "../icons/git-icon";
import {LinkedIcon} from "../icons/linked-icon"
import { InstaIcon } from "../icons/insta-icon";

export function SocialBtns () {
    return (
        <div className='Social'>
            <a href="#">
                <GitIcon/>
            </a>
            <a href="#">
                <LinkedIcon/>
            </a>
            <a href="#">
                <InstaIcon/>
            </a>
            <a href="#">

            </a>
        </div>
    )
}