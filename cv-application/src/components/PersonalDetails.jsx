import '../styles/personalDetails.css' 

export default function PersonalDetails({value = 'test'}) {
    // [stateObject, setStateObject] = useState({})
    return (
      <div className='personal'>
        <h1>Personal Details</h1>
        <label>
          Full name:{' '}
          <input value={value}  />
        </label>
        <label>
          Email: {' '}
          <input value={value}  />
        </label>
        <label>
          Phone Number: {' '}
          <input value={value}  />
        </label>
        <label>
          Address: {' '}
          <input value={value}  />
        </label>
      </div>
    )
  }
  
  
  