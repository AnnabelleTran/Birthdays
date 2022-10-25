import React, { useState } from 'react'
import './App.css';
import People from './People'
import List from './list'

function PeopleBirthdays (){
    const [people, setPeople] = useState(People)
  return (
    <div class = "mainbox">
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </div>
  )
}

export default PeopleBirthdays;