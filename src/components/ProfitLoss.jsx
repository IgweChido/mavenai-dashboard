import React from 'react'


function ProfitLoss(props) {
    const bal={
        width:'245px',
        height: '74px'
    }
    

    const mt={
        marginTop: '44px',
        fontSize:'11px'
    }
    const mt2={
        marginTop: '50px',
    }
   
  return (
      <div class='  ' style={bal}>
          <div class='d-flex' >

                <div class=' me-4 '>
                    <p class='m-0 fs-16px text-secondary mb-2' >{props.name}</p>
                    <p class='m-0 fs-30px' >${props.amount}</p>
                </div>

                {/* triangle and percentage */}
                <div className=' d-flex '>
                    {/* triangle */}
                    <div class=''>
                        <img src={props.image} alt='' class='me-1' style={mt2}></img>
                    </div>
                    {/* number */}
                    <div class=''>
                        <p class={`mb-0 ${props.stylo}`} style={mt}>+{props.percent}</p>
                    </div>
                </div>
        

            </div>
      </div>
    
  )
}

export default ProfitLoss