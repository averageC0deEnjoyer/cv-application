export default function Result({
  personalData,
  educationData,
  experienceData,
}) {
  const { fullName, email, phoneNumber, address } = personalData;
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
        <h1>Education</h1>
        <ul>
          {educationData.map((obj) => {
            return (
              <>
                <li>{obj.school}</li>
                <li>{obj.degree}</li>
                <li>{obj.startDate}</li>
                <li>{obj.endDate}</li>
                <li>{obj.location}</li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="experience-data">
        <h1>Experience</h1>
        <ul>
          {experienceData.map((obj) => {
            return (
              <>
                <li>{obj.companyName}</li>
                <li>{obj.positionTitle}</li>
                <li>{obj.startDate}</li>
                <li>{obj.endDate}</li>
                <li>{obj.location}</li>
                <li>{obj.description}</li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
