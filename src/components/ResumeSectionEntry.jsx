
import '../styles/ResumeSectionEntry.css';

function ResumeSectionEntry({ title, subtitle, startDate, endDate, location, desc }) {
    return (
        <div className='entry-container'>
            <div className="header">
                <div>
                    <h2>{title}</h2>
                    <div>{subtitle}</div>
                </div>
                <div className='right-side'>
                    <div>{location}</div>
                    <div>{startDate} - {endDate}</div>
                </div>
            </div>
            {desc && <div>{desc}</div>}
        </div>
    )
}

export default ResumeSectionEntry;