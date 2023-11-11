import EducationList from "./EducationList"


export default function EducationSidebar ({ onEdit, data, onAddNewData }){


    
    return (
        <div className='education'>
            <h1>Education</h1>
            {data.map(item=><EducationList key={data.id} educationData={item} onEdit={onEdit}/>)}   
            <button onClick={onAddNewData} className='new-data-btn'>Add New Data</button>         
        </div>
    )
}