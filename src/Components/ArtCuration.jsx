import React from 'react'
import './ArtCuration.css'
import { NavLink } from 'react-router';
export default function ArtCuration() {
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
                <img src="Art Curation Icons 02.svg" alt="" className='cam' />

            </div>
            <div className='middle_container'>
                <div className='punchline'>
                    "V take art where it belongs, to the people.” - Vernita Verma
                    <div>
                        <img src="Vector 5.png" alt="" className='vector-5' />
                    </div>
                </div>
                <div className='in_between_middle'>
                    <div onMouseEnter={update} onMouseLeave={update}>
                        <img src="art.png" alt="" className='between_img' />
                    </div>

                    <div className='content'>
                        Art isn’t meant to sit on distant walls - it’s  <br />
                        meant to breathe, to travel, to belong. <br />  Through every festival, every performance,
                        <br /> and every gathering, we help stories find
                        <br />their stage and their people. <br />
                        V curates: <br />
                        <ul>
                            <li>Art Festivals</li>
                            <li>Live Performances</li>
                            <li>Community Events</li>
                            <li>Cultural Storytelling</li>

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
                <img src="Art Curation Icons 03.svg" alt="" className='right-cam1' />
                <img src="Art Curation Icons 01.svg" alt="" className='right-cam2' />
                <img src="Art Curation Icons 04.svg" alt="" className='right-cam3' />
            </div>
        </div>
    )
}
