import React from 'react';
import {Link} from "react-router-dom";
import '../Content/Navber.css'

export default function Navber() {
  return (
    <>
    <div className='nav' >
        <h2 style={{margin: '27px 0 0 300px'}}>portfolio</h2>
        <div style={{display: 'inline-flex', margin: '30px 50px 0 200px', textDecoration: 'none'}}>
            <Link style={{margin: '0 50px 0 0'}} to='/'>Home</Link>
            <Link style={{margin: '0 50px 0 0'}} to='/education'>Education</Link>
            <Link style={{margin: '0 50px 0 0'}} to='/work'>Work</Link>
            <Link style={{margin: '0 50px 0 0'}} to='/tech'>Tech</Link>
            <Link style={{margin: '0 50px 0 0'}} to='/contect'>Contect</Link>
        </div>
        
    </div>
    <hr style={{width: '100%', backgroundColor: 'red'}}></hr>
    </>
  )
}
