import React from 'react'
import '../Content/Education .css'

export default function () {
  return (
    <div className='main1'>
      {/* <h1><u>Education</u></h1> */}
      <div className='Main2'>
      <h1><u>Education</u></h1>
      <div className='institute'>
          <div className='institutename'>
            <h2 >Full Stack Web</h2>
            <h2 style={{marginTop: '-15px'}}> Development</h2>
            <h5 style={{marginTop: '0px'}}>Coding Ninjas</h5>
            <h4 style={{marginTop: '0px'}}>oct 2022 - july 2023</h4>
          </div>
          <div className='institutename'>
            <h2> Bachelor of Scince</h2>
            {/* <h2 style={{marginTop: '0px'}}> Development</h2> */}
            <h5 style={{marginTop: '0px'}}>Mangaldoi Collage</h5>
            <h4 style={{marginTop: '0px'}}>June 2022</h4>         
          </div>
          <div className='institutename'>
            <h2> Senior Secondary</h2>
            {/* <h2 style={{marginTop: '0px'}}> Development</h2> */}
            <h5 style={{marginTop: '0px'}}>Deomornoi HS School</h5>
            <h4 style={{marginTop: '0px'}}>2022</h4> 
            <h4 style={{marginTop: '0px'}}>Percentage - 57.8%</h4>         
          </div>
          </div>
      </div>
      
    </div>
  )
}

