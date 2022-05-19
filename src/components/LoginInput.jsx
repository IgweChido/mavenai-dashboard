import React, {useContext} from 'react'
import {Ucontext }from './UserContext'


function LoginInput(props) {
    
    const [state, setState] = useContext(Ucontext);
    var value ='';
    const getValue=(e)=>{
       
         value =(e.target.value);
         const vv={
             username: value,
         }

         setState(vv)
       
    }

   
  return (
      <div class='input-group my-3'>
           {/* full name */}
            <input class='w-100  form-control'type='text' placeholder={`${props.holder}`} onChange={getValue}></input>
      </div>
   
  )
}

export default LoginInput