

export default function Result({personalData}){
    const {fullName, email, phoneNumber, address} = personalData
    return (
        <>
            <div className="result-header">
                <h1>{fullName}</h1>
                <div className="additional-info">
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                    <p>{address}</p>
                </div>
            </div>
            <div className="education-data">

            </div>
        </>
    )
}