import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Result from './components/Result'
import Form from './components/Form'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [educationArr, setEducationArr] = useState([ 
    {school: 'LCU', degree: 'watafak', startDate:'wheneber', endDate:'tomoro', location: 'newyork', id: uuidv4() },
    {school: 'UCL', degree: 'mamah', startDate:'wheneber', endDate:'tomoro', location: 'newyork', id: uuidv4() },
 ])

  const [personalInfoObj, setPersonalInfoObj] = useState({ fullName: 'test', email:'test@test.com', phoneNumber:'123456', address:'wherever'})
  
  const [isActiveEducationForm, setIsActiveEducationForm] = useState(false);

  const [selectedEducationId, setSelectedEducationId] = useState('');

  function handleSubmit(e, newObj){
    e.preventDefault();
    setEducationArr([...educationArr,newObj])
  }

  function handleAddNewData(){
    setIsActiveEducationForm(!isActiveEducationForm)
  }

  function handleEditEducation(educationId){
    //should i put e.preventDefault() here??? (button) //i think doesnt need cause it is not an form submit event
    setIsActiveEducationForm(!isActiveEducationForm);
    setSelectedEducationId(educationId);
  }

  function handleCancelEditEducation(e){
    e.preventDefault();
    setIsActiveEducationForm(!isActiveEducationForm);
    setSelectedEducationId('');
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
        {!isActiveEducationForm && <Education onEdit={handleEditEducation} data={educationArr} onAddNewData={handleAddNewData}/>}
        {isActiveEducationForm && selectedEducationId !== '' && <Form selectedEducationData = {educationArr.find(education=>education.id === selectedEducationId)} onCancel = {handleCancelEditEducation} onSubmit={handleSubmit}/>}
        {isActiveEducationForm && selectedEducationId === '' && <Form onCancel = {handleCancelEditEducation} onSubmit={handleSubmit}/>}
      </div>
      <Result personalData = {personalInfoObj} />
    </div>
  )
}
