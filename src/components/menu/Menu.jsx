import { useState } from 'react';
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>

                <li onClick={() => setDropdown(!dropdown)}>
                    <a href='/#'>{dropdown === false ? '▽' : '△'}Gameable</a>
                    {dropdown && <div className='dropdown'><ul>
                        <li><a href='#gameable-intro'>Intro</a></li>
                        <li><a href='#gameable-technologies'>Technologies</a></li>
                        <li><a href='#gameable-requirements'>Requirements</a></li>
                        <li><a href='#gameable-techicaldesign'>Technical Design</a></li>
                        <li><a href='#gameable-faq'>FAQ</a></li>
                    </ul></div>}
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#otherProjects'>Other Projects</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#frameworks'>Frameworks</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
