import React from 'react'
import './gameableRequirements.scss';

const GameableRequirements = () => {
  return (
      <div className='gameable-requirements' id='gameable-requirements'>
          <h1>Gameable - Requirements</h1>
          <div className='container'>
            <div>
                <h2>Functional Requirements</h2>
                <ul>
                    <li>React Frontend Application
                        <ul>
                              <li>Login</li>
                              <li>Registration</li>
                              <li>Authentication</li>
                              <li>Admin Console</li>
                              <li>Profile/Edit Profile</li>
                              <li>Feedback</li>
                              <li>Match-Up Function</li>
                        </ul>
                    </li>
                    <li>Spring Boot Backend Application
                        <ul>
                              <li>User API</li>
                              <li>Game API</li>
                              <li>Questions API</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Non-Functional Requirements</h2>
                <ul className='nonfunctional'>
                    <li>Availability</li>
                    <li>Flexibility (So Gameable is a tool instead of competition)</li>
                    <li>Disaster Recovery</li>
                </ul>
            </div>
          </div>
    </div>
  )
}

export default GameableRequirements