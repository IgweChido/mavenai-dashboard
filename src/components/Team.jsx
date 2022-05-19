import React from 'react'

import './styles.scss'
import TeamMember from './TeamMember'




function Team(props) {
  
 

  const minmax={
    
    minWidth: '240px',
    
   
  }

  const nam={
    fontSize:'13px',
  }
  
  return (
    <div class='  d-flex p-2 position-relative rounded-2 shadow my-2 bg-white w-100 ' style={minmax}> 
        {/* image */}
        <div class=' me-2'>
            <img src={props.image} alt=''></img>
        </div>

        <div class=' pt-2'>
            <p class=' m-0' style={nam}>{props.name}</p>
        </div>

        {/* type of team member */}
        {/* <TeamMember type='Top Trader'/> */}
        <TeamMember type={props.type} manager={props.manager}/>
    </div>
  )
}

export default Team