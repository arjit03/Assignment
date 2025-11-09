import React from 'react'
import './Portfolio.css'
function Portfolio() {
    return (
        <div className='main'>
            <div className='left'>
                <img src="Cam Group.svg" alt="" />
            </div>
            <div className='middle'>
                <div className='heading1'>The Highlight Reel</div>
                <div className='heading2'>Watch the magic we've captured</div>
                <div className='filmContainer'>

                    <img src="Group 11.png" alt="" />
                    <img src="Rectangle 45.png" alt="" className='navLeft' />
                    <img src="Vector 10.png" className='vec10' alt="" />
                    <img src="Rectangle 44.png" alt="" className='navRight' />
                    <img src="Vector 9.png" alt="" className='vec9' />
                </div>
            </div>
            <div className='right'>
                <img src="Footer Vector.png" alt="" className='footer' />
            </div>
        </div>
    )
}

export default Portfolio