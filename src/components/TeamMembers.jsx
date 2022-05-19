import React from 'react'

import user from '../Images/userr.svg'
import user1 from '../Images/user11.svg'
import user2 from '../Images/user21.svg'
import user3 from '../Images/user31.svg'
import Team from './Team'

function TeamMembers() {
  
  

  const cursor ={
    cursor: 'pointer'
  }

  
  return (
    <div class='  mt-4 w-100' >

      {/* Team Members */}
      <div class=' d-flex position-relative'>
        <p class='fs-24px ' >Team Members</p>
        <p class=' mt-2 position-absolute end-0 text-primary' style={cursor}>View All</p>
      </div>

      {/* team */}
         <Team type='Top Trader' name='Igwe Chidera' image={user1} manager={false}/>
         <Team type='Manager' name='Catherina pathrova ' image={user3} manager={true}/>
         <Team type='Top Trader' name='Andrew Robertson' image={user} manager={false}/>
         <Team type='Manager' name='Betty patterson' image={user2} manager={true}/>
        
        
      

    </div>
  )
}

export default TeamMembers