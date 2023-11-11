export default function EducationForm({selectedEducationData = {}, onCancel, onSubmit}){
    const {school = '', degree = '', startDate = '', endDate = '', location = ''} = selectedEducationData
    
    return (
        <>
            <h1>Education</h1>
            <form>
                <label>
                    School:{' '}
                    <input value={school}  />
                </label>
                <label>
                    Degree:{' '}
                    <input value={degree}  />
                </label>
                <label>
                    Start Date:{' '}
                    <input value={startDate}  />
                </label>
                <label>
                    End Date:{' '}
                    <input value={endDate}  />
                </label>
                <label>
                    Location:{' '}
                    <input value={location}  />
                </label>
                <button type='submit' onClick={onSubmit}>submit</button>
                <button onClick={onCancel}>cancel</button>
            </form>
        </>
    )
}