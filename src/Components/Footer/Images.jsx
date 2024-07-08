import igBlack from './Images/ig-black.png'
import igColor from './Images/ig-color.png'
import ytBlack from './Images/yt-black.png'
import ytColor from './Images/yt-color.png'
import xBlack from './Images/twitter-black.png'
import xColor from './Images/twitter-color.png'
import linkedinBlack from './Images/linkedin-black.png'
import linkedinColor from './Images/linkedin-color.png'
import whatsappBlack from './Images/whatsapp-black.png'
import whatsappColor from './Images/whatsapp-color.png'

import React, { useState } from 'react'
import './Images.css'
import {imgData} from './imgData.js'

function Images() {
  // const [label, setLabel] = useState('')
  const [ig, setIg] = useState(igBlack)
  const [x, setX] = useState(xBlack)
  const [whatsapp, setWhatsapp] = useState(whatsappBlack)
  const [linkedin, setLinkedin] = useState(linkedinBlack)
  const [yt, setYt] = useState(ytBlack)

  function mouseHoverIn(e, prop){
    // setId(prop)
    // console.log(label)
    if(prop == 'ig'){
     setIg(igColor)   
    }
    else if(prop == 'x'){
      setX(xColor)
    }
    else if(prop == 'linkedin'){
      setLinkedin(linkedinColor)
    }
    else if(prop == 'whatsapp'){
      setWhatsapp(whatsappColor)
    }
    else if(prop == 'yt'){
      setYt(ytColor)
    }
  }
  function mouseHoverOut(e, prop){
    if(prop == 'ig'){
      setIg(igBlack)   
     }
     else if(prop == 'x'){
       setX(xBlack)
     }
     else if(prop == 'linkedin'){
       setLinkedin(linkedinBlack)
     }
     else if(prop == 'whatsapp'){
       setWhatsapp(whatsappBlack)
     }
     else if(prop == 'yt'){
       setYt(ytBlack)
     }
  }
  return (
  <ul className='img-div'>
    <li onMouseEnter={(e)=>{mouseHoverIn(e, 'ig')}} onMouseLeave={(e) => mouseHoverOut(e, 'ig')}><img className='image-style ig-style'  src={ig} /></li>
    <li onMouseEnter={(e)=>{mouseHoverIn(e, 'yt')}} onMouseLeave={(e) => mouseHoverOut(e, 'yt')}><img className='image-style yt-style' src={yt} /></li>
    <li onMouseEnter={(e)=>{mouseHoverIn(e, 'x')}} onMouseLeave={(e) => mouseHoverOut(e, 'x')}><img className='image-style x-style' src={x} /></li>
    <li onMouseEnter={(e)=>{mouseHoverIn(e, 'whatsapp')}} onMouseLeave={(e) => mouseHoverOut(e, 'whatsapp')}><img className='image-style wapp-style' src={whatsapp} /></li>
    <li onMouseEnter={(e)=>{mouseHoverIn(e, 'linkedin')}} onMouseLeave={(e) => mouseHoverOut(e, 'linkedin')}><img className='image-style linkedin-style' src={linkedin} /></li>
</ul>
  )
}

export default Images