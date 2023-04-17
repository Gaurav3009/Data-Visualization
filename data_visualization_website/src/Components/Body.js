import React from 'react'
import Selection from './Selection';
import Output from './Output';
import '../style/Body.scss';

function Body() {
  return (
    <section className="bod">
      <Selection/>
      <Output/>
    </section>
  )
}

export default Body