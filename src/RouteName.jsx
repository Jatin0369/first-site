import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import OurTeam from './Components/OurTeam/OurTeam';
function RouteName() {
  return (
    <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/home' element = {<Home />} />
        <Route path ='/contact' element = {<Contact/>} />
        <Route path ='/whoweare' element = {<WhoWeAre />} />
        <Route path ='/whatwedo' element = {<WhatWeDo />} />
        <Route path ='/ourteam' element = {<OurTeam />} />
    </Routes>
  )
}

export default RouteName