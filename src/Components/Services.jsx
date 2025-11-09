import React from 'react'
import FilmProduction from './FilmProduction'
import './FilmProduction.css'
import './Services.css'
import { NavLink } from 'react-router'
import Branding from './Branding'
import ArtCuration from './ArtCuration'
import './ArtCuration.css'
import './Branding.css'
function Services() {

    const [hover1, setHover1] = React.useState(false);
    const [hover2, setHover2] = React.useState(false);
    const [hover3, setHover3] = React.useState(false);
    // function updater() {
    //     setHover(!hover);
    // }
    // console.log(hover);
    return (
        <>
            {/* {(hover && <FilmProduction />)} */}
            <div className={`film-overlay ${hover1 ? 'visible' : ''}`}>
                {hover1 && <FilmProduction />}
            </div>
            <div className={`film-overlay ${hover2 ? 'visible' : ''}`}>
                {hover2 && <Branding />}
            </div>
            <div className={`film-overlay ${hover3 ? 'visible' : ''}`}>
                {hover3 && <ArtCuration />}
            </div>

            <div className={hover1 || hover2 || hover3 ? 'container off' : 'container'}>
                <div className='main-heading'>The storyboard reveals the breadth of our craft.
                    <div className='vec5'><img src="/Vector 5.svg" alt="" /></div>
                </div>
                <div className='image-container'>

                    <div className='pic1-cont'
                        onMouseEnter={() => setHover1(true)}
                        onMouseLeave={() => setHover1(false)}>
                        <img src="/pin1.png" alt="" className='pin1' />
                        <img src="/pic1.png" alt="" className='pic1'
                        //  onMouseEnter={updater} onMouseLeave={updater} 
                        />

                    </div>
                    <div className='pic2-cont' onMouseEnter={() => setHover2(true)}
                        onMouseLeave={() => setHover2(false)}>
                        <img src="/pin2.png" alt="" className='pin2' />
                        <img src="/pic2.png" alt="" className='pic2' />
                    </div>
                    <div className='pic3-cont' onMouseEnter={() => setHover3(true)}
                        onMouseLeave={() => setHover3(false)}>
                        <img src="/pin3.png" alt="" className='pin3' />
                        <img src="/pic3.png" alt="" className='pic3' />
                    </div>
                </div>
                <div> <img src="/footer_service.svg" alt="" className='foot' /></div>

            </div>
        </>
    )
}

export default Services