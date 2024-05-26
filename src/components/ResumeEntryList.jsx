
import '../styles/ResumeEntryList.css';

function ResumeEntryList({ type, entries, onClick }) {
    const isEdu = type === 'Education';

    return (
        <div className='list-container'>
            <h1>{type}</h1>
            <ul>
                {entries && entries.map((entry, index) => {
                    const title = isEdu ? entry.school : entry.company;
                    
                    return (
                        <li key={index}>
                            <div>{title}</div>
                            <span className='material-icons'>delete</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={onClick}>+ {type}</button>
        </div>
    )
}

export default ResumeEntryList;