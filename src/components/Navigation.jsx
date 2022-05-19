import React from 'react'
import NavComp from './NavComp'
import user from '../Images/user.png'
import dash from '../Images/dashboard1.svg'
import anal from '../Images/analytics1.svg'
import trad from '../Images/trading1.svg'
import log from '../Images/logout1.svg'
import not from '../Images/notifications1.svg'


function Navigation() {

        const navigate={
           
            zIndex: '2'
        }
    
  return (
    <div class='  w-100 ' style={navigate}>

       <NavComp name='Dashboard' image={dash} shade='shadow' color='' />
       <NavComp name='Analytics' image={anal} color='text-secondary'/>
       <NavComp name='Trading' image={trad} color='text-secondary'/>
       <NavComp name='Notification' image={not} color='text-secondary' />

        {/* logout component */}
       <div class='position-absolute  start-0 bottom-0 w-100 '>
            <NavComp name='Logout' image={log} color='text-secondary'/>
       </div>
    </div>
  )
}

export default Navigation