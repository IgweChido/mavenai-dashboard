import React from 'react'
import Balance from './Balance'
import Currency from './Currency'
import ProfitLoss from './ProfitLoss'

import tri from '../Images/triangle.png'
import tri1 from '../Images/triangle1.png'

function Balances() {

  const balances={
    width: '1100px',
    
    
    
  }
  const line={
    width: '2px',
    heigth: '0px',
    
  }
  return (
    <div class=' d-flex my-5 mx-4  my-md-5 me-md-5 ms-md-0' style={balances}>
        {/* Balance */}
        <Balance/>
        {/* line */}
        <div class='bg-dark me-80' style={line}>

        </div>

        {/* Profit and Loss */}
        <ProfitLoss name='PROFITS' image={tri} amount='340.00' percent='49%' stylo='text-success'/>
        {/* line */}
        <div class='bg-dark me-80' style={line}>

        </div>
        <ProfitLoss name='LOSSES' image={tri1} amount='20.00' percent='12%' stylo='text-danger'/>

        {/* line */}
        <div class='bg-dark ' style={line}>

        </div>

        {/* currencies */}
        <Currency/>
    </div>
  )
}

export default Balances