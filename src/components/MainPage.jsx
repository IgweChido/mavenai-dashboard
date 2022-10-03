
import React, {useContext} from "react";
import {Context } from './Store'
import {Lcontext }from './LoginContext'
import TeamMembers from './TeamMembers';
import Balances from './Balances';
import Comparison from './Comparison';
import Countries from './Countries';
import Header from './Header';
import Navigation from './Navigation';
import './styles.scss'
import Login from "./Login";


function MainPage() {

  const [state, setState] = useContext(Context);
  const [Lstate, LsetState] = useContext(Lcontext);
 

  const app={
    overflowX: 'auto',
  
    // scrollbarWidth: 'none'
  }

  const fleex ={
    maxWidth:'1220px',
  }

  const blure ={
  
    backdropFilter: 'blur(5px)',
}
  return (

    
    <div class='container-fluid'>

      {/* login modal */}
      {Lstate.openLogin && 
        <div class='row' >
        <Login/>
        </div>
      }
      


      <div class='row   '>
          
            {/* col 1 */}
            <div class='bg-white vh-100  d-none d-lg-block position-fixed  float-lg-start  col col-0 col-lg-2 shadow'>
            
              <Navigation/>
          
            
            </div>


        {/* col2 */}
          <div  class='  position relative pb-5 float-lg-end h-100   col col-12 col-lg-10 ms-lg-16' >

              <div class='' > 
                    {/* header */}
                  <div class=' mx-3 ms-xxl-5 me-xxl-5'>
                    <Header/>
                  </div>


                  {/* balances */}
                  <div class=' ms-3 ms-xxl-5 mt-4'style={app}>
                    <Balances/>
                  </div>

                  {/* countries */}
                  <div class=' ms-3 ms-xxl-5 mt-4'style={app}>
                    <Countries/>
                  </div>

                  {/* flex area */}
                  <div class=' d-lg-flex'style={fleex} >
                      {/* Team members */}
                        <div class=' mx-3 ms-xxl-5 mt-4 col col-lg-5'>
                          <TeamMembers/>
                        </div>

                      {/* Compare states */}
                        <div class=' mx-3 ms-xxl-5 mt-4 col col-lg-5'>
                          <Comparison/>
                        </div>
                  </div>

                  
              </div>



            {state.openNav && 
              <div class=' position-fixed top-0 start-0 vh-100 w-50 bg-white d-lg-none'>
              
                  <Navigation/>
              </div>

            }
            </div>

      </div>
          
    </div>
   

  )
}

export default MainPage