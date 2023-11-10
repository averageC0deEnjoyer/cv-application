import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Result from './components/Result'


export default function App() {
  const [educationArr, setEducationArr] = useState([ 
    {school: 'LCU', degree: 'watafak', startDate:'wheneber', endDate:'tomoro', location: 'newyork' },
    {school: 'UCL', degree: 'mamah', startDate:'wheneber', endDate:'tomoro', location: 'newyork' },
 ])

  const [personalInfoObj, setPersonalInfoObj] = useState({ fullName: 'test', email:'test@test.com', phoneNumber:'123456', address:'wherever'})
  
  function handleSubmit(e){
    e.preventDefault();
  }

  function handlePersonalInfoObjChange(e){
    e.preventDefault();
    //can also set ID in input and select that ID, im using things that unfamiliar for me
    const personalInfoField = e.target.labels[0].innerText 
    switch(personalInfoField){
      case 'Full name: ':
        setPersonalInfoObj({...personalInfoObj, fullName: e.target.value});
      break;
      case 'Email: ':
        setPersonalInfoObj({...personalInfoObj, email: e.target.value});
      break;
      case 'Phone Number: ':
        setPersonalInfoObj({...personalInfoObj, phoneNumber: e.target.value});
      break;
      case 'Address: ':
        setPersonalInfoObj({...personalInfoObj, address: e.target.value});
      break;
    }
  } 

  

  
  return (
    <div className='app-container'>
      <div className='side-bar'>
        <PersonalDetails whenChange = {handlePersonalInfoObjChange} personalData = {personalInfoObj}/>
        <Education onSubmit={handleSubmit} data={educationArr}/>
      </div>
      <Result personalData = {personalInfoObj} />
    </div>
  )
}
