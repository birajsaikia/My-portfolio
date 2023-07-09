import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <div style={{backgroundColor: 'rgb(237, 243, 237)',display: "inline-flex", width: '101%', height: '660px', marginLeft: "-5px" , marginTop: '-7px'}}>
        <div style={{width: '40%', margin: '0 0 0 15%'}}>
            <div style={{marginTop: '50px', height: "60px"}}></div>
            <h1 style={{marginTop: '60px'}}>Hey, I am Biraj Jyoti<br></br> Saikia</h1>
            <h3 style={{marginTop: '40px'}}>
                <Typewriter
                options={{
                strings: ["A Developer", "A Designer", "A Creator"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
                }}
            /></h3>
            <div style={{display: 'inline-flex',marginTop: '50px', height: '70px', width: '200px', borderRadius: '20px', backgroundColor:'white'}}><h4 style={{marginLeft: '20px'}}>+20 <br></br>project done</h4></div><br></br>
            <div style={{display: 'inline-flex',alignItems: 'center',marginTop: '50px', height: '70px', width: '200px', borderRadius: '20px', backgroundColor:'white'}}><h4 style={{marginLeft: '20px'}}>Contect <br></br><a href='birajjyo2@gmail.com'>birajjyo2@gmail.com</a></h4></div>
        </div>
        
        <div style={{width: "50%"}}>
          <img src='https://media.licdn.com/dms/image/D5603AQHezX0ox8m-0Q/profile-displayphoto-shrink_800_800/0/1671893962063?e=2147483647&v=beta&t=bTky2BK69n94o_ROKfNT_A_X2QlMiTFyul268BwEbv4' style={{marginTop: '50px', borderRadius: '50%', border: '2px solid black', marginTop: "20vh"}} width={400}></img>
        </div>
    </div>
  )
}

