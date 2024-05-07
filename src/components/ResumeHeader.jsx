
import '../styles/ResumeHeader.css';

function ResumeHeader({ personalInfo }) {
    return (
        <header>
            {personalInfo.name && <h1>{personalInfo.name}</h1>}
            <div className='opt-info'>
                {personalInfo.email && (
                    <div>
                        <span className='material-icons'>email</span>
                        {personalInfo.email}
                    </div>
                )}
                {personalInfo.phone && (
                    <div>
                        <span className='material-icons'>phone</span>
                        {personalInfo.phone}
                    </div>
                )}
                {personalInfo.address && (
                    <div>
                        <span className='material-icons'>location_city</span>
                        {personalInfo.address}
                    </div>
                )}
            </div>
        </header>
    )
}

export default ResumeHeader;