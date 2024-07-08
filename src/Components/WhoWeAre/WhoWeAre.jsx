import React from 'react'
import './WhoWeAre.css'
import teamPhoto from './team-photo.jpg'
import { Link } from 'react-router-dom'
function WhoWeAre() {
    return (
      <>
      <div className="heading">
        <h1 className='main-heading font-class'>Who we are</h1>
      </div>
      <div className="content font-class">
        <div className="box-1">
            <p>L
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolor atque sint fugiat praesentium reiciendis magnam sunt nisi doloremque nesciunt aliquid reprehenderit, tenetur tempora, odit cupiditate nobis numquam soluta ipsa!
            </p>
        </div>
        <div className="box-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium, labore voluptatum nemo similique dolores laudantium aperiam cupiditate libero tempore veniam blanditiis tempora aut eos culpa quia saepe earum, magni cumque voluptate molestias expedita ullam architecto sequi! Quae, veritatis id.</p>
        </div>
        <div className="box-3">
            <img src={teamPhoto} alt='team phot'/>
        </div>
      </div>
      <div className="buttons font-class">
        <p className='left-arrow'><Link className='text-link' to = '/home'>&larr; Main</Link></p>
        <p className='right-arrow'><Link className='text-link' to = '/whatwedo'>What we do &rarr;</Link></p>
      </div>
      </>
  )
}

export default WhoWeAre