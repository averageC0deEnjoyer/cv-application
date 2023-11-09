import EducationList from "./EducationList"


export default function Education ({ onSubmit, data }){


    
    return (
        <div className='education'>
            <h1>Education</h1>
            {data.map(item=><EducationList educationData={item}/>)}
            
            
            {/* <form onSubmit={onSubmit}>
                <label>
                    School:{' '}
                    <input value='test'  />
                </label>
                <label>
                    Degree:{' '}
                    <input value='test'  />
                </label>
                <label>
                    Start Date:{' '}
                    <input value='test'  />
                </label>
                <label>
                    End Date:{' '}
                    <input value='test'  />
                </label>
                <label>
                    Location:{' '}
                    <input value='test'  />
                </label>
                <button type='submit'>submit</button>
            </form> */}
        </div>
    )
}