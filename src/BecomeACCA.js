import React, {useState} from 'react'
import {RiUserSmileFill} from "react-icons/ri"
import {SlBookOpen} from "react-icons/sl"
import {BsFillStopwatchFill} from "react-icons/bs"
import {GiTeacher} from "react-icons/gi"
import ModalComponent from './ModalComponent'

import "./BecomeACCA.css"

const BecomeACCA = () => {

    const [data, setData] =useState({number:"", email:""})

    const changeHandler =e =>{
        setData({...data,[e.target.name]: e.target.value})
    }

    const {number, email}= data

  return (
    <div className='main-container'>
        <div className='first-container'>
            <h1 className='head'>Become ACCA in 18 months</h1>
            <p className='para'>Acquire globally recognized accountancy qualification, ACCA  (also  called as  Global CA), <br/>and get placed in top MNCs & Big4s. Begin ACCA  prep with 1FIN now.</p>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-name'>
                    <RiUserSmileFill/>
                    <p className='caption'>Registerd Users</p>
                    </div>
                    <p className='range'>248876</p>
                </div>
                <div className='card'>
                    <div className='card-name'>
                    <SlBookOpen/>
                    <p className='caption'>Courses Enrolled</p>
                    </div>
                    <p className='range'>65,897</p>
                </div>
                <div className='card'>
                    <div className='card-name'>
                    <BsFillStopwatchFill/>
                    <p className='caption'>Minutes Watched</p>
                    </div>
                    <p className='range'>2,678,579,980</p>
                </div>
                <div className='card'>
                    <div className='card-name'>
                    <GiTeacher/>
                    <p className='caption'>Faculty</p>
                    </div>
                    <p className='range'>8 Experts</p>
                </div>
            </div>
            <div className='button-container'>
                <button className='button'>Download Broucher</button>
                <div className='button-text-container'><p>Silver Learning <br/>Partner</p>
                <p className='ACCA'>ACCA</p></div>
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

export default BecomeACCA