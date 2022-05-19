import React from 'react'


function NavComp(props) {
    const dash={
        width: '60%',
        cursor: 'pointer'
    }

    const dashImg={
        width: '35%',
        
    }

    const dashword={
        fontSize: '14px'
    }

  return (
    
         /* dashboard */
         <div class={` d-block mx-auto my-4 px-2 py-3 ${props.shade}  rounded-2 `} style={dash}>
            {/* image */}
            <div class=' d-block mx-auto mb-2' style={dashImg}>
                <img src={props.image} alt='' class='w-100'></img>
            </div>
            {/* name */}
            <div  class=''>
            <p  class={`m-0 text-center ${props.color}`} style={dashword}>{props.name}</p>
            </div>
        </div>
   
  )
}

export default NavComp