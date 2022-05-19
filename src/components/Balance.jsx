import React from 'react'

function Balance() {
    const bal={
        width:'190px',
        height: '74px'
    }
    
   
  return (
    <div class=' ' style={bal}>
        <p class='m-0 fs-16px text-secondary mb-2' >BALANCE</p>
        <p class='m-0 fs-30px' >$5900.00</p>

    </div>
  )
}

export default Balance