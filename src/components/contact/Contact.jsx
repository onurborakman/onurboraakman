import {Phone, Email, LinkedIn, GitHub} from "@material-ui/icons";
import './contact.scss';

export default function Contact() {

    return(
        <div className='contact' id='contact'>
            <div className='left'>
                <img src='assets/handshake.png' alt=''/>
            </div>
            <div className='right'>
                <h2>Contact</h2>
                <ul>
                    <li>
                        <Phone className="icon"/>
                        <span>+1(951)406-9472</span>
                    </li>
                    <li>
                        <Email className="icon"/>
                        <span>onurboraakman@hotmail.com</span>
                    </li>
                    <li>
                        <LinkedIn className="icon"/>
                        <a href="https://www.linkedin.com/in/onurborakman/">onurborakman</a>
                    </li>
                    <li>
                        <GitHub className="icon"/>
                        <a href="https://github.com/onurborakman">onurborakman</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}