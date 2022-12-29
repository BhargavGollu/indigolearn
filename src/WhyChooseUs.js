import React from 'react'
import {TbBulb} from "react-icons/tb" 
import{GiTeacher} from "react-icons/gi"
import {SlBookOpen} from "react-icons/sl"
import {MdOutlineWorkOutline} from "react-icons/md"
import {CiTimer} from "react-icons/ci"

import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  return (
    <div className='main-section'>
        <h1 className='heading' >Why Choose Us?</h1>
        <hr className='line'/>
        <div className='big-card-container'>
            <div className='big-card'>
                <TbBulb  className = "image" />
                <h2 className='card-heading'>Expert Faculty</h2>
                <p className='card-para'>Our Faculty are subject matter expertise with practical experience. They believe in #StudentFirst principle</p>
            </div>
            <div className='big-card'>
                <GiTeacher  className = "image" />
                <h2 className='card-heading'>Complete Success Package </h2>
                <p className='card-para'>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests, Webinars.</p>
            </div>
            <div className='big-card'>
                <MdOutlineWorkOutline  className = "image" />
                <h2 className='card-heading'> Placements</h2>
                <p className='card-para'>Resume building workshops, mock interviews and placement drives will help you impress the top employers and get the dream job.</p>
            </div>
        </div>
        <div className='small-card-container'>
            <div className='small-card'>
                <h2>Levels</h2>
                <div className='small-card-mini'>
                    <SlBookOpen/>
                    <h3>Three(13 pages)</h3>
                </div>
            </div>
            <div className='small-card'>
                <h2>Duration</h2>
                <div className='small-card-mini'>
                    <CiTimer/>
                    <h3>6-30 months</h3>
                </div>
            </div>
            <div className='small-card'>
                <h2>Exams</h2>
                <div className='small-card-mini'>
                    <SlBookOpen/>
                    <h3>Quarterly(online)</h3>
                </div>
            </div>
            <div className='small-card'>
                <h2>Exemptions</h2>
                <div className='small-card-mini'>
                    <SlBookOpen/>
                    <h3>Upto 9 papers</h3>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default WhyChooseUs