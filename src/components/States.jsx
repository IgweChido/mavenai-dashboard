import React from 'react'
import './styles.scss'


function States(props) {

    const states ={
        minWidth: '225px',
        // maxWidth: '420px'
    }
    const line ={
       
        height: '4px',
        marginTop: '7px',
        width: `${props.per}`,
    }

    const flagName ={
        fontSize: '11px'
    }

    const percent ={
        fontSize: '11px'
    }

    const linePercent={
      
    }

  return (
    <div class=' mx-2 my-3 bg-white' style={states}>
        {/* flag and name */}
        <div class=' d-flex ' style={flagName}>
            {/* flag */}
            <div  class=' me-2' >
                <img src={props.image} alt='' class='w-100'></img>
            </div>

            {/* name */}
            <div  class=''>
                <p class='m-0 mt-1'>{props.name}</p>
            </div>
        </div>

        {/* line and percentage */}
        <div  class='  d-flex' style={linePercent}>
            {/* line*/}
            <div class=' rounded-2 bg-success  me-1' style={line}>

            </div>

            {/* percentage */}
            <div  class='' style={percent}>
                <p class='m-0'>{props.per}</p>
            </div>

        </div>
    </div>
  )
}

export default States