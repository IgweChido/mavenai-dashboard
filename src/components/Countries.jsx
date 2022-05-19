import React from 'react'
import Country from './Country'
import tri from '../Images/triangle.png'
import chart from '../Images/chart.png'
import tri1 from '../Images/triangle1.png'
import chart1 from '../Images/chart1.png'
import chart2 from '../Images/chart2.png'


function Countries() {

    const countries={
        width: '1082px',
       
    }
  return (
    <div class=' shadow m-4 my-md-4 me-md-4 ms-md-0'  style={countries}>
        <Country name='Italy' tri={tri} chart={chart} number='400'/>
        <Country name='Nigeria' tri={tri} chart={chart1} number='44'/>
        <Country name='Canada' tri={tri1} chart={chart2} number='19'/>
        <Country name='France' tri={tri} chart={chart1} number='566'/>
        <Country name='United Kingdom' tri={tri1} chart={chart2} number='234'/>
        <Country name='South Africa' tri={tri} chart={chart} number='89'/>
    </div>
  )
}

export default Countries