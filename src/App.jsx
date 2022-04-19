import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Frameworks from './components/frameworks/Frameworks';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import GameableIntro from './components/gameable/GameableIntro';

import {useState} from 'react';

import './app.scss';
import GameableTechnicalDesign from './components/gameable/GameableTechnicalDesign';
import GameableTechnologies from './components/gameable/GameableTechnologies';
import GameableRequirements from './components/gameable/GameableRequirements';
import GameableQuestions from './components/gameable/GameableQuestions';

function App(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className='sections'>
                <Intro/>
                <GameableIntro/>
                <GameableTechnologies/>
                <GameableRequirements />
                <GameableTechnicalDesign/>
                <GameableQuestions/>
                <Portfolio/>
                <Frameworks/>
                <Contact/>
            </div>
        </div>
    );
}
export default App;