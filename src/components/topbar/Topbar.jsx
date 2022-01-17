import "./topbar.scss";
import {Phone, Email, LinkedIn, GitHub} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Onur Bora Akman</a>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>+1(951)406-9472</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>onurboraakman@hotmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <a href="https://www.linkedin.com/in/onurborakman/">onurborakman</a>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <a href="https://github.com/onurborakman">onurborakman</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>  
        </div>
    )
}
