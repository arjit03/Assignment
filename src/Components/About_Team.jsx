import React from 'react'
import './About_Team.css'
import { NavLink } from 'react-router'
export default function About_Team() {
  return (
    <div className='img-container'>
      <div className='group-container'>
        <img src="Group 9.png" alt="" className='group-9' />
        <div className='btm-left'>
          <img src="Gate.svg" alt="" className='gate' />
          <span className='btm_vector'>
            <img src="Vector_btm.svg" alt="" className='vct_btm' />
            <span className='tag1'>Branding Experts</span>
          </span>
        </div>
      </div>
      <div className='group-2container'>
        <span className='tag2'>
          Film Makers
        </span>

        <img src="/Vector_top.svg" alt="" className='vec2' />
        <span className='tag3'>
          Art Curators
        </span>
        <span className='grp-container'>
          <img src="/Group 2.svg" alt="" className='grp2' />
          <img src="Vector_right.svg" alt="" className='vec3' />
        </span>
        <div className='tag4'>
          Take a closer look at the stories V bring to life.</div>
        <NavLink className={'portfolio'} to='/portfolio'>View Portfolio</NavLink>
      </div>

    </div >
  )
}
