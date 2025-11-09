import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [rotating, setRotating] = useState(false)

    const handleRotate = () => {
        if (rotating) return
        setRotating(true)
        setTimeout(() => setRotating(false), 6000)
    }

    return (
        <>

            <div className='main-container'>
                <div className='image-container'>
                    <img
                        src="/Hero Mandala.png"
                        alt="Hero Mandala"
                        className={`Hero-Mandala ${rotating ? 'rotate' : ''}`}
                        onClick={handleRotate}
                    />
                    <img src="/VFilms Logo.png" alt="Logo" className='logo' />
                </div>

                <div className='inner-text-container'>
                    <div className='heading'>Varnan is where stories find their voice and form</div>
                    <div className='tagline'>Films . Brands . Art</div>
                    <div className='discription'>
                        Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them. <br />
                        Some begin in polished boardrooms, others in humble <br /> village squares.
                        But every story starts the same way - by <br />listening with intention. V believes it takes trust, patience, <br />and an eye for the unseen to capture what truly matters. <br />
                        V doesn’t just tell stories - V honors them.
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
