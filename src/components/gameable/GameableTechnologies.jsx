import React from 'react'
import './gameableTechnologies.scss';
import ReactFooter from './assets/react2.png';
import SpringFooter from './assets/spring2.png';
import HerokuFooter from './assets/heroku.png';
import MongoFooter from './assets/mongodb.png';
import NodeFooter from './assets/node.png';

const GameableTechnologies = () => {
    return (
        <div className='gameable-technologies' id='gameable-technologies'>
            <h1>Gameable - Technologies and Tools Used</h1>
            <div className='container'>
                <div>
                    <section>
                        <h2>Frameworks</h2>
                        <ul>
                            <li>Spring Boot v2.5.6
                            </li>
                            <li>React v17.0.2
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <section>
                        <h2>Programming Languages</h2>
                        <ul>
                            <li>Java v11.0.11
                            </li>
                            <li>Javascript ES6
                            </li>
                            <li>Sass v1.49.9
                            </li>
                        </ul></section>
                </div>
                <div>
                    <section>
                        <h2>Database</h2>
                        <ul>
                            <li>MongoDB Atlas
                            </li>
                        </ul></section>
                </div>
                <div>
                    <section>
                        <h2>Cloud Platform</h2>
                        <ul>
                            <li>Heroku Cloud Platform
                            </li>
                        </ul></section>
                </div>
                <div>
                    <section>
                        <h2>Tools and Packages</h2>
                        <ul>
                            <li>Postman v9.0.8
                            </li>
                            <li>GIT - Github
                            </li>
                            <li>React Router DOM v6.2.1
                            </li>
                            <li>Axios v0.25.0
                            </li>
                            <li>Visual Studio Code
                            </li>
                        </ul></section>
                </div></div>
                <div className='footer'>
                    <img src={ReactFooter} alt='react'/>
                    <img src={SpringFooter} alt='react' />
                    <img src={MongoFooter} alt='react' />
                    <img src={NodeFooter} alt='node'/>
                    <img src={HerokuFooter} alt='react' />
                </div>
        </div>
    )
}

export default GameableTechnologies