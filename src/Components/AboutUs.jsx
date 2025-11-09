import React, { useRef, useState, useEffect } from 'react'
import './AboutUs.css'

function AboutUs() {
    const [animating, setAnimating] = useState(false)
    const timerRef = useRef(null)
    const ANIM_DURATION = 5000

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    const handleCircleClick = () => {
        if (animating) return
        setAnimating(true)
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            setAnimating(false)
            timerRef.current = null
        }, ANIM_DURATION)
    }

    return (
        <div className='main-cont'>
            <div className='left-cont'>
                <div className='heading1'>A montage of familiar faces and names.</div>
                <div className='heading2'>
                    Some stories come from the biggest names. Others begin with bold, rising voices.
                    <p className='text'>
                        We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
                    </p>
                </div>

                <div>
                    <div className='image-wrapper'>
                        <img src="/photo1.png" alt="" className='img1' />
                        <img src="/photo3.png" alt="" className='img2' />
                        <img src="/photo2.png" alt="" className='img3' />
                    </div>
                </div>
            </div>

            <div className='right-cont'>
                <div className='rightHeading'>
                    Every project is more than just a brief - it’s a new chapter waiting to be written.
                    Together, we've crafted tales that inspire, connect, and endure.
                </div>
                <div className='logos'>
                    <img src="/OBJECTS.png" alt="" className='obj' />
                    <img
                        src="/Group 10.png"
                        alt=""
                        className={`circle ${animating ? 'animate' : ''}`}
                        onClick={handleCircleClick}
                        role="button"
                        aria-pressed={animating}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
