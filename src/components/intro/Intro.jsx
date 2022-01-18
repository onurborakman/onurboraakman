import { useEffect, useRef } from 'react';
import {init} from 'ityped';

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
                <div className="imgContainer">
                    <img src="assets/onurboraakman.jpeg" alt=""/>
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Onur Bora Akman</h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src='assets/down.png' alt=''/>
                </a>
            </div>
        </div>
    )
}
