
import ResumeSectionEntry from './ResumeSectionEntry.jsx'
import '../styles/ResumeSection.css';

function ResumeSection({ type, entries }) {
    const isEdu = type === 'Education';

    console.log(entries)

    return (
        <div className='resume-section'>
            <h1>{type}</h1>
            <ul>
                {entries && entries.map((entry) => {
                    const title = isEdu ? entry.school : entry.company;
                    const subtitle = isEdu ? entry.degree : entry.position;
                    const desc = isEdu ? '' : entry.desc;
                    
                    return (
                        <ResumeSectionEntry
                            key={title}
                            title={title}
                            subtitle={subtitle}
                            startDate={entry.startDate}
                            endDate={entry.endDate}
                            location={entry.location}
                            desc={desc}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ResumeSection;