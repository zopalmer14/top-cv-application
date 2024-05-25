
import '../styles/ResumeEntryList.css';

function ResumeEntryList({ type, entries }) {
    const isEdu = type === 'Education';

    return (
        <div className='list-container'>
            <h1>{type}</h1>
            <ul>
            {entries && entries.map((entry, index) => {
                const title = isEdu ? entry.school : entry.company;
                
                return (
                    <li key={index}>
                        {title}
                    </li>
                )
            })}
            </ul>
            <button>+ {type}</button>
        </div>
    )
}

export default ResumeEntryList;