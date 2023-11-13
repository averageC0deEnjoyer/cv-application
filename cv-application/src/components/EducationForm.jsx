import { useState } from 'react';

export default function EducationForm({
  selectedEducationData = {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
    id: '',
  },
  onCancel,
  onSubmit,
  onDelete,
}) {
  const {
    school = '',
    degree = '',
    startDate = '',
    endDate = '',
    location = '',
    id = '',
  } = selectedEducationData;
  //the flow , take form data from App.jsx, then use it to make state for currentStateFOrm, then if there is edit,
  // will update the currentStateForm with the latest update, after that if we push submit, then that data will be sent
  // to the App.jsx using callback, then will update the educationArr state item that has the same uuid.
  const [currentFormState, setCurrentFormState] = useState(
    selectedEducationData
  );

  function handleInputChange(e) {
    setCurrentFormState({
      ...currentFormState,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <h1>Education</h1>
      <form>
        <label>
          School:{' '}
          <input
            value={currentFormState.school}
            name="school"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Degree:{' '}
          <input
            value={currentFormState.degree}
            name="degree"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Date:{' '}
          <input
            value={currentFormState.startDate}
            name="startDate"
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Date:{' '}
          <input
            value={currentFormState.endDate}
            name="endDate"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:{' '}
          <input
            value={currentFormState.location}
            name="location"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" onClick={(e) => onSubmit(e, currentFormState)}>
          submit
        </button>
        <button onClick={onCancel}>cancel</button>
        {id != '' && <button onClick={onDelete}>delete</button>}
      </form>
    </>
  );
}
