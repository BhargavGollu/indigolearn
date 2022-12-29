import React, {useState} from 'react'

import ModalComponent from './ModalComponent'

import "./KickoffYourJourney.css"

const KickoffYourJourney = () => {
    const [data, setData] =useState({number:"", email:""})

    const changeHandler =e =>{
        setData({...data,[e.target.name]: e.target.value})
    }

    const {number, email}= data
  return (
    
    <div className='kick-off-main'>
        <div className='kick-off-first-container'>
        <h1 className='kick-off-heading'>Kick off your ACCA Prep journey with <br/> IndigoLearn</h1>
        <p className='kick-off-para'>Sign-in and get instant acccess to our FREE Courses</p>
        <div className='button-text-container'>
            <p>Silver Learning <br/>Partner</p>
            <p className='ACCA'>ACCA</p>
        </div>
    </div>

    <div className='second-container'>
        <form >
            <h4 className='form-heading'>Aspiring to be an ACCA? get in touch with us</h4>
            <input  onChange ={changeHandler} name="number" value={number}className='input' type="text" placeholder='  Phone Number' /><br/>
            <input  className="input"  name="email" value={email}type="password" placeholder='  email'/><br/>
            <select className='input'>
                <option selected >Current Qualification</option>
                <option>CA </option>
                <option>Bcom</option>
                <option>CS</option>
                <option>CMA</option>
                <option>Others</option>
            </select><br/>
            <select className='input'>
                <option>Interested in</option>
                <option>ACCA Level I</option>
                <option>ACCA Level II</option>
                <option>ACCA level III</option>
            </select>   
        </form>
        <ModalComponent/>
    </div>

    </div>
    
  )
}

export default KickoffYourJourney
