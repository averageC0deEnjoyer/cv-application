import '../styles/personalDetails.css' 

export default function PersonalDetails({personalData, whenChange}) {
    // [stateObject, setStateObject] = useState({})
    const {fullName, email, phoneNumber, address} = personalData
    return (
      <div className='personal'>
        <h1>Personal Details</h1>
        <label>
          Full name:{' '}
          <input value={fullName} onChange = {whenChange}/>
        </label>
        <label>
          Email: {' '}
          <input value={email} onChange = {whenChange}/>
        </label>
        <label>
          Phone Number: {' '}
          <input value={phoneNumber} onChange = {whenChange} />
        </label>
        <label>
          Address: {' '}
          <input value={address} onChange = {whenChange} />
        </label>
      </div>
    )
  }
  
  
  