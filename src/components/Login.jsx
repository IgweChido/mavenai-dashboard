import React, {useContext} from 'react'
import {Lcontext }from './LoginContext'
import LoginInput from './LoginInput'

function Login() {
    
    const [Lstate, LsetState] = useContext(Lcontext);

    const closeLogin=()=>{
        LsetState(false);
    }
    
    const cursor={
        cursor:'pointer',
    }

    const blurr ={
        zIndex:'3',
        backdropFilter: 'blur(5px)',

    }

    const zindex={

        zIndex:'4',
    }
  return (

    // transparent background
    <div class='col col-12 bg-transparent  position-fixed h-100 ' style={blurr}>
        {/* the main box */}
        <div class=' col col-9 col-sm-7 col-md-5 col-xl-3 d-block   mx-auto p-3 bg-light shadow rounded-2 mt-25 mt-md-16 mt-xl-10' style={zindex}>
            <div class='mt-3'>
                <p class=' m-0 text-center  fw-bold mb-2 text-danger fs-24px'>Welcome !</p>
                <p class=' m-0 text-center  '>Sign In </p>
            </div>
            <form className=''>
                
                {/* input */}
                <div class=''>
                 <LoginInput holder='full name'/>

                 <div class='input-group my-3'>
                     {/* email name */}
                     <input class='w-100  form-control'type='text' placeholder='email' ></input>
                 </div>
                </div>
                
                

                {/* button */}
                <button class='mt-4 mb-3 d-block mx-auto bg-success border border-none py-2 px-3 rounded-2 shadow' style={cursor} onClick={closeLogin}>
                    <p class='m-0 text-white'>Get Started</p>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login