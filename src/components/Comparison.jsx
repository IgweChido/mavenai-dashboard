import React from 'react'
import States from './States'
import flag from '../Images/flagg.svg'
import flag1 from '../Images/flag11.svg'
import flag2 from '../Images/flag21.svg'
import flag3 from '../Images/flag31.svg'

function Comparison() {
 

  const cursor ={
    cursor: 'pointer'
  }
  
  return (
    <div class='  w-100 mt-4' >

       {/* Team Members */}
       <div class=' d-flex position-relative'>
        <p class='fs-24px ' >Comparison</p>
        <p class=' mt-2 position-absolute end-0 text-primary' style={cursor}>View All</p>
      </div>

      <div class='bg-white rounded-2 p-1 shadow mt-2'>
        <States name='Nigeria' image={flag2} per='84%'/>
        <States name='United Kigdom' image={flag1} per='2%'/>
        <States name='United States' image={flag} per='56%'/>
        <States name='France' image={flag3} per='29%'/>
      </div>

        
    </div>
  )
}

export default Comparison