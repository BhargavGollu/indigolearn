import React from 'react'
import "./WhatWillYouLearn.css"


const WhatWillyouLearn = () => {
  return (
    <div className='what-will-you-learn'>
      <h1>What will you Learn in ACCA</h1>
      <hr className='line'/>
      <div className='skills-card-container'>
      <div className='skills-card'>
        <h3 className='knowledge'>Knowledge Level</h3>
        <ul className='courses' >
        <li className='courses-items'>Business and Technology (BT)</li>
        <li className='courses-items' >Management Accounting (MA)</li>
        <li className='courses-items'>Financial Accounting (FA)</li>
        </ul>
        <h3 className='papers'>3 Papers</h3>
      </div>
      <div className='skills-card'>
        <h3 className='knowledge'>Skill Level</h3>
        <ul className='courses' >
        <li className='courses-items'>Corporate and Business Law (LW) </li>
        <li className='courses-items' >Performance Management (PM)</li>
        <li className='courses-items'>Taxation (TX)</li>
        <li className='course-items'>Audit and Assurance (AA)</li>
        <li className='course-items'>Financial Management (FM)</li>
        <li className='courses-items'>Financial Reporting (FR)</li>
        </ul>
        <h3 className='papers'>6 Papers</h3>
      </div>
      <div className='skills-card'>
        <h3 className='knowledge'>Professional Level</h3>
        <ul className='courses' >
        <li className='courses-items'>SBL - Strategic Business Leader</li>
        <li className='courses-items' >SBR - Strategic Business Reporting</li>
        <li className='courses-items'>Advanced Financial Management (AFM)</li>
        <li className='courses-items' >Advanced Performance Management (APM)</li>
        <li className='courses-items' >Advanced Taxation (ATX)</li>
        <li className='courses-items' >Advanced Audit and Assurance (AAA)</li>
        </ul>
        <h3 className='papers'>4 Papers</h3>
      </div>
      </div>
      
    </div>
  )
}

export default WhatWillyouLearn
