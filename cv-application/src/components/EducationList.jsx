export default function EducationList({educationData, onEdit}){

    return (
        <>
            <p>{educationData.school}</p>
            <button onClick ={()=>onEdit(educationData.id)}>Edit</button>
        </>
    )
}