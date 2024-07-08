import React, { useState } from 'react'
import './OurTeam.css'
import {data} from './dataTeam'
import comp from './comp'
function OurTeam() {
    const [name, setName] = useState('Ted Mosby')
    const [desc, setDesc] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi impedit veniam ad earum sed sapiente cupiditate totam consequuntur molestias dolorum?')
    const [img, setImg] = useState('https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')
    const [visible, setVisible] = useState('hidden')
    
    function mouseEnter(event, prop){
        event.target.style.color = 'orange'
        // console.log(prop);
        const obj = data.find(item => item.id == prop)
        // console.log(obj);
        setName(obj.text)
        setImg(obj.img)
        setDesc(obj.description)
        setVisible('visible')
    }
    function mouseLeave(e){ 
        setName('Ted Mosby')
        setDesc('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi impedit veniam ad earum sed sapiente cupiditate totam consequuntur molestias dolorum?')
        setImg('https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')
        setVisible('hidden')    
        e.target.style.color = ''
    }
  return (
    <>
    <div className="heading">
    <h1 className='main-heading font-class'>Our Team</h1>
  </div>
  <div className="content-team">
    <div className="names">
    <p className='font-class name-1 att' onMouseEnter={(e)=>{mouseEnter(e, "1")}} onMouseLeave={mouseLeave}>Ted Mosby</p>
    <p className='font-class name-2 att' onMouseEnter={(e)=>{mouseEnter(e, "2")}} onMouseLeave={mouseLeave}>Tracy McConnell</p>
    <p className='font-class name-3 att' onMouseEnter={(e)=>{mouseEnter(e, "3")}} onMouseLeave={mouseLeave}>Lilly Aldrin</p>
    <p className='font-class name-4 att' onMouseEnter={(e)=>{mouseEnter(e, "4")}} onMouseLeave={mouseLeave}>Marshall Eriksen</p>
    <p className='font-class name-5 att' onMouseEnter={(e)=>{mouseEnter(e, "5")}} onMouseLeave={mouseLeave}>Robin Scherbatsky</p>
    <p className='font-class name-6 att' onMouseEnter={(e)=>{mouseEnter(e, "6")}} onMouseLeave={mouseLeave}>Barney Stinson</p>
    </div>
    <div className="info font-class" >
        <img  className='profile-img'src={img} alt={name}/>
        <div className="f-box">
        <p className='profile-name'>{name}</p>
        <p className='profile-desc'>{desc}</p>
        </div>
    </div>
  </div>
  </>
  )
}

export default OurTeam