export default function ExperienceSidebar({ experienceArrData, onEdit }) {
  return (
    <>
      <h1>Experience</h1>
      {experienceArrData.map((experienceObj) => (
        <>
          <p>{experienceObj.companyName}</p>
          <button
            onClick={() => {
              onEdit(experienceObj.id);
            }}
          >
            Edit
          </button>
        </>
      ))}
      <button>Add Experience</button>
    </>
  );
}
