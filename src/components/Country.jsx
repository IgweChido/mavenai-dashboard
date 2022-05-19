import React from 'react'


function Country(props) {

    const country ={
        width: '180px',
        // height: '150px',
        
       
    }

    const numsarrows ={
        width: 'fit-content',
       
    }

    const chartt ={
        width: 'fit-content',
    }

  return (
    <div class=' d-inline-block  p-4 bg-white ' style={country}>

        {/* name */}
        <div class=' mb-2'>
            <p class='m-0 text-center' >{props.name}</p>
        </div>

        {/* numbers & arrows */}
        <div class=' d-flex  d-block mx-auto mb-2 fs-29px' style={numsarrows}>
            {/* numbers */}
            <div class=' me-2'>
                <p class='m-0  text-center'> {props.number}</p>
            </div>

            {/* arrows */}
            <div class=' position-relative'>
                <img src={props.tri} alt='' class='position-absolute top-50'></img>

            </div>
        </div>

        {/* chart */}
        <div class='  d-block mx-auto'style={chartt}>
            <img src={props.chart} alt=''></img>
        </div>

    </div>
  )
}

export default Country