import React, {useContext} from 'react'
import {Context }from './Store'
import {Ucontext }from './UserContext'
import userb from '../Images/userbig1.svg'
import users from '../Images/usersmall1.svg'
import cross from '../Images/cross1.svg'

function Header() {

    const [state, setState] = useContext(Context);
    const [Ustate, UsetState] = useContext(Ucontext);

    const trial ={
        openNav: true,
        closeNav: false
    } 

    const btrial ={
        openNav: false,
        closeNav: true
    } 

    const openNavig=()=>{

        if(state.openNav === true ){
            setState(btrial);
        }
        else{
            setState(trial);
        }
       
        console.log(state.openNav)
        console.log(state.closeNav)
        
        
    }

    const main={
        border: '1px solid transparent',
       
    }

   

    const btn={
        height: '50px',
        cursor: 'pointer'
         
    }

    const flex1={
        marginTop:'120px',
    }

    const cursor ={
        cursor: 'pointer'
      }


  return (
    <div class=' d-flex-column position-relative pt-3 pt-md-50' style={main}>
       
        {/* flex2 */}
        <div class=' d-flex position-absolute end-0 mt-3 position-md-relative end-md-auto'>

             {/* button */}
             <div class=' bg-success d-flex py-2 px-3 rounded-2 me-4 mt-2 shadow' style={btn}>
                <div class=' mt-1 me-2'>
                    <img src={cross} alt=''></img>
                </div>

                <div class=' mt-1'>
                    <p class='m-0 text-white'>Add unit</p>
                </div>

            </div>


            {/* image */}
            <div class=' d-flex '>
                <div class=' me-md-4 shadow rounded-circle' onClick={openNavig} style={cursor}>
                    <img src={userb} alt='' class='d-none d-lg-block p-2'></img>
                    <img src={users} alt='' class=' d-lg-none  p-2'></img>
                </div>

                <div class=' d-none d-md-block mt-md-3'>
                    <p class='text-secondary fs-16px'>{Ustate.username}</p>
                </div>
                
            </div>


        </div>

         {/* flex1 */}
         <div class='  mt-120  mt-md-2' >
            <div class=' mb-2'>
                <p class='m-0  fs-35px ' >Dashboard</p>
            </div>

            <div class=''>
                <p class='m-0 text-secondary  fs-16px '>Welcome back {Ustate.username}</p>
            </div>
        </div>

    </div>
  )
}

export default Header