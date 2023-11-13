import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import EducationSidebar from './components/EducationSidebar';
import Result from './components/Result';
import EducationForm from './components/EducationForm';
import { v4 as uuidv4 } from 'uuid';
import ExperienceSidebar from './components/ExperienceSidebar';
import ExperienceForm from './components/ExperienceForm';

export default function App() {
  const [educationArr, setEducationArr] = useState([
    {
      school: 'LCU',
      degree: 'degree1',
      startDate: 'wheneber',
      endDate: 'tomoro',
      location: 'newyork',
      id: uuidv4(),
    },
    {
      school: 'UCL',
      degree: 'degree2',
      startDate: 'wheneber',
      endDate: 'tomoro',
      location: 'newyork',
      id: uuidv4(),
    },
  ]);

  const [personalInfoObj, setPersonalInfoObj] = useState({
    fullName: 'test',
    email: 'test@test.com',
    phoneNumber: '123456',
    address: 'wherever',
  });

  const [experienceArr, setExperienceArr] = useState([
    {
      companyName: 'company test 1',
      positionTitle: 'position test 1',
      startDate: '01/2021',
      endDate: '01/2022',
      location: 'location test 1',
      description: 'description test 1',
      id: uuidv4(),
    },
    {
      companyName: 'company test 2',
      positionTitle: 'position test 2',
      startDate: '01/2021',
      endDate: '01/2022',
      location: 'location test 2',
      description: 'description test 2',
      id: uuidv4(),
    },
  ]);

  //lateer refactor 1 state for many forms
  const [isActiveEducationForm, setIsActiveEducationForm] = useState(false);

  const [selectedEducationId, setSelectedEducationId] = useState('');

  const [isActiveExperienceForm, setIsActiveExperienceForm] = useState(false);

  const [selectedExperienceId, setSelectedExperienceId] = useState('');

  function handleSubmit(e, newObj) {
    e.preventDefault();
    if (selectedEducationId === '') {
      setEducationArr([...educationArr, { ...newObj, id: uuidv4() }]);
      setIsActiveEducationForm(!isActiveEducationForm);
      setSelectedEducationId('');
    } else if (selectedEducationId !== '') {
      setEducationArr(
        educationArr.map((educationObj) => {
          if (educationObj.id === newObj.id) {
            return newObj;
          } else {
            return educationObj;
          }
        })
      ); //delete and add again the same obj with the same uuid if edit
      setIsActiveEducationForm(!isActiveEducationForm);
      setSelectedEducationId('');
    }
  }

  function handleAddNewData() {
    setIsActiveEducationForm(!isActiveEducationForm);
  }

  function handleEditEducation(educationId) {
    //should i put e.preventDefault() here??? (button) //i think doesnt need cause it is not an form submit event
    setIsActiveEducationForm(!isActiveEducationForm);
    setSelectedEducationId(educationId);
  }

  function handleCancelEditEducation(e) {
    e.preventDefault();
    setIsActiveEducationForm(!isActiveEducationForm);
    setSelectedEducationId('');
  }

  function handleDeleteEducationObjData(e) {
    e.preventDefault();
    setEducationArr(
      educationArr.filter(
        (educationObj) => educationObj.id !== selectedEducationId
      )
    );
    setIsActiveEducationForm(!isActiveEducationForm);
    setSelectedEducationId('');
  }

  function handlePersonalInfoObjChange(e) {
    e.preventDefault();
    //can also set ID in input and select that ID, im using things that unfamiliar for me
    const personalInfoField = e.target.labels[0].innerText;
    switch (personalInfoField) {
      case 'Full name: ':
        setPersonalInfoObj({ ...personalInfoObj, fullName: e.target.value });
        break;
      case 'Email: ':
        setPersonalInfoObj({ ...personalInfoObj, email: e.target.value });
        break;
      case 'Phone Number: ':
        setPersonalInfoObj({ ...personalInfoObj, phoneNumber: e.target.value });
        break;
      case 'Address: ':
        setPersonalInfoObj({ ...personalInfoObj, address: e.target.value });
        break;
    }
  }

  function handleEditExperience(experienceObjId) {
    setSelectedExperienceId(experienceObjId);
    setIsActiveExperienceForm(!isActiveExperienceForm);
  }

  function handleSubmitExperience(e, latestExperienceDataObj) {
    e.preventDefault();
    setExperienceArr(
      experienceArr.map((experienceObj) => {
        if (experienceObj.id === selectedExperienceId) {
          return latestExperienceDataObj;
        } else {
          return experienceObj;
        }
      })
    );
    setSelectedExperienceId('');
    setIsActiveExperienceForm(!isActiveExperienceForm);
  }

  function handleCancelEditExperience(e) {
    e.preventDefault();
    setIsActiveExperienceForm(!isActiveExperienceForm);
    setSelectedExperienceId('');
  }

  return (
    <div className="app-container">
      <div className="side-bar">
        <PersonalDetails
          whenChange={handlePersonalInfoObjChange}
          personalData={personalInfoObj}
        />
        {!isActiveEducationForm && (
          <EducationSidebar
            onEdit={handleEditEducation}
            data={educationArr}
            onAddNewData={handleAddNewData}
          />
        )}
        {isActiveEducationForm && selectedEducationId !== '' && (
          <EducationForm
            selectedEducationData={educationArr.find(
              (education) => education.id === selectedEducationId
            )}
            onDelete={handleDeleteEducationObjData}
            onCancel={handleCancelEditEducation}
            onSubmit={handleSubmit}
          />
        )}
        {isActiveEducationForm && selectedEducationId === '' && (
          <EducationForm
            onCancel={handleCancelEditEducation}
            onSubmit={handleSubmit}
          />
        )}
        {!isActiveExperienceForm && (
          <ExperienceSidebar
            experienceArrData={experienceArr}
            onEdit={handleEditExperience}
          />
        )}
        {isActiveExperienceForm && (
          <ExperienceForm
            experienceDataSelected={experienceArr.find(
              (experienceObj) => experienceObj.id === selectedExperienceId
            )}
            onSubmit={handleSubmitExperience} //maybe can use DRY to not repeat same func
            onCancel={handleCancelEditExperience}
          />
        )}
      </div>
      <Result
        personalData={personalInfoObj}
        educationData={educationArr}
        experienceData={experienceArr}
      />
    </div>
  );
}
