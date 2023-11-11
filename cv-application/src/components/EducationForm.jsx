import { useState } from "react"

export default function EducationForm({selectedEducationData = {school:'',degree:'',startDate:'',endDate:'',location:'',id:''}, onCancel, onSubmit}){
    const {school = '', degree = '', startDate = '', endDate = '', location = '', id = ''} = selectedEducationData
    //the flow , take form data from App.jsx, then use it to make state for currentStateFOrm, then if there is edit, 
    // will update the currentStateForm with the latest update, after that if we push submit, then that data will be sent
    // to the App.jsx using callback, then will update the educationArr state item that has the same uuid.
    const [currentFormState, setCurrentFormState] = useState(selectedEducationData)

    function handleInputChange(e){
        
        if(e.target.id === 'school'){
            setCurrentFormState({...currentFormState, school: e.target.value})
        } else if (e.target.id === 'degree') {
            setCurrentFormState({...currentFormState, degree: e.target.value})      
        } else if (e.target.id === 'startDate') {
            setCurrentFormState({...currentFormState, startDate: e.target.value})                     
        } else if (e.target.id === 'endDate') {
            setCurrentFormState({...currentFormState, endDate: e.target.value})            
        } else if (e.target.id === 'location') {
            setCurrentFormState({...currentFormState, location: e.target.value})            
        } 
    }
    return (
        <>
            <h1>Education</h1>
            <form>
                <label>
                    School:{' '}
                    <input value={currentFormState.school} id='school' onChange={handleInputChange}/>
                </label>
                <label>
                    Degree:{' '}
                    <input value={currentFormState.degree}  id='degree' onChange={handleInputChange}/>
                </label>
                <label>
                    Start Date:{' '}
                    <input value={currentFormState.startDate}  id='startDate' onChange={handleInputChange}/>
                </label>
                <label>
                    End Date:{' '}
                    <input value={currentFormState.endDate}  id='endDate' onChange={handleInputChange}/>
                </label>
                <label>
                    Location:{' '}
                    <input value={currentFormState.location}  id='location' onChange={handleInputChange}/>
                </label>
                <button type='submit' onClick={(e)=>onSubmit(e,currentFormState)}>submit</button>
                <button onClick={onCancel}>cancel</button>
            </form>
        </>
    )
}