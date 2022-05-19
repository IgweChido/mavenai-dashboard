import React from 'react'
import './styles.scss'

function TeamMember(props) {
    const font={
        fontSize:'11px',
        marginTop: '8px',
        backgroundColor:'#ECF2FE',
      
      }
      const font1={
        fontSize:'11px',
        marginTop: '8px',
        backgroundColor:'#E5FCF3',
      
      }
  return (
    <div>
         {props.manager ? <div class=' position-absolute  end-0 me-2 px-2 py-1 rounded-pill font-size-1 ' style={font}>
            <p class='m-0 text-primary'>{props.type}</p>
        </div> 
        :


        <div class=' position-absolute  end-0 me-2 px-2 py-1 rounded-pill font-size-1 ' style={font1}>
            <p class='m-0 text-success'>{props.type}</p>
        </div>
        }

         

    </div>
 
  )
}

export default TeamMember