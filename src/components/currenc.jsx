import React from 'react'
import bit from '../Images/bitcoin.png'

function Currenc(props) {
    const circle={
        width:'30px',
        height:'30px',
      
      }

  return (
    <div class=' d-inline-block me-2 mt-2'>
      {/* image */}
      <div class='border border-white rounded-circle bg-info' style={circle} >
        <img src={props.image} alt='' class=' mb-0 mx-auto d-block mt-7px'></img>
      </div>
    </div>
  )
}

export default Currenc