import React from 'react';
import './modal.scss';

import Physical from './assets/physical.png';
import PhysicalFooter from './assets/physicalfooter.png';
import Logical from './assets/logical.png';
import FlowchartBefore from './assets/flowbefore.png';
import FlowchartAfter from './assets/flowafter.png';
import Sitemap from './assets/sitemap.png';
import UML from './assets/uml.png';
import Component from './assets/component.png';
import ER from './assets/er.png';

const Modal = (props) => {
    const {setModal, selected} = props;
    const body = () => {
        if (selected === 'ER Diagram'){
            return <div><p>Below is the database design. Since Gameable uses MongoDB, it does not store structured data, that is why these models will be created in the backend and then will be inserted in order to be stored. The relations between the models can be seen on the diagram (one to many, many to many, etc.). </p><img src={ER} alt='ER Diagram'/></div>
        } else if (selected === 'Physical Solution Design'){
            return <div><p>In the client tier there are clients and the Uptime Robot for monitoring which monitors if the website is down or not. Clients will be seeing the frontend of the application which connects to the backend. Fronted and backend services will be hosted on Heroku Cloud Platform. Backend will be communicating with the MongoDB database that is on MongoDB Atlas. </p><img src={Physical} alt='Physical Solution Design' /><img src={PhysicalFooter} alt='Physical Footer'/></div>
        } else if (selected === 'Logical Solution Design'){
            return <div><p>On the diagram below, clients will be accessing the frontend of the Gameable application, which is the User Interface of the application, they will not even know about the backend services that the frontend is using. Layer by layer, the user interface will be asking and sending data to the business layer which takes place in the backend and the business layer will be calling the data access layer of the backend. Data access layer then will be reaching to the database in order to insert or retrieve data from the database. The diagram below also shows the technologies each layer is being powered by. </p><img src={Logical} alt='Logical Solution Design' /></div>
        } else if (selected === 'Flowchart'){
            return <div><p>Below, there are flowcharts of the Gameable application flow. Flowcharts are consisting of 2 parts: before login and after login. The before login flowchart simply explains the events that are happening or can happen before the authorization and the after login part shows the overview of behind the scenes of the main Gameable functionality.</p><img src={FlowchartBefore} alt='Flowchart Before' /><img src={FlowchartAfter} alt='Flowchart After' /></div>
        } else if (selected === 'Sitemap'){
            return <div><p>Below is the structure of the Gameable application. Red boxes mean that the result is a fail and the green boxes mean that the result is a success and redirects the user accordingly. It starts with the home page with no authorization and only lets the users access login and registration pages and in the event of a login being successful, the user gets authorized to access the rest of the application.</p><img src={Sitemap} alt='Sitemap' /></div>
        } else if (selected === 'Backend UML'){
            return <div><p>Below is the UML diagram for the Spring Boot backend where DTO (Data Transfer Object) is the final destination for the whole design since it is the object that is being sent as the response to the user. Other than DTO the main models that are interacting with the database are Game, User, Team and Personality models where rest of the models are being used as property to the main ones. DAOs (Data Access Objects) interact with the database and connect their responses to the Services and Services interact with the controllers to send return the response to the user.</p><img src={UML} alt='Backend UML' /></div>
        } else if (selected === 'Frontend Component Diagram'){
            return <div><p>Below is the Frontend Component Diagram for the React frontend of the Gameable application. Here we can easily see the connections between the parent and child components along with service components.</p><img src={Component} alt='Frontend Component Diagram' /></div>
        }
    }
  return (
    <div className='modal'>
        <div className='container'>
              <div className='title-button'><button onClick={() => setModal(false)}>X</button></div>
              <div className='title'><h1>{selected}</h1></div>
              <div className='body-container'>
                  <div className='body'>
                    {body()}
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Modal