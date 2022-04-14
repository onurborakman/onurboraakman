import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href='#gameable'>Gameable</a>
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
