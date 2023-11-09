import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'

export default function App() {
  const [educationArr, setEducationArr] = useState([ 
    {school: 'LCU', degree: 'watafak', startDate:'wheneber', endDate:'tomoro', location: 'newyork' },
    {school: 'UCL', degree: 'mamah', startDate:'wheneber', endDate:'tomoro', location: 'newyork' },
 ])
  
  function handleSubmit(e){
    e.preventDefault();
  }
  
  return (
    <>
      <h1>test</h1>
      <PersonalDetails />
      <Education onSubmit={handleSubmit} data={educationArr}/>
    </>
  )
}


