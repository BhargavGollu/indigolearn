import React from 'react'
import "./Eligibility.css"

const Eligibility = () => {
  return (
   
      <div>
        <h1 className='eligibility-main-heading'>ACCA - Eligibility</h1>
        <hr className='line'/>
        <div className='eligibility-container'>
            <h3 className='eligibility-heading'>To appear for the ACCA course examination a candidate should have</h3>
            <ul>
                <li className='tick-list'>Qualified the 10 + 2 exams</li>
                <li className='tick-list'>An aggregate of 65% in Mathematics / Accounts and English and a minimum of 50% in other subjects</li>
                <li className='tick-list'>Others can still register for the ACCA course with Foundation in Accountancy (FIA)</li>
            </ul>
        </div>
        
      </div>
    
  )
}

export default Eligibility
