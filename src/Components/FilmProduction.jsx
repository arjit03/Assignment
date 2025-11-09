import React from 'react'
import { NavLink } from 'react-router'
import './FilmProduction.css'
function FilmProduction() {
    const [hover, setHover] = React.useState(false);
    function update() {
        setHover(!hover);
    }
    return (
        <div className={hover ? 'main_container_off' : 'main_container'}>
            <div className='left_container'>

                <NavLink to='/services' >
                    <img src="Frame 2.png" alt="" className='back' />
                </NavLink>
                <img src="Camera 04.svg" alt="" className='cam' />

            </div>
            <div className='middle_container'>
                <div className='punchline'>
                    "Filmmaking is a chance to live many lifetimes." - Robert Altman
                    <div>
                        <img src="Vector 5.png" alt="" className='vector-5' />
                    </div>
                </div>
                <div className='in_between_middle'>
                    <div onMouseEnter={update} onMouseLeave={update}>
                        <img src="Frame 31.png" alt="" className='between_img' />
                    </div>
                    <div className='content'>
                        Who says films are just an escape? <br />
                        We see them as a way to live many lives - to <br /> feel, to explore, and to tell stories that stay.  <br /> And with each film, we carry new memories and new reasons to keep creating. <br />
                        V crafts: <br />
                        <ul>
                            <li>Documentaries</li>
                            <li>Corporate Videos</li>
                            <li>2D Animation Videos</li>
                            <li>3D Animation Videos</li>
                        </ul>
                    </div>
                </div>

                <div className='mid_btm'>
                    Explore Now
                    <br />
                    <img src="Arrow.svg" alt="" />

                </div>

            </div>
            <div className='right_container'>
                <img src="Camera 01.svg" alt="" className='right-cam1' />
                <img src="Camera 03.svg" alt="" className='right-cam2' />
                <img src="Camera 02.svg" alt="" className='right-cam3' />
            </div>
        </div>
    )
}

export default FilmProduction