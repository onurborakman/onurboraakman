import { useEffect, useRef } from 'react';
import {init} from 'ityped';
import resume from './resume.pdf';

import './intro.scss'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Backend", "Frontend", "Full-Stack", "Web", "Software"],
        });
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='wrapper'>
                    <h1>Onur Bora Akman</h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                    <a href={resume} download="Onur Bora Akman - Resume">Download CV/Resume</a>
                </div>
                <a id="down-arrow" href="#portfolio">
                    <img src='assets/down.png' alt=''/>
                </a>
            </div>
            <div className='right'>
                <div className="imgContainer">
                    <img src="assets/onurboraakman.png" alt="" />
                </div>
            </div>
        </div>
    )
}
