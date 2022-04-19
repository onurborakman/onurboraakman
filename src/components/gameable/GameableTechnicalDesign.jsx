import React, { useState } from 'react'
import './gameableTechnicalDesign.scss';
import Modal from './Modal';

const GameableTechnicalDesign = () => {
    const [modal, setModal] = useState(false);
    const [selected, setSelected] = useState('');
  return (
      <div className='gameable-technicaldesign' id='gameable-technicaldesign'>
          <h1>Gameable - Technical Design</h1>
          <h4>Please Click on Diagrams to View Them</h4>
          <div className='container'>
              <button onClick={()=>{setModal(true);setSelected('ER Diagram')}}>ER Diagram</button>
              <button onClick={() => { setModal(true); setSelected('Physical Solution Design') }}>Physical Solution Design</button>
              <button onClick={()=>{setModal(true);setSelected('Logical Solution Design')}}>Logical Solution Design</button>
              <button onClick={() => { setModal(true); setSelected('Flowchart') }}>Flowcharts</button>
              <button onClick={()=>{setModal(true);setSelected('Sitemap')}}>Sitemap</button>
              <button onClick={() => { setModal(true); setSelected('Backend UML') }}>Backend UML</button>
              <button onClick={() => { setModal(true); setSelected('Frontend Component Diagram') }}>Frontend Component Diagram</button>
          </div>
          {modal && <Modal setModal={setModal} selected={selected}/>}
    </div>
  )
}

export default GameableTechnicalDesign