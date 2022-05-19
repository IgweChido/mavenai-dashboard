import React from 'react'
import Currenc from './currenc'
import bit from '../Images/bitcoin.png'
import dols from '../Images/dollar.png'
import yuan from '../Images/yuan.png'
import euro from '../Images/euro.png'


function Currency() {
  const bal={
    width:'253px'
}

const curr={
  width:'fit-content',
 
}


return (
<div class='  postition-relative' style={bal}>
  <div class=' position-relative ms-83' style={curr}>
    <p class='m-0 fs-16px text-secondary mb-2'>CURRENCIES</p>
   
    {/* currencies  */}
    <Currenc image={bit}/>
    <Currenc image={dols}/>
    <Currenc image={yuan}/>
    <Currenc image={euro}/>
  </div>
    

</div>
)
}

export default Currency